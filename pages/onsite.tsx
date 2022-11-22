import { lazy, Suspense } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

import {
  HowQueryDocument,
  HowQueryQuery,
  HowQueryQueryVariables,
} from "../src/graphql/how.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";
import Seo from "../src/Components/Seo";

const NavBar = dynamic(
  async () => await import("../src/Components/NavBar/NavBar"),
  {
    ssr: false,
  }
);
const HowCard = lazy(async () => await import("../src/Components/Card/How"));

type Page = ParseQuery<HowQueryQuery["page"]>;

export interface PageProps {
  howItems: Page["howBlockCollection"];
  followUsData: Page["followUsBlock"];
  GM_KEY: string;
  seo: Page["seo"];
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1440px;
  min-height: 100vh;
`;
const StyledBlackWrapp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const OnSitePage: NextPage<PageProps> = (props: PageProps) => {
  return (
    <StyledBlackWrapp>
      <Seo {...props.seo} />
      <Container>
        <Suspense fallback={null}>
          <NavBar />
        </Suspense>
        {props.howItems?.items?.map((elem, index) =>
          elem.sectionsCollection?.items.map((item, subIndex) => (
            <Suspense key={subIndex} fallback={null}>
              <HowCard
                {...item}
                number={subIndex + 1}
                key={subIndex}
                GM_KEY={props.GM_KEY}
              />
            </Suspense>
          ))
        )}
      </Container>
    </StyledBlackWrapp>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<HowQueryQuery, HowQueryQueryVariables>(HowQueryDocument, {
      id: "6WMOBLoBEhCWUtyQtw872A",
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();
  const page = queryResults.data?.page as Page;
  if (!page) return { props: {} };
  const props: PageProps = {
    howItems: page?.howBlockCollection,
    followUsData: page?.followUsBlock,
    GM_KEY: process.env.NEXT_PUBLIC_CONTENTFUL_API_GOOGLE_MAP,
    seo: page?.seo || null,
  };
  return {
    props,
  };
}

export default OnSitePage;
