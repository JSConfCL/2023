import styled from "@emotion/styled";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { CustomMarkdown } from "../src/Components/CustomMarkdown";
import { parseNavBarData } from "../src/Components/NavBar/helper";
import { NavBarProps } from "../src/Components/NavBar/NavBar";
import {
  PoliticasDePrivacidadPageDocument,
  PoliticasDePrivacidadPageQuery,
  PoliticasDePrivacidadPageQueryVariables,
} from "../src/graphql/politicas_de_privacidad.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";
import { ViewportSizes } from "../styles/theme";

const NavBar = dynamic(
  async () => await import("../src/Components/NavBar/NavBar"),
  {
    ssr: false,
  }
);
type Page = ParseQuery<PoliticasDePrivacidadPageQuery["page"]>;

export interface PageProps {
  navData: NavBarProps;
  content: Page["contentCollection"]["items"];
}
const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledBlackWrapp = styled.section`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 200px);
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 4rem;
  width: 100vw;
  max-width: 1440px;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    gap: 32px;
  }
`;

const Home: NextPage<PageProps> = (props: PageProps) => {
  return (
    <Container>
      <StyledBlackWrapp>
        {props.navData && (
          <Suspense>
            <NavBar {...props.navData} />
          </Suspense>
        )}
        <ContentContainer>
          {props.content
            .map((el) => {
              if (el.__typename === "MarkdownBlock") {
                return (
                  <CustomMarkdown key={el.sys.id}>
                    {el.markdownTextContent}
                  </CustomMarkdown>
                );
              }
              return null;
            })
            .filter(Boolean)}
        </ContentContainer>
      </StyledBlackWrapp>
    </Container>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<
      PoliticasDePrivacidadPageQuery,
      PoliticasDePrivacidadPageQueryVariables
    >(PoliticasDePrivacidadPageDocument, {
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();

  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    navData: parseNavBarData(page?.navBar),
    content: page.contentCollection.items,
  };

  return {
    props,
  };
}

export default Home;
