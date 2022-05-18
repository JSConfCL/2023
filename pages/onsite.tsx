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

const OnSitePage: NextPage<PageProps> = (props) => {
  return (
    <StyledBlackWrapp>
      <Container>
        {props.navData && <NavBar {...props.navData} />}
        {props.howItems?.items?.map((elem, index) =>
          elem.sectionsCollection?.items.map((item, subIndex) => (
            <HowCard {...item} number={subIndex + 1} key={subIndex} />
          ))
        )}
        {props.followUsData && <FollowUsSection page={props.followUsData} />}
      </Container>
      {props.footerData && <Footer footerData={props.footerData} />}
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
    navData: page?.navBar,
    howItems: page?.howBlockCollection,
    followUsData: page?.followUsBlock,
    footerData: page?.footer,
  };
  return {
    props,
  };
}

export default OnSitePage;