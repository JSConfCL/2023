/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import { Get } from "type-fest";
import { JSConfLogo } from "../svgs/logo";
import { FooterQueryQuery } from "../../graphql/footer.generated";

type Props = {
  page: Get<FooterQueryQuery, "page.footer">;
};

const StyledFooter = styled.footer(
  ({ theme }) => `
  background-color: ${theme.colors.jsconfYellow};
  color: ${theme.colors.jsconfBlack};
  z-index: 100;
  justify-content: center;
  align-items: center;
  width: 100%;
 
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
   
  }

`
);

const StyledWrapper = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 48px",
  height: 100,
  width: "100%",
  maxWidth: 1440,
  [theme.breakpoints.phoneOnly]: {
    flexDirection: "column",
    height: "100%",
  },
  [`@media (max-width: 769px)`]: {
    flexDirection: "column",
    padding: "32px 16px",
    height: "100%",
  },
}));

const StyledLinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const StyledLink = styled.li`
  padding: 16px;
  font-weight: 400;
  font-family: "Koulen";
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const StyledJSConfLogoWrapper = styled.div`
  height: 100%;
  max-height: 50px;
  aspect-ratio: 1/1;
`;

export const Footer = (page: Props) => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledJSConfLogoWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <JSConfLogo />
          </Suspense>
        </StyledJSConfLogoWrapper>
        <StyledLinksContainer>
          <Suspense fallback={<div>Loading...</div>}>
            {page.page?.linksCollection?.items.map((item) => {
              return (
                <StyledLink key={item?.sys.id}>
                  {item?.isBlank ? (
                    <Link rel="preconnect" href={item?.link!} passHref>
                      <a target="_blank">{item?.contenido}</a>
                    </Link>
                  ) : (
                    <Link href={item?.link!}>{item?.contenido}</Link>
                  )}
                </StyledLink>
              );
            })}
          </Suspense>
        </StyledLinksContainer>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
