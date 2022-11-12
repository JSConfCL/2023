import { lazy, Suspense } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

import {
  SponsorQueryDocument,
  SponsorQueryQuery,
  SponsorQueryQueryVariables,
} from "../src/graphql/sponsor.generated";
import { urlQlient } from "../src/graphql/urql";
import Seo from "../src/Components/Seo";
import { ParseQuery } from "../src/helpers/types";
import { ViewportSizes } from "../styles/theme";
import { NavBarProps } from "../src/Components/NavBar/NavBar";
import { parseNavBarData } from "../src/Components/NavBar/helper";

const NavBar = dynamic(
  async () => await import("../src/Components/NavBar/NavBar"),
  {
    ssr: false,
  }
);
const BannerSponsor = lazy(
  async () => await import("../src/Components/Banner/Sponsor")
);
const SponsorCard = lazy(
  async () => await import("../src/Components/Card/Sponsor")
);

type Page = ParseQuery<SponsorQueryQuery["page"]>;

export interface PageProps {
  navData: NavBarProps;
  followUsData: Page["followUsBlock"];
  heroData: Page["heroBlock"];
  sponsors: Page["sponsorTypeCollection"];
  seo: Page["seo"];
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1440px;
  gap: 32px;
  @media (min-width: ${ViewportSizes.Phone}px) {
    gap: 32px;
  }
`;

const SponsorWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 64px;
  @media (min-width: ${ViewportSizes.Phone}px) {
    gap: 32px;
  }
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
        {props.navData && (
          <Suspense fallback={null}>
            <NavBar {...props.navData} />
          </Suspense>
        )}
        {props.heroData && (
          <Suspense fallback={null}>
            <BannerSponsor {...props.heroData} />
          </Suspense>
        )}
        {props.sponsors?.items?.length && (
          <SponsorWrapper>
            {props.sponsors?.items?.map((elem, index) => (
              <Suspense key={`sponsor-${index}`} fallback={null}>
                <SponsorCard
                  {...elem}
                  number={index + 1}
                  key={`sponsor-${index}`}
                />
              </Suspense>
            ))}
          </SponsorWrapper>
        )}
      </Container>
    </StyledBlackWrapp>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<SponsorQueryQuery, SponsorQueryQueryVariables>(
      SponsorQueryDocument,
      {
        id: "1S7E2fm8TuIuOZY5jMAY8K",
        locale: "es-CL",
        isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
      }
    )
    .toPromise();
  const page = queryResults.data?.page as Page;
  if (!page) return { props: {} };
  const props: PageProps = {
    navData: parseNavBarData(page?.navBar),
    heroData: page?.heroBlock || null,
    followUsData: page?.followUsBlock,
    sponsors: page?.sponsorTypeCollection,
    seo: page?.seo || null,
  };
  return {
    props,
  };
}

export default OnSitePage;
