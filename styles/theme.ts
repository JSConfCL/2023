import type { Theme } from "@emotion/react";

const _colors = {
  jsconfBlack: "#1E2019",
  jsconfYellow: "#F0E040",
  jsconfRed: "#F45B69",
  violetBlue: "#3A41A4",
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
  social: {
    twitter: "#0087ca",
    facebook: "#1877F2",
    linkedin: "#0A66C2",
    jsconf: "#F0E040",
  },
};

export const colors = {
  ..._colors,
  titleColor: "#fff",
  subtitleColor: "#fff",
  altColor: "#F0E040",
  textColor: "#fff",
  backgroundColor: "#000",
  altBackgroundColor: "#F0E040",
  footer: "#333",
  contributorFooter: "#F45B69",
  friendsBackground: "#000",
};

const fonts = {
  Barlow: {
    name: "Barlow, Tahoma",
    weights: {
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
    },
  },
  Koulen: {
    name: "Koulen, Arial",
    weights: {
      normal: 400,
    },
  },
};

export const enum ViewportSizes {
  Desktop = 1440,
  TabletLandscape = 1024,
  Phone = 768,
  SmallPhone = 425,
}

function generateMediaQueryString(viewportSize: ViewportSizes): string {
  return `@media (max-width: ${viewportSize}px)`;
}

const breakpoints = {
  desktopOnly: generateMediaQueryString(ViewportSizes.Desktop),
  phoneOnly: generateMediaQueryString(ViewportSizes.Phone),
  tabletLandscapeOnly: generateMediaQueryString(ViewportSizes.TabletLandscape),
};

const theme: Theme = {
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
          onHoverColor: colors.jsconfBlack,
        },
        secondary: {
          backgroundColor: colors.black,
          backgroundFallbackColor: colors.black,
          textColor: colors.white,
          borderColor: colors.white,
          borderWidth: 1,
          borderStyle: "solid",
          borderTopRightRadius: 24,
          onHoverColor: colors.jsconfYellow,
        },
        tertiary: {
          backgroundColor: "transparent",
          backgroundFallbackColor: "transparent",
          textColor: colors.black,
          borderColor: colors.black,
          borderWidth: 4,
          borderStyle: "solid",
          borderTopRightRadius: 24,
          onHoverColor: colors.jsconfYellow,
          minWidth: 200,
        },
      },
    },
    navBar: {
      textColor: colors.jsconfBlack,
      activeTextColor: colors.jsconfBlack,
      mobileTextColor: colors.jsconfBlack,
      activeMobileTextColor: colors.jsconfRed,
    },
    navBarDropDown: {
      backgroundColor: colors.black,
      imageBorderColor: colors.jsconfBlack,
      shadowColor: colors.jsconfBlack,
      textColor: colors.white,
      chevronColor: colors.jsconfBlack,
    },
    global: {
      backgroundColor: colors.black,
      fontFamily: fonts.Barlow.name,
      headingsFontFamily: fonts.Koulen.name,
      headingsFontWeight: 400,
      color: colors.white,
    },
  },
};

export const jsconfTheme: Theme = {
  ...theme,
};

export const previaTheme: Theme = {
  ...theme,
  colors: {
    ...colors,
    titleColor: "#111",
    subtitleColor: "#111",
    altColor: "#F45B69",
    textColor: "#333",
    backgroundColor: "#fff",
    footer: "#fff",
    altBackgroundColor: "#1E2019",
    contributorFooter: "#000",
    friendsBackground: "#000",
  },
  elements: {
    ...theme.elements,
    buttons: {
      variants: {
        ...theme.elements.buttons.variants,
        primary: {
          backgroundColor: colors.jsconfRed,
          backgroundFallbackColor: colors.jsconfRed,
          textColor: "#fff",
          borderColor: colors.transparent,
          borderWidth: 1,
          borderStyle: "solid",
          borderTopRightRadius: 24,
          onHoverColor: "#fff",
        },
      },
    },
    navBar: {
      textColor: colors.jsconfBlack,
      activeTextColor: colors.jsconfRed,
      mobileTextColor: colors.jsconfBlack,
      activeMobileTextColor: colors.jsconfBlack,
    },
    navBarDropDown: {
      backgroundColor: colors.white,
      imageBorderColor: colors.jsconfBlack,
      shadowColor: colors.jsconfBlack,
      textColor: colors.jsconfBlack,
      chevronColor: colors.jsconfBlack,
    },
  },
};
