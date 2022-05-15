import type { NextPage } from "next";
import styled from "@emotion/styled";
import { NavBar } from "../src/Components/NavBar/NavBar";
import { Hero } from "../src/Components/sections/Hero";
import WhySection from "../src/Components/sections/WhySection";
import HowSection from "../src/Components/sections/HowSection";
import {
  HomeQueryDocument,
  HomeQueryQuery,
} from "../src/graphql/home.generated";
import { urlQlient } from "../src/graphql/urql";

import { ParseQuery } from "../src/helpers/types";

type Page = ParseQuery<HomeQueryQuery["page"]>

export type PageProps = {
  whyItems: Page["whyBlockCollection"]
  howItems: Page["howBlockCollection"]
  heroData: Page["heroBlock"]
};
const Container = styled.section`
  display: flex;
  flex-direction: column;
`

const Home: NextPage<PageProps> = (props) => {
  return (
    <Container>
      <NavBar />
      <Hero {...props.heroData} />
      <WhySection page={props.whyItems} />
      <HowSection page={props.howItems} />
    </Container>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<HomeQueryQuery>(HomeQueryDocument)
    .toPromise();

  const page = queryResults.data?.page as Page
  const props: PageProps = {
    heroData: page?.heroBlock,
    whyItems: page?.whyBlockCollection,
    howItems: page?.howBlockCollection,
  };

  return {
    props,
  };
}

export default Home;
