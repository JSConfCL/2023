import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";
import type { NextPage } from "next";

import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";
import { ViewportSizes } from "../styles/theme";

import {
  LaPreviaDocument,
  LaPreviaQuery,
} from "../src/graphql/laprevia.generated";
import { StyledWrapperSuspense } from "../src/Components/NavBar/components";

const Particles = lazy(async () => await import("../src/Components/Particles"));

const NavBar = dynamic(
  async () => await import("../src/Components/NavBar/NavBar"),
  {
    ssr: false,
  }
);

const SpeakerSection = lazy(
  async () => await import("../src/Components/sections/SpeakerSection")
);

const SponsorSection = lazy(
  async () => await import("../src/Components/sections/SponsorSection")
);

const TeamSection = lazy(
  async () => await import("../src/Components/sections/TeamSection")
);

const TimelineSection = lazy(
  async () => await import("../src/Components/sections/TimelineSection")
);

const FriendSection = lazy(
  async () => await import("../src/Components/sections/FriendSection")
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.backgroundColor};
  scroll-behavior: smooth;
  width: 100%;
`;

const Hero = styled.section`
  color: #000;
  font-size: 42px;
  width: 100vw;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 3;
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const HeroInfo = styled.div`
  width: 100%;
  text-align: center;
`;

const ExtraInfo = styled.div`
  z-index: 10;
  font-size: 18px;
  font-family: Barlow;
  font-weight: bold;

  div {
    text-align: center;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    display: flex;
    align-content: space-around;
    align-items: flex-end;
    width: 90%;
    font-size: 24px;
    div {
      flex: 1 1 50%;
    }

    div:first-of-type {
      text-align: left;
    }

    div:last-of-type {
      text-align: right;
    }
  }
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.jsconfRed};
  font-family: "Permanent Marker";
  font-size: 42px;
  line-height: 42px;
  margin: 0;
  padding: 0 24px;
  display: inline-block;

  &:after {
    display: block;
    content: "online";
    font-size: 16px;
    line-height: 16px;
    text-align: right;
    position: relative;
    top: -6px;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 120px;
    line-height: 120px;

    &:after {
      font-size: 24px;
      line-height: 24px;
      top: -10px;
    }
  }
`;

const H2 = styled.h2`
  font-family: "Permanent Marker";
  color: ${({ theme }) => theme.colors.jsconfRed};
  font-size: 20px;
  line-height: 20px;
  margin: 0;
  padding: 0 24px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 36px;
    line-height: 36px;
  }
`;

type Page = ParseQuery<LaPreviaQuery["page"]>;

export interface PageProps {
  seo: Page["seo"];
  speakerData: Page["speakersBlock"];
  teamData: Page["teamBlock"];
  events: Page["eventsCollection"]["items"];
  sponsorType: Page["sponsorTypeCollection"];
  friends: Page["communityFriendsCollection"];
}

const Home: NextPage<PageProps> = (props: PageProps) => {
  return (
    <Container>
      <Suspense fallback={<StyledWrapperSuspense />}>
        <NavBar id="yEsNC4mdITUXpMO1REbOv" />
      </Suspense>
      <Suspense fallback={null}>
        <Hero id="home">
          <Particles backgroundColor="#fff" />
          <div />
          <HeroInfo style={{ zIndex: "5" }}>
            <H1>La PREVIA</H1>
            <H2>10 horas de puro JavaScript</H2>
          </HeroInfo>
          <ExtraInfo>
            <div>
              Streaming en vivo.
              <br />
              Más de 10 charlistas
            </div>
            <div>
              Gratis
              <br />
              Enero 7, 2023
              <br />
              Desde las 12:00 Chile
            </div>
          </ExtraInfo>
        </Hero>
      </Suspense>
      <Suspense fallback={null}>
        {props?.speakerData && (
          <div id="speakers" style={{ marginTop: "200px" }}>
            <SpeakerSection page={props?.speakerData} />
          </div>
        )}
      </Suspense>
      <Suspense fallback={null}>
        {props?.events && (
          <div id="agenda">
            <TimelineSection events={props?.events} showLocalTime />
          </div>
        )}
      </Suspense>
      <Suspense fallback={null}>
        {props?.sponsorType && <SponsorSection page={props?.sponsorType} />}
      </Suspense>
      <Suspense fallback={null}>
        {props?.friends && <FriendSection friends={props?.friends} />}
      </Suspense>
      <Suspense fallback={null}>
        {props.teamData && <TeamSection page={props.teamData} />}
      </Suspense>
    </Container>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query(LaPreviaDocument, {
      id: "2wAn9UxGwc1bgUTOOT4SPW",
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();

  const page = queryResults.data?.page as Page;
  const props = {
    seo: page?.seo || null,
    speakerData: page?.speakersBlock || null,
    teamData: page?.teamBlock || null,
    events: page?.eventsCollection.items || null,
    sponsorType: page?.sponsorTypeCollection || null,
    friends: page?.communityFriendsCollection || null,
  };

  return {
    props,
  };
}

export default Home;
