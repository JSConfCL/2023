import type { NextPage } from "next";
import styled from "@emotion/styled";

import {
  VolunteerQueryDocument,
  VolunteerQueryQuery,
} from "../src/graphql/volunteer.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";
import { NavBar } from "../src/Components/NavBar/NavBar";
import WhyBanner from "../src/Components/Banner/Why";
import WhyCard from "../src/Components/Card/Why";
import BannerVolunteer from "../src/Components/Banner/Volunteer";

type Page = ParseQuery<VolunteerQueryQuery["page"]>;

export type PageProps = {
  navData: Page["navBar"];
  heroData: Page["heroBlock"];
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

const VolunteerPage: NextPage<PageProps> = (props) => {
  console.log(props);
  return (
    <StyledBlackWrapp>
      <Container>
        <NavBar {...props.navData} />
        <BannerVolunteer {...props.heroData} />
      </Container>
    </StyledBlackWrapp>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<VolunteerQueryQuery>(VolunteerQueryDocument)
    .toPromise();
  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    navData: page?.navBar,
    heroData: page?.heroBlock,
  };
  return {
    props,
  };
}

export default VolunteerPage;
