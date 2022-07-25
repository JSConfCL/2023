import { lazy, Suspense } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

import {
  WhyQueryDocument,
  WhyQueryQuery,
  WhyQueryQueryVariables,
} from "../src/graphql/why.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";
import Seo from "../src/Components/Seo";

const NavBar = dynamic(() => import("../src/Components/NavBar/NavBar"), {
  ssr: false,
});
const WhyBanner = lazy(() => import("../src/Components/Banner/Why"));
const WhyCard = lazy(() => import("../src/Components/Card/Why"));

type Page = ParseQuery<WhyQueryQuery["page"]>;

export type PageProps = {
  navData: Page["navBar"];
  whyItems: Page["whyBlockCollection"];
  heroData: Page["heroBlock"];
  seo: Page["seo"];
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1440px;
  min-height: calc(100vh - 100px);
`;
const StyledBlackWrapp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const Home: NextPage<PageProps> = (props) => {
  return (
    <StyledBlackWrapp>
      <Seo {...props.seo} />
      <Container>
        <Suspense fallback={null}>
          <NavBar {...props.navData} />
        </Suspense>
        <Suspense fallback={null}>
          <WhyBanner {...props.heroData} />
        </Suspense>
        {props.whyItems.items.map((elem, index) => (
          <Suspense key={`why-card-${index}`} fallback={null}>
            <WhyCard number={index + 1} {...elem} key={`why-card-${index}`} />
          </Suspense>
        ))}
      </Container>
    </StyledBlackWrapp>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<WhyQueryQuery, WhyQueryQueryVariables>(WhyQueryDocument, {
      id: "7rT5EZIWOXMxoy8151P9WL",
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();
  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    navData: page?.navBar,
    heroData: page?.heroBlock,
    whyItems: page?.whyBlockCollection,
    seo: page?.seo,
  };
  return {
    props,
  };
}

export default Home;
