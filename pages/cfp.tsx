import type { NextPage } from "next";
import styled from "@emotion/styled";

import {
  CfpQueryDocument,
  CfpQueryQuery,
  CfpQueryQueryVariables,
} from "../src/graphql/cfp.generated";
import { urlQlient } from "../src/graphql/urql";
import FollowUsSection from "../src/Components/sections/FollowUsSection";
import { ParseQuery } from "../src/helpers/types";
import { NavBar } from "../src/Components/NavBar/NavBar";
import HowCard from "../src/Components/Card/How";
import { Footer } from "../src/Components/Footer/Footer";
import BannerCFP from "../src/Components/Banner/CFP";

type Page = ParseQuery<CfpQueryQuery["page"]>;

export type PageProps = {
  navData: Page["navBar"];
  followUsData: Page["followUsBlock"];
  footerData: Page["footer"];
  heroData: Page["heroBlock"];
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
        <NavBar {...props.navData} />
        <BannerCFP {...props.heroData} />
        <FollowUsSection page={props.followUsData} />
      </Container>
      <Footer footerData={props.footerData} />
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
  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    navData: page?.navBar,
    heroData: page?.heroBlock,
    followUsData: page?.followUsBlock,
    footerData: page?.footer,
  };
  return {
    props,
  };
}

export default OnSitePage;
