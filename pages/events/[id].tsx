import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import Link from "next/link";
import { lazy, Suspense } from "react";

import { MapPin, Calendar } from "react-feather";

import { StyledWrapperSuspense } from "../../src/Components/NavBar/components";
import Seo from "../../src/Components/Seo";

import {
  EventDocument,
  EventQuery,
  EventQueryVariables,
} from "../../src/graphql/event.generated";

import { urlQlient } from "../../src/graphql/urql";
import { ParseQuery } from "../../src/helpers/types";
import { ViewportSizes } from "../../styles/theme";

const Particles = lazy(
  async () => await import("../../src/Components/Particles")
);

const NavBar = dynamic(
  async () => await import("../../src/Components/NavBar/NavBar"),
  {
    ssr: false,
  }
);

const RegisterTicketButton = dynamic(
  async () => await import("../../src/Components/RegisterTicketButton"),
  {
    ssr: false,
  }
);

const WhySection = lazy(
  async () => await import("../../src/Components/sections/WhySection/laprevia")
);

const SpeakerSection = lazy(
  async () => await import("../../src/Components/sections/SpeakerSection")
);

const SponsorSection = lazy(
  async () => await import("../../src/Components/sections/SponsorSection")
);

const TeamSection = lazy(
  async () => await import("../../src/Components/sections/TeamSection")
);

const TimelineSection = lazy(
  async () => await import("../../src/Components/sections/TimelineSection")
);

const FriendSection = lazy(
  async () => await import("../../src/Components/sections/FriendSection")
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
  margin-bottom: 200px;
  position: relative;
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
    margin-bottom: 24px;
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

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 120px;
    line-height: 120px;
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

const SmartButtonContainer = styled.div`
  text-align: center;
  position: relative;
  margin: 24px 16px 16px 16px;
  font-size: 20px;
  min-height: 150px;
`;

type Page = ParseQuery<EventQuery["page"]>;

export interface PageProps {
  title: string;
  subtitle: string;
  seo: Page["seo"];
  heroData: Page["heroBlock"];
  whyItems: Page["whyBlockCollection"]["items"];
  speakerData: Page["speakersBlock"];
  teamData: Page["teamBlock"];
  events: Page["eventsCollection"]["items"];
  sponsorType: Page["sponsorTypeCollection"];
  friends: Page["communityFriendsCollection"];
  flags: Page["flags"];
}

export default function Events(props: PageProps) {
  const ticketId = props.flags?.ticketId;

  return (
    <Container>
      <Seo {...props.seo} />
      <Suspense fallback={<StyledWrapperSuspense />}>
        <NavBar />
      </Suspense>
      <Suspense fallback={null}>
        <Hero id="home">
          <Particles backgroundColor="#fff" />
          <div />
          <HeroInfo style={{ zIndex: "5" }}>
            <H1>{props.title}</H1>
            <H2>{props.subtitle}</H2>
            <Suspense fallback={null}>
              {ticketId ? (
                <SmartButtonContainer>
                  <RegisterTicketButton
                    ticketId={ticketId}
                    jsconfTheme={false}
                  />
                </SmartButtonContainer>
              ) : null}
            </Suspense>
            <Link href={`/events/`} passHref>
              <a style={{ fontSize: "0.6em" }}>Ver Listado de Eventos</a>
            </Link>
          </HeroInfo>
          <ExtraInfo>
            <div>
              <Calendar size={64} />
              <br />
              {props.heroData.firstSubtitle.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
            <div>
              <MapPin size={64} />
              <br />
              {props.heroData.secondSubtitle.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          </ExtraInfo>
        </Hero>
      </Suspense>
      {props?.whyItems && (
        <div id="about">
          <WhySection whyItems={props?.whyItems} />
        </div>
      )}
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
        <div id="sponsors">
          {props?.sponsorType && <SponsorSection page={props?.sponsorType} />}
        </div>
      </Suspense>
      <Suspense fallback={null}>
        <div id="friends">
          {props?.friends && <FriendSection friends={props?.friends} />}
        </div>
      </Suspense>
      <Suspense fallback={null}>
        <div id="team">
          {props.teamData && <TeamSection page={props.teamData} />}
        </div>
      </Suspense>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = [{ id: "meetup" }, { id: "meet-and-drink" }].map(({ id }) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface Hash {
  [key: string]: string;
}

export async function getStaticProps({ params }: { params: any }) {
  if (!params || !params.id) {
    return { props: {} };
  }

  const pagesInfo: Hash = {
    meetup: "01yfAORmroDbUfn1GvPgSb",
    "meet-and-drink": "3cENxcLEoIFxxmiK3bqOdx",
  };

  const pageInfo = pagesInfo[params.id];

  if (!pageInfo) {
    return {
      notFound: true,
    };
  }

  const queryResults = await urlQlient
    .query<EventQuery, EventQueryVariables>(EventDocument, {
      id: pageInfo ?? "",
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();

  const page = queryResults.data?.page as Page;
  const props = {
    title: page.name ?? "",
    subtitle: page.subtitle ?? "",
    seo: page?.seo || null,
    heroData: page?.heroBlock || null,
    whyItems: page?.whyBlockCollection.items || null,
    speakerData: page?.speakersBlock || null,
    events: page?.eventsCollection.items || null,
    teamData: page?.teamBlock || null,
    sponsorType: page?.sponsorTypeCollection || null,
    friends: page?.communityFriendsCollection || null,
    flags: page?.flags || {},
  };

  return {
    props,
  };
}
