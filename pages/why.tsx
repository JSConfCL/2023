import type { NextPage } from "next";
import styled from "@emotion/styled";

import { WhyQueryDocument, WhyQueryQuery } from "../src/graphql/why.generated";
import { urlQlient } from "../src/graphql/urql";
import FollowUsSection from "../src/Components/sections/FollowUsSection";
import { ParseQuery } from "../src/helpers/types";
import { NavBar } from "../src/Components/NavBar/NavBar";
import WhyBanner from "../src/Components/Banner/Why";
import WhyCard from "../src/Components/Card/Why";
import { Footer } from "../src/Components/Footer/Footer";

type Page = ParseQuery<WhyQueryQuery["page"]>;

export type PageProps = {
  navData: Page["navBar"];
  whyItems: Page["whyBlockCollection"];
  heroData: Page["heroBlock"];
  followUsData: Page["followUsBlock"];
  footerData: Page["footer"];
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
      <Container>
        <NavBar {...props.navData} />
        <WhyBanner {...props.heroData} />
        {props.whyItems.items.map((elem, index) => (
          <WhyCard number={index + 1} {...elem} key={`why-card-${index}`} />
        ))}
        <FollowUsSection page={props.followUsData} />
      </Container>
      <Footer footerData={props.footerData} />
    </StyledBlackWrapp>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<WhyQueryQuery>(WhyQueryDocument)
    .toPromise();
  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    navData: page?.navBar,
    heroData: page?.heroBlock,
    whyItems: page?.whyBlockCollection,
    followUsData: page?.followUsBlock,
    footerData: page?.footer,
  };
  return {
    props,
  };
}

export default Home;
