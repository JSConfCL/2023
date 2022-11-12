import { Suspense } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

import {
  VolunteerQueryDocument,
  VolunteerQueryQuery,
  VolunteerQueryQueryVariables,
} from "../src/graphql/volunteer.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";
import BannerVolunteer from "../src/Components/Banner/Volunteer";
import VolunteerForm from "../src/Components/Form/Volunteer";
import { NavBarProps } from "../src/Components/NavBar/NavBar";
import { parseNavBarData } from "../src/Components/NavBar/helper";

const NavBar = dynamic(
  async () => await import("../src/Components/NavBar/NavBar"),
  {
    ssr: false,
  }
);

type Page = ParseQuery<VolunteerQueryQuery["page"]>;

export interface PageProps {
  navData: NavBarProps;
  heroData: Page["heroBlock"];
  url: string;
}

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

const VolunteerPage: NextPage<PageProps> = (props: PageProps) => {
  return (
    <StyledBlackWrapp>
      <Container>
        {props.navData && (
          <Suspense fallback={null}>
            <NavBar {...props.navData} />
          </Suspense>
        )}
        <BannerVolunteer {...props.heroData} />
        <VolunteerForm url={props.url} />
      </Container>
    </StyledBlackWrapp>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<VolunteerQueryQuery, VolunteerQueryQueryVariables>(
      VolunteerQueryDocument,
      {
        id: "2X6aesEoId54kb4oEw4QCb",
        locale: "es-CL",
        isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
      }
    )
    .toPromise();
  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    navData: parseNavBarData(page?.navBar),
    heroData: page?.heroBlock || null,
    url: process.env.NEXT_PUBLIC_DATA_API,
  };
  return {
    props,
  };
}

export default VolunteerPage;
