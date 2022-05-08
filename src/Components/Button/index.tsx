import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { darken, lighten, opacify } from "polished";
import { jsconfTheme } from "../../../styles/theme";

const baseStyling = {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 0,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  minWidth: 150,
  fontWeight: 500,
  height: 60,
} as any;

export const PrimaryButton = styled.button(({ theme }) => ({
  ...baseStyling,
  // background: `linear-gradient(269.01deg, #3A41A4 27.84%, rgba(60, 72, 255, 0) 135.16%)`,
  background: theme.elements.buttons.variants.primary.backgroundColor,
  backgroundColor:
    theme.elements.buttons.variants.primary.backgroundFallbackColor,
  color: theme.elements.buttons.variants.primary.textColor,
  borderColor: "transparent",
  borderWidth: theme.elements.buttons.variants.primary.borderWidth,
  borderStyle: theme.elements.buttons.variants.primary.borderStyle,

  backgroundImage: theme.elements.buttons.variants.primary.borderColor,
  backgroundOrigin: "border-box",

  // boxShadow: `0 2px 10px ${lighten(0.55, theme.colors.black)}`,
  "&:hover": { background: lighten(0.7, theme.colors.black) },
  "&:focus": { boxShadow: `0 0 0 2px ${theme.colors.black}` },
}));

export const SecondaryButton = styled.button(({ theme }) => ({
  ...baseStyling,
  backgroundColor: theme.elements.buttons.variants.secondary.backgroundColor,
  background: theme.elements.buttons.variants.secondary.backgroundFallbackColor,
  color: theme.elements.buttons.variants.secondary.textColor,
  borderColor: theme.elements.buttons.variants.secondary.borderColor,
  borderWidth: theme.elements.buttons.variants.secondary.borderWidth,
  borderStyle: theme.elements.buttons.variants.secondary.borderStyle,

  backgroundImage: theme.elements.buttons.variants.secondary.borderColor,
  backgroundOrigin: "border-box",

  // boxShadow: `0 2px 4px ${lighten(0.55, theme.colors.black)}`,
  "&:hover": { backgroundColor: lighten(0.7, theme.colors.black) },
  "&:focus": { boxShadow: `0 0 0 2px ${theme.colors.black}` },
}));
