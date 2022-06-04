import type { NextPage } from "next";
import styled from "@emotion/styled";

import {
  HowQueryDocument,
  HowQueryQuery,
  HowQueryQueryVariables,
} from "../src/graphql/how.generated";
import { urlQlient } from "../src/graphql/urql";
import FollowUsSection from "../src/Components/sections/FollowUsSection";
import { ParseQuery } from "../src/helpers/types";
import { NavBar } from "../src/Components/NavBar/NavBar";
import HowCard from "../src/Components/Card/How";
import { Footer } from "../src/Components/Footer/Footer";

type Page = ParseQuery<HowQueryQuery["page"]>;

export type PageProps = {
  navData: Page["navBar"];
  howItems: Page["howBlockCollection"];
  followUsData: Page["followUsBlock"];
  footerData: Page["footer"];
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

const OnlinePage: NextPage<PageProps> = (props) => {
  return (
    <StyledBlackWrapp>
      <Container>
        <NavBar {...props.navData} />
        {props.howItems.items.map((elem, index) =>
          elem.sectionsCollection?.items.map((item, subIndex) => (
            <HowCard {...item} number={subIndex + 1} key={subIndex} />
          ))
        )}
        <FollowUsSection page={props.followUsData} />
      </Container>
      <Footer footerData={props.footerData} />
    </StyledBlackWrapp>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<HowQueryQuery, HowQueryQueryVariables>(HowQueryDocument, {
      id: "45QeQG01Mx67Ng2XNWksmo",
      locale: "es-CL",
    })
    .toPromise();
  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    navData: page?.navBar,
    howItems: page?.howBlockCollection,
    followUsData: page?.followUsBlock,
    footerData: page?.footer,
  };
  return {
    props,
  };
}

export default OnlinePage;
