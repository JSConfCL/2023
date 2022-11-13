import styled from "@emotion/styled";
import type { NextPage } from "next";
import { lazy, Suspense } from "react";
import { parseNavBarData } from "../src/Components/NavBar/helper";
import { NavBarProps } from "../src/Components/NavBar/NavBar";
import EventSchema from "../src/Components/schema/event";
import Hero from "../src/Components/sections/Hero";
import Seo from "../src/Components/Seo";
import {
  HomeQueryDocument,
  HomeQueryQuery,
  HomeQueryQueryVariables,
} from "../src/graphql/home.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";

const WhySection = lazy(
  async () => await import("../src/Components/sections/WhySection")
);
const HowSection = lazy(
  async () => await import("../src/Components/sections/HowSection")
);
const TeamSection = lazy(
  async () => await import("../src/Components/sections/TeamSection")
);
const SponsorSection = lazy(
  async () => await import("../src/Components/sections/SponsorSection")
);
const SpeakerSection = lazy(
  async () => await import("../src/Components/sections/SpeakerSection")
);
const TimelineSection = lazy(
  async () => await import("../src/Components/sections/TimelineSection")
);

type Page = ParseQuery<HomeQueryQuery["page"]>;

export interface PageProps {
  navData: NavBarProps;
  whyItems: Page["whyBlockCollection"];
  howItems: Page["howBlockCollection"];
  heroData: Page["heroBlock"];
  speakerData: Page["speakersBlock"];
  seo: Page["seo"];
  teamData: Page["teamBlock"];
  events: Page["eventsCollection"]["items"];
  sponsorType: Page["sponsorTypeCollection"];
}
const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledBlackWrapp = styled.section`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 200px);
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const Home: NextPage<PageProps> = (props: PageProps) => {
  return (
    <Container>
      <Seo {...props.seo} />
      <EventSchema />
      <Suspense fallback={null}>
        <Hero heroData={props.heroData} navData={props.navData} />
      </Suspense>
      <StyledBlackWrapp>
        <Suspense fallback={null}>
          {props.whyItems?.items && <WhySection page={props.whyItems} />}
        </Suspense>
        <Suspense fallback={null}>
          {props.howItems && <HowSection page={props.howItems} />}
        </Suspense>
        <Suspense fallback={null}>
          {props.speakerData && <SpeakerSection page={props.speakerData} />}
        </Suspense>
        <Suspense fallback={null}>
          {props?.events && <TimelineSection events={props?.events} />}
        </Suspense>
        <Suspense fallback={null}>
          {props.sponsorType && <SponsorSection page={props.sponsorType} />}
        </Suspense>
        <Suspense fallback={null}>
          {props.teamData && <TeamSection page={props.teamData} />}
        </Suspense>
      </StyledBlackWrapp>
    </Container>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<HomeQueryQuery, HomeQueryQueryVariables>(HomeQueryDocument, {
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();

  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    navData: parseNavBarData(page?.navBar),
    heroData: page?.heroBlock || null,
    whyItems: page?.whyBlockCollection || null,
    howItems: page?.howBlockCollection || null,
    speakerData: page?.speakersBlock || null,
    seo: page?.seo || null,
    teamData: page?.teamBlock || null,
    events: page?.eventsCollection.items || null,
    sponsorType: page?.sponsorTypeCollection || null,
  };

  return {
    props,
  };
}

export default Home;
