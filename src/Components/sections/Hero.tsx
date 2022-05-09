/* eslint-disable @next/next/no-img-element */
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { JSConfLogo } from "../svgs/logo";

type Props = {};

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 90vh;
  max-height: 900px;
  overflow: hidden;
  align-items: center;
`;

const StyledForegroundWrapper = styled.div(({ theme }) => ({
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: "0",
  display: "flex",
  padding: "1rem",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.desktopOnly]: {
    justifyContent: "center",
  },
  [theme.breakpoints.tabletLandscapeOnly]: {
    justifyContent: "flex-end",
  },
  [theme.breakpoints.smallDesktopOnly]: {
    justifyContent: "flex-end",
  },
  [theme.breakpoints.tabletPortraitOnly]: {
    justifyContent: "flex-end",
  },
  [theme.breakpoints.phoneOnly]: {
    justifyContent: "center",
  },
}));

const StyledTitle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 84px;
  line-height: 120px;
  letter-spacing: 1px;
  line-height: 1.1em;
  filter: drop-shadow(20px 20px 3px #4444dd);
`;
const StyledSubTitle = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 120px;
  letter-spacing: 1px;
  line-height: 1.2em;
  color: ${({ theme }) => theme.colors.frostbite};
`;

const StyledParagraph = styled.p`
  font-size: 28px;
`;

const StyledTitleContainer = styled.div(({ theme }) => ({
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  transition: "width 250ms ease-in-out 200ms",
  maxWidth: 920,
  [theme.breakpoints.desktopOnly]: {
    width: "70%",
  },
  [theme.breakpoints.tabletLandscapeOnly]: {
    padding: "3rem",
    width: "65%",
  },
  [theme.breakpoints.smallDesktopOnly]: {
    paddingRight: "3rem",
    width: "60%",
  },
  [theme.breakpoints.tabletPortraitOnly]: {
    width: "70%",
  },
  [theme.breakpoints.phoneOnly]: {
    width: "100%",
  },
}));

const StyledOverSizedImageContainer = styled.div(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  aspectRatio: "1/1",
  transition: "all 200ms ease-in-out",
  transitionDelay: "0ms",
  height: "100%",
  [theme.breakpoints.desktopOnly]: {
    height: "100%",
  },
  [theme.breakpoints.tabletLandscapeOnly]: {
    height: "600%",
    transform: "translateY(-40%) translateX(40%)",
  },
  [theme.breakpoints.smallDesktopOnly]: {
    height: "600%",
    transform: "translateY(-40%) translateX(40%)",
  },
  [theme.breakpoints.tabletPortraitOnly]: {
    height: "400%",
    transform: "translateY(-30%) translateX(17%)",
    transitionDelay: "300ms",
  },
  [theme.breakpoints.phoneOnly]: {
    transitionDelay: "0ms",
    transform: "translateY(-30%) translateX(-300%)",
  },
}));

const StyledImageWrapper = styled.div(({ theme }) => ({
  position: "relative",
  left: "0",
  aspectRatio: "1/1",
  height: 400,
  [theme.breakpoints.desktopOnly]: {
    height: 400,
    position: "relative",
  },
  [theme.breakpoints.tabletLandscapeOnly]: {
    height: 100,
    position: "absolute",
  },
  [theme.breakpoints.smallDesktopOnly]: {
    height: 100,
    position: "absolute",
  },
  [theme.breakpoints.tabletPortraitOnly]: {
    height: 100,
    position: "absolute",
  },
  [theme.breakpoints.phoneOnly]: {
    height: 100,
    position: "absolute",
  },
}));

export const Hero = (props: Props) => {
  const theme = useTheme();
  return (
    <StyledWrapper>
      <StyledForegroundWrapper>
        <StyledImageWrapper>
          <StyledOverSizedImageContainer>
            <JSConfLogo />
          </StyledOverSizedImageContainer>
        </StyledImageWrapper>
        <StyledTitleContainer>
          <StyledTitle>JSConf Chile</StyledTitle>
          <StyledSubTitle>
            Noviembre<span style={{ color: theme.colors.white }}> 2022</span>
          </StyledSubTitle>
          <StyledParagraph>
            La más prestigiosa conferencia de JavaScript, en Chile.{" "}
            <span style={{ color: theme.colors.jsconfYellow }}>
              100% Híbrida.
            </span>{" "}
            Hecha por y para developers.
          </StyledParagraph>
        </StyledTitleContainer>
      </StyledForegroundWrapper>
    </StyledWrapper>
  );
};
