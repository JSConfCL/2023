import { Theme } from "@emotion/react";
import { lighten } from "polished";

const colors = {
  jsconfBlack: "#323330",
  jsconfYellow: "#F0E040",
  violetBlue: "#3A41A4",
  frostbite: "#D843A9",
  white: "#FFFFFF",
  black: "#050505",
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

export const jsconfTheme: Theme = {
  colors,
  fonts,
  elements: {
    buttons: {
      variants: {
        primary: {
          backgroundColor: `linear-gradient(269.01deg, ${
            colors.violetBlue
          } 27.84%, ${lighten(0.2, colors.violetBlue)} 135.16%)`,
          backgroundFallbackColor: colors.violetBlue,
          textColor: colors.white,
          borderColor: `linear-gradient(269.01deg, ${
            colors.violetBlue
          } 27.84%, ${lighten(0.2, colors.violetBlue)} 135.16%)`,
          borderWidth: 1,
          borderStyle: "solid",
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
    },
  },
};
