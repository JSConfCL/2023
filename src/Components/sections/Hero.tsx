/* eslint-disable @next/next/no-img-element */
import { css, Global, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { LegacyRef, useRef } from "react";
import { PageProps } from "../../../pages";
import { SecondaryStyledLink } from "../Links";
import Particles from "react-tsparticles";
import config from "./config";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  height: 90vh;
  max-height: 700px;
  background-color: ${({ theme }) => theme.colors.jsconfYellow};
  /* mix-blend-mode: hard-light; */ // Si? deberíamos?
  color: ${({ theme }) => theme.colors.jsconfBlack};
`;

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
  maxWidth: 1366,
  alignItems: "center",
  // [theme.breakpoints.desktopOnly]: {
  //   justifyContent: "center",
  // },
  // [theme.breakpoints.tabletLandscapeOnly]: {
  //   justifyContent: "flex-end",
  // },
  // [theme.breakpoints.smallDesktopOnly]: {
  //   justifyContent: "flex-end",
  // },
  // [theme.breakpoints.tabletPortraitOnly]: {
  //   justifyContent: "flex-end",
  // },
  // [theme.breakpoints.phoneOnly]: {
  //   justifyContent: "center",
  // },
}));

const StyledLeftSide = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: 400,
}));

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 90px;
  line-height: 120px;
  letter-spacing: 1px;
  line-height: 1em;
  margin: 0;
  word-spacing: 100vw;
`;

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
`;

const StyledRightSide = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: 506,
}));

const StyledTitlesWrapper = styled.div`
  display: "flex";
  flex-direction: "column";
`;

const StyledSecondaryTextWrapper = styled.div`
  margin-left: 109px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledSecondaryTitle = styled(StyledTitle)`
  margin-left: 84px;
`;

export const Hero = (props: PageProps["heroData"]) => {
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
      <StyledForegroundWrapper>
        <StyledLeftSide>
          <StyledTitle>{props.tile}</StyledTitle>
          <StyledParagraph>{props.firstSubtitle}</StyledParagraph>
          <StyledHr />
        </StyledLeftSide>
        <StyledRightSide>
          <StyledSecondaryTextWrapper>
            <StyledParagraph>{props.secondSubtitle}</StyledParagraph>
            <StyledHr />
          </StyledSecondaryTextWrapper>
          <StyledTitlesWrapper>
            <StyledSecondaryTitle as="h2">{props.date}</StyledSecondaryTitle>
            <StyledTitle as="h2">Chile</StyledTitle>
          </StyledTitlesWrapper>
          <SecondaryStyledLink href="https://jsconf.com">
            Get Tickets
          </SecondaryStyledLink>
        </StyledRightSide>
      </StyledForegroundWrapper>
    </StyledWrapper>
  );
};
