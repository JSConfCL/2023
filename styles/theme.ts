import { Theme } from "@emotion/react";
import { lighten } from "polished";

const colors = {
  jsconfBlack: "#1E2019",
  jsconfYellow: "#F0E040",
  jsconfRed: "#F45B69",
  violetBlue: "#3A41A4",
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
};

const fonts = {
  Barlow: {
    name: "Barlow" as "Barlow",
    weights: {
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
  Koulen: {
    name: "Koulen" as "Koulen",
    weights: {
      normal: 400,
    },
  },
};

export enum ViewportSizes {
  Desktop = 1800,
  TabletLandscape = 1200,
  SmallDesktop = 960,
  TabletPortrait = 900,
  Phone = 600,
}

function generateMediaQueryString(viewportSize: ViewportSizes): string {
  return `@media (max-width: ${viewportSize}px)`;
}

const breakpoints = {
  desktopOnly: generateMediaQueryString(ViewportSizes.Desktop),
  phoneOnly: generateMediaQueryString(ViewportSizes.Phone),
  smallDesktopOnly: generateMediaQueryString(ViewportSizes.SmallDesktop),
  tabletLandscapeOnly: generateMediaQueryString(ViewportSizes.TabletLandscape),
  tabletPortraitOnly: generateMediaQueryString(ViewportSizes.TabletPortrait),
};

export const jsconfTheme: Theme = {
  colors,
  fonts,
  breakpoints,
  elements: {
    buttons: {
      variants: {
        primary: {
          backgroundColor: colors.jsconfYellow,
          backgroundFallbackColor: colors.jsconfYellow,
          textColor: colors.jsconfBlack,
          borderColor: colors.transparent,
          borderWidth: 1,
          borderStyle: "solid",
          borderTopRightRadius: 24,
        },
        secondary: {
          backgroundColor: colors.black,
          backgroundFallbackColor: colors.black,
          textColor: colors.white,
          borderColor: colors.white,
          borderWidth: 1,
          borderStyle: "solid",
        },
      },
    },
    global: {
      backgroundColor: colors.black,
      fontFamily: fonts.koulen.name,
      headingsFontFamily: fonts.barlow.name,
      headingsFontWeight: 400,
      color: colors.white,
    },
  },
};
