import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useEffect } from "react";

import Icon from "../src/Components/Icon";
import Seo from "../src/Components/Seo";
import JSConfLogo from "../src/Components/svgs/logo";

import {
  LinkTreeDocument,
  LinkTreeQuery,
} from "../src/graphql/link-tree.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";
import { ViewportSizes } from "../styles/theme";

type Page = ParseQuery<LinkTreeQuery["page"]>;

export interface PageProps {
  seo: Page["seo"];
  heroData: Page["heroBlock"];
  links: Page["navBar"]["linksCollection"]["items"];
  redirects: Page["navBar"]["buttonsCollection"]["items"];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  width: 100%;
`;

const Hero = styled.section`
  font-size: 42px;
  width: 90vw;
  max-width: 600px;
  margin: 0 auto;
  z-index: 3;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 200px;
  position: relative;
`;

const StyledJSConfLogoWrapper = styled.a`
  height: 100%;
  height: 60px;
  width: 60px;
  aspect-ratio: 1/1;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.jsconfYellow};
  margin: 32px 0;

  svg {
    height: 60px;
    width: 60px;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    margin: 48px 0;
    height: 100px;
    width: 100px;

    svg {
      height: 100px;
      width: 100px;
    }
  }
`;

const StyledTitle = styled.h1(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "90px",
  letterSpacing: "1px",
  lineHeight: "1em",
  margin: 0,
  wordSpacing: "100vw",
  textAlign: "center",
  marginBottom: "16px",
  [theme.breakpoints.phoneOnly]: {
    fontSize: "clamp(40.61px, 11vw, 90px)",
  },
}));

const A = styled.a`
  display: inline-flex;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.jsconfYellow};
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  padding: 8px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: ${ViewportSizes.Phone}px) {
    padding: 16px;
    font-size: 20px;
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
  margin-bottom: 16px;
  text-align: center;

  font-size: 16px;
  padding: 8px;
  margin-bottom: 8px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 20px;
  }
`;

const Home: NextPage<PageProps> = ({
  seo,
  heroData,
  links,
  redirects,
}: PageProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1);
      const redirect = redirects.find((link) => link.contenido === hash);

      if (redirect) {
        window.location.assign(redirect.link);
      }
    }
  }, [redirects]);
  return (
    <Container>
      <Seo {...seo} />
      <Hero>
        <StyledJSConfLogoWrapper>
          <JSConfLogo />
        </StyledJSConfLogoWrapper>
        <StyledTitle>{heroData.tile}</StyledTitle>
        {heroData.firstSubtitle ? (
          <StyledSpan>{heroData.firstSubtitle}</StyledSpan>
        ) : null}
        {heroData.secondSubtitle ? (
          <StyledSpan>{heroData.secondSubtitle}</StyledSpan>
        ) : null}
        <br />
        {links.map((link) => (
          <A key={link.link} href={link.link}>
            <Icon name={link.iconName} /> {link.contenido}
          </A>
        ))}
      </Hero>
    </Container>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query(LinkTreeDocument, {
      id: "2wAn9UxGwc1bgUTOOT4SPW",
      locale: "es-CL",
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();
  const page = queryResults.data?.page as Page;

  const props = {
    seo: page?.seo || null,
    heroData: page?.heroBlock || null,
    links: page?.navBar.linksCollection.items || [],
    redirects: page?.navBar.buttonsCollection.items || [],
  };

  return {
    props,
  };
}

export default Home;
