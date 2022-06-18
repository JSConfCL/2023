import { lazy, Suspense } from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";

import {
  SponsorQueryDocument,
  SponsorQueryQuery,
  SponsorQueryQueryVariables,
} from "../src/graphql/sponsor.generated";
import { urlQlient } from "../src/graphql/urql";
import FollowUsSection from "../src/Components/sections/FollowUsSection";
import { ParseQuery } from "../src/helpers/types";

const NavBar = lazy(() => import("../src/Components/NavBar/NavBar"));
const BannerSponsor = lazy(() => import("../src/Components/Banner/Sponsor"));
const SponsorCard = lazy(() => import("../src/Components/Card/Sponsor"));

type Page = ParseQuery<SponsorQueryQuery["page"]>;

export type PageProps = {
  navData: Page["navBar"];
  followUsData: Page["followUsBlock"];
  heroData: Page["heroBlock"];
  sponsors: Page["sponsorTypeCollection"];
};

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

const OnSitePage: NextPage<PageProps> = (props) => {
  return (
    <StyledBlackWrapp>
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
        {props.sponsors?.items?.map((elem, index) => (
          <Suspense key={`sponsor-${index}`} fallback={null}>
            <SponsorCard
              {...elem}
              number={index + 1}
              key={`sponsor-${index}`}
            />
          </Suspense>
        ))}
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
    navData: page?.navBar,
    heroData: page?.heroBlock,
    followUsData: page?.followUsBlock,
    sponsors: page?.sponsorTypeCollection,
  };
  return {
    props,
  };
}

export default OnSitePage;
