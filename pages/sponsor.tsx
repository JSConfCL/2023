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
import { NavBar } from "../src/Components/NavBar/NavBar";
import { Footer } from "../src/Components/Footer/Footer";
import BannerSponsor from "../src/Components/Banner/Sponsor";
import SponsorCard from "../src/Components/Card/Sponsor";

type Page = ParseQuery<SponsorQueryQuery["page"]>;

export type PageProps = {
  navData: Page["navBar"];
  followUsData: Page["followUsBlock"];
  footerData: Page["footer"];
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
        {props.navData && <NavBar {...props.navData} />}
        {props.heroData && <BannerSponsor {...props.heroData} />}
        {props.sponsors?.items?.map((elem, index) => (
          <SponsorCard {...elem} number={index + 1} key={`sponsor-${index}`} />
        ))}
        {props.followUsData && <FollowUsSection page={props.followUsData} />}
      </Container>
      {props.footerData && <Footer page={props.footerData} />}
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
    footerData: page?.footer,
    sponsors: page?.sponsorTypeCollection,
  };
  return {
    props,
  };
}

export default OnSitePage;
