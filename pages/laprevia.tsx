import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";
import type { NextPage } from "next";

import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";

import {
  LaPreviaDocument,
  LaPreviaQuery,
} from "../src/graphql/laprevia.generated";
import Countdown from "../src/Components/StickyCountdown";

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
  background: #333;
  scroll-behavior: smooth;
`;

const Hero = styled.section`
  color: white;
  font-size: 32px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 3;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const HeroInfo = styled.div``;

const H1 = styled.h1`
  font-size: 100px;
  line-height: 100px;
  margin: 0;
  padding: 0 24px;
`;

const H2 = styled.h2`
  font-size: 48px;
  line-height: 48px;
  margin: 0;
  padding: 0 24px;
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
      <Suspense>
        <NavBar id="yEsNC4mdITUXpMO1REbOv" />
      </Suspense>
      <Suspense fallback={null}>
        <Hero id="home">
          <Particles backgroundColor="#666" />
          <HeroInfo style={{ zIndex: "5" }}>
            <H1>La PREVIA</H1>
            <H2>Un Streaming de JS. De JSConf Chile</H2>
            <H2>100% Online y Gratis</H2>
          </HeroInfo>
        </Hero>
      </Suspense>
      <Suspense fallback={null}>
        {props?.speakerData && (
          <div id="speakers">
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

      <Countdown />
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
