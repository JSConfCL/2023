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
  inter: {
    name: "inter" as "inter",
    weights: {
      bold: 700,
      normal: 400,
      thin: 300,
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
      fontFamily: fonts.inter.name,
      color: colors.white,
    },
  },
};
