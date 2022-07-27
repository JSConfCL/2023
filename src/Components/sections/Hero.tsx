/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";
import { PageProps } from "../../../pages";
import { SecondaryStyledLink, TertiaryStyledLink } from "../Links";

const Particles = lazy(() => import("../Particles"));

const NavBar = dynamic(() => import("../NavBar/NavBar"), { ssr: false });

const StyledWrapper = styled.section(({ theme }) => ({
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#f0e040d4",
  color: theme.colors.jsconfBlack,
  height: "90vh",
  minHeight: 700,
  maxHeight: 900,
  [theme.breakpoints.phoneOnly]: {
    minHeight: 800,
  },
  [theme.breakpoints.tabletLandscapeOnly]: {
    height: "unset",
    maxHeight: "unset",
  },

  [theme.breakpoints.phoneOnly]: {
    minHeight: 800,
  },
}));

const StyledBackground = styled.img(({ theme }) => ({
  position: "absolute",
  zIndex: -1,
  height: "100%",
  aspectRatio: "1366 / 680",
  width: "100%",
  objectFit: "fill",
  [theme.breakpoints.tabletLandscapeOnly]: {
    objectFit: "cover",
  },
}));

const StyledForegroundWrapper = styled.section(({ theme }) => ({
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
  [theme.breakpoints.phoneOnly]: {
    padding: 16,
    gap: 32,
    //
    // flexDirection: "column",
    // padding: 16,
    // gap: 8,
  },
}));

const StyledLeftSide = styled.section(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: 400,
  transition: "all 200ms ease-in-out",
  [theme.breakpoints.tabletLandscapeOnly]: {
    width: 500,
  },
  [theme.breakpoints.phoneOnly]: {
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
  // [theme.breakpoints.phoneOnly]: {
  //   fontSize: "80px",
  // },
  [theme.breakpoints.phoneOnly]: {
    fontSize: "clamp(40.61px, 11vw, 90px)",
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

const StyledRightSide = styled.section(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: 506,
  transition: "all 200ms ease-in-out",
  [theme.breakpoints.tabletLandscapeOnly]: {
    width: 600,
  },
  [theme.breakpoints.phoneOnly]: {
    width: 300,
    textAlign: "right",
  },
}));

const StyledTitlesWrapper = styled.section(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledSecondaryTextWrapper = styled.section(({ theme }) => ({
  marginLeft: 109,
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  [theme.breakpoints.phoneOnly]: {
    display: "none",
  },
}));

const StyledSecondaryTitle = styled(StyledTitle)(({ theme }) => ({
  marginLeft: 84,
  [theme.breakpoints.phoneOnly]: {
    marginLeft: 16,
  },
}));

const StyledWrapperLink = styled.section(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  transitionProperty: "all",
  transitionDuration: "250ms",
  [theme.breakpoints.tabletLandscapeOnly]: {
    flexDirection: "column",
  },
  [theme.breakpoints.phoneOnly]: {
    display: "none",
  },
}));
const StyledWrapperLinkMobile = styled(StyledWrapperLink)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.phoneOnly]: {
    position: "absolute",
    bottom: 0,
    gap: 16,
    padding: 16,
    paddingBottom: 8,
    display: "flex",
    alignSelf: "flex-start",
  },
}));

export const Hero = ({
  heroData,
  navData,
}: {
  heroData: PageProps["heroData"];
  navData: PageProps["navData"];
}) => {
  const Buttons = () => {
    return (
      <>
        {heroData.ctaUrl && (
          <SecondaryStyledLink href={heroData.ctaUrl}>
            {heroData.ctaText}
          </SecondaryStyledLink>
        )}
        {heroData.secondButton && (
          <TertiaryStyledLink href={heroData.secondButton.link}>
            {heroData.secondButton.contenido}
          </TertiaryStyledLink>
        )}
      </>
    );
  };
  return (
    <>
      <StyledWrapper>
        <Suspense fallback={null}>
          <StyledBackground
            src={`${heroData.background.url}?fm=webp`}
            alt={heroData.background.title}
          />
        </Suspense>
        <Suspense fallback={null}>
          <NavBar {...navData} />
        </Suspense>
        <Suspense>
          <Particles />
        </Suspense>
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
              <StyledSecondaryTitle as="h2">
                {heroData.date}
              </StyledSecondaryTitle>
              <StyledTitle as="h2">Santiago</StyledTitle>
            </StyledTitlesWrapper>
            <StyledWrapperLink>
              <Buttons />
            </StyledWrapperLink>
          </StyledRightSide>
        </StyledForegroundWrapper>
        <StyledWrapperLinkMobile>
          <Buttons />
        </StyledWrapperLinkMobile>
      </StyledWrapper>
    </>
  );
};

export default Hero;
