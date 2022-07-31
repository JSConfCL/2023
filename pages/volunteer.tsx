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

const NavBar = dynamic(() => import("../src/Components/NavBar/NavBar"), {
  ssr: false,
});

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
  return (
    <StyledBlackWrapp>
      <Container>
        {props.navData && (
          <Suspense fallback={null}>
            <NavBar {...props.navData} />
          </Suspense>
        )}
        <BannerVolunteer {...props.heroData} />
        <VolunteerForm />
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
    navData: page?.navBar,
    heroData: page?.heroBlock,
  };
  return {
    props,
  };
}

export default VolunteerPage;
