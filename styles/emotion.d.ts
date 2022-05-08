import "@emotion/react";
import * as CSS from "csstype";

type ButtonVariantStyles = {
  backgroundColor: string;
  textColor: string;
  backgroundFallbackColor: string;
  borderColor: string;
  borderWidth: number;
  borderStyle: CSS.Properties["borderStyle"];
};

type InterFontStyle = {
  name: "inter";
  weights: {
    bold: number;
    normal: number;
    thin: number;
  };
};

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      jsconfYellow: string;
      jsconfBlack: string;
      violetBlue: string;
      frostbite: string;
      white: string;
      black: string;
    };
    fonts: {
      inter: InterFontStyle;
    };
    elements: {
      buttons: {
        variants: {
          primary: ButtonVariantStyles;
          secondary: ButtonVariantStyles;
        };
      };
      global: {
        backgroundColor: string;
        fontFamily: keyof Theme["fonts"];
      };
    };
  }
}
