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
import { NavBarProps } from "../src/Components/NavBar/NavBar";
import { parseNavBarData } from "../src/Components/NavBar/helper";

const NavBar = dynamic(
  async () => await import("../src/Components/NavBar/NavBar"),
  {
    ssr: false,
  }
);
const WhyBanner = lazy(
  async () => await import("../src/Components/Banner/Why")
);
const WhyCard = lazy(async () => await import("../src/Components/Card/Why"));

type Page = ParseQuery<WhyQueryQuery["page"]>;

export interface PageProps {
  navData: NavBarProps;
  whyItems: Page["whyBlockCollection"];
  heroData: Page["heroBlock"];
  seo: Page["seo"];
}

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

const Why: NextPage<PageProps> = (props: PageProps) => {
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
        {props.whyItems?.items?.map((elem, index) => (
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
    navData: parseNavBarData(page?.navBar),
    heroData: page?.heroBlock || null,
    whyItems: page?.whyBlockCollection || null,
    seo: page?.seo || null,
  };
  return {
    props,
  };
}

export default Why;
