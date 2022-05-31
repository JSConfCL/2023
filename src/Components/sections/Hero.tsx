/* eslint-disable @next/next/no-img-element */
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { PageProps } from "../../../pages";
import { SecondaryStyledLink } from "../Links";
import Particles from "react-tsparticles";
import config from "./config";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { NavBar } from "../NavBar/NavBar";

const StyledWrapper = styled.div(({ theme }) => ({
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "background-color": "#f0e040d4",
  color: theme.colors.jsconfBlack,
  height: "90vh",
  minHeight: 700,
  maxHeight: 900,
  [theme.breakpoints.smallDesktopOnly]: {
    height: "unset",
    maxHeight: "unset",
  },

  [theme.breakpoints.tabletPortraitOnly]: {},
}));

const StyledBackground = styled.img(({ theme }) => ({
  position: "absolute",
  zIndex: -1,
  height: "100%",
  aspectRatio: "1320 / 764",
  width: "100%",
  objectFit: "fill",
}));

const StyledForegroundWrapper = styled.div(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: "0",
  padding: 48,
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  gap: 32,
  maxWidth: 1440,
  alignItems: "center",
  // [theme.breakpoints.desktopOnly]: {
  //   justifyContent: "center",
  // },
  // [theme.breakpoints.tabletLandscapeOnly]: {
  //   justifyContent: "flex-end",
  // },
  [theme.breakpoints.smallDesktopOnly]: {},
  // [theme.breakpoints.tabletPortraitOnly]: {
  //   justifyContent: "flex-end",
  // },
  // [theme.breakpoints.phoneOnly]: {
  //   justifyContent: "center",
  // },
  [theme.breakpoints.tabletPortraitOnly]: {
    padding: 16,
    gap: 16,
  },
}));

const StyledLeftSide = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: 400,
  transition: "all 200ms ease-in-out",
  [theme.breakpoints.smallDesktopOnly]: {
    width: 500,
  },
  [theme.breakpoints.phoneOnly]: {
    width: "100%",
  },
  [theme.breakpoints.tabletPortraitOnly]: {
    alignSelf: "flex-start",
    width: "50%",
  },
}));

const StyledTitle = styled.h1(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "90px",
  letterSpacing: "1px",
  lineHeight: "1em",
  margin: 0,
  wordSpacing: "100vw",
  [theme.breakpoints.phoneOnly]: {
    fontSize: "40px",
    lineHeight: "40px",
  },
}));

const StyledParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const StyledHr = styled.hr`
  width: 178px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.jsconfBlack};
  border-width: 3px;
  background-color: ${({ theme }) => theme.colors.jsconfBlack}; ;
`;

const StyledRightSide = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: 506,
  transition: "all 200ms ease-in-out",
  [theme.breakpoints.smallDesktopOnly]: {
    width: 600,
  },
  [theme.breakpoints.phoneOnly]: {
    width: "100%",
  },
}));

const StyledTitlesWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledSecondaryTextWrapper = styled.div(({ theme }) => ({
  marginLeft: 109,
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  [theme.breakpoints.tabletPortraitOnly]: {
    display: "none",
  },
}));

const StyledSecondaryTitle = styled(StyledTitle)`
  margin-left: 84px;
  @media (max-width: 900px) {
    margin-left: 16px;
  }
`;

const StyledWrapperLink = styled.section`
  @media (max-width: 900px) {
    margin: 0px 16px;
    position: absolute;
    bottom: 16px;
    left: 0px;
  }
`;

export const Hero = ({
  heroData,
  navData,
}: {
  heroData: PageProps["heroData"];
  navData: PageProps["navData"];
}) => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  return (
    <StyledWrapper>
      <Global
        styles={[
          css`
            #tsparticles-container {
              position: absolute;
              top: 0px;
              bottom: 0px;
              left: 0px;
              right: 0px;
              padding: 0px;
              margin: 0px;
              z-index: 0;
            }
          `,
        ]}
      />
      <Particles
        id="tsparticles-container"
        loaded={async (container) => {
          console.log(container);
        }}
        init={particlesInit}
        options={config}
      />
      <StyledBackground
        src={heroData.background.url}
        alt={heroData.background.title}
      />
      <NavBar {...navData} />
      <StyledForegroundWrapper>
        <StyledLeftSide>
          <StyledTitle>{heroData.tile}</StyledTitle>
          <StyledParagraph>{heroData.firstSubtitle}</StyledParagraph>
          <StyledHr />
        </StyledLeftSide>
        <StyledRightSide>
          <StyledSecondaryTextWrapper>
            <StyledParagraph>{heroData.secondSubtitle}</StyledParagraph>
            <StyledHr />
          </StyledSecondaryTextWrapper>
          <StyledTitlesWrapper>
            <StyledSecondaryTitle as="h2">{heroData.date}</StyledSecondaryTitle>
            <StyledTitle as="h2">Chile</StyledTitle>
          </StyledTitlesWrapper>
          <StyledWrapperLink>
            <SecondaryStyledLink href="https://jsconf.com">
              Get Tickets
            </SecondaryStyledLink>
          </StyledWrapperLink>
        </StyledRightSide>
      </StyledForegroundWrapper>
    </StyledWrapper>
  );
};
