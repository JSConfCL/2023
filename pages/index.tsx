import { lazy, Suspense } from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";

import {
  HomeQueryDocument,
  HomeQueryQuery,
  HomeQueryQueryVariables,
} from "../src/graphql/home.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";
import Seo from "../src/Components/Seo";
import EventSchema from "../src/Components/schema/event";
import Hero from "../src/Components/sections/Hero";

const WhySection = lazy(() => import("../src/Components/sections/WhySection"));
const HowSection = lazy(() => import("../src/Components/sections/HowSection"));
const SpeakerSection = lazy(
  () => import("../src/Components/sections/SpeakerSection")
);

type Page = ParseQuery<HomeQueryQuery["page"]>;

export type PageProps = {
  navData: Page["navBar"];
  whyItems: Page["whyBlockCollection"];
  howItems: Page["howBlockCollection"];
  heroData: Page["heroBlock"];
  speakerData: Page["speakersBlock"];
  seo: Page["seo"];
};
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

const Home: NextPage<PageProps> = (props) => {
  return (
    <Container>
      <Seo {...props.seo} scripts={<EventSchema />} />
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
    navData: page?.navBar,
    heroData: page?.heroBlock,
    whyItems: page?.whyBlockCollection,
    howItems: page?.howBlockCollection,
    speakerData: page?.speakersBlock,
    seo: page?.seo,
  };

  return {
    props,
  };
}

export default Home;
