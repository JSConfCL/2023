import styled from "@emotion/styled";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Seo from "../src/Components/Seo";
import {
  CfpQueryDocument,
  CfpQueryQuery,
  CfpQueryQueryVariables,
} from "../src/graphql/cfp.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";

const NavBar = dynamic(
  async () => await import("../src/Components/NavBar/NavBar"),
  {
    ssr: false,
  }
);
const BannerCFP = dynamic(
  async () => await import("../src/Components/Banner/CFP")
);

type Page = ParseQuery<CfpQueryQuery["page"]>;

export interface PageProps {
  heroData: Page["heroBlock"];
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
        {Boolean(props.heroData) && (
          <Suspense fallback={null}>
            <BannerCFP {...props.heroData} />
          </Suspense>
        )}
      </Container>
    </StyledBlackWrapp>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<CfpQueryQuery, CfpQueryQueryVariables>(CfpQueryDocument, {
      id: "1GDpX9fgkG15wZWOYFV4il",
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();
  const page = queryResults.data?.page;
  if (page === null || page === undefined) {
    return { props: {} };
  }
  const props = {
    heroData: page?.heroBlock ?? null,
    seo: page?.seo ?? null,
  };
  return {
    props,
  };
}

export default OnSitePage;
