import styled from "@emotion/styled";
import { text } from "node:stream/consumers";
import { darken, lighten, opacify } from "polished";

const baseStyling = {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontWeight: "bold",
  position: "relative",
  borderRadius: 0,
  padding: 16,
  paddingRight: 48,
  fontSize: 24,
  lineHeight: 1,
  minWidth: 150,
  height: 60,
  wordSpacing: "100vw",
  cursor: "pointer",
} as any;

export const BasePrimaryButton = styled.button(({ theme }) => ({
  ...baseStyling,

  background: theme.elements.buttons.variants.primary.backgroundColor,
  backgroundColor:
    theme.elements.buttons.variants.primary.backgroundFallbackColor,
  color: theme.elements.buttons.variants.primary.textColor,
  borderTopRightRadius:
    theme.elements.buttons.variants.primary.borderTopRightRadius,
  borderColor: "transparent",
  borderWidth: theme.elements.buttons.variants.primary.borderWidth,
  borderStyle: theme.elements.buttons.variants.primary.borderStyle,
  textAlign: "left",

  backgroundImage: theme.elements.buttons.variants.primary.borderColor,

  // boxShadow: `0 2px 10px ${lighten(0.55, theme.colors.black)}`,
  "&:hover": { background: darken(0.1, theme.colors.jsconfYellow) },
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

  // boxShadow: `0 2px 4px ${lighten(0.55, theme.colors.black)}`,
  "&:hover": { backgroundColor: lighten(0.7, theme.colors.black) },
  "&:focus": { boxShadow: `0 0 0 2px ${theme.colors.black}` },
}));

export const TertiaryButton = styled.button(({ theme }) => ({
  ...baseStyling,
  backgroundColor: theme.elements.buttons.variants.secondary.backgroundColor,
  background: theme.elements.buttons.variants.secondary.backgroundFallbackColor,
  color: theme.elements.buttons.variants.secondary.textColor,
  borderColor: theme.elements.buttons.variants.secondary.borderColor,
  borderWidth: theme.elements.buttons.variants.secondary.borderWidth,
  borderStyle: theme.elements.buttons.variants.secondary.borderStyle,

  backgroundImage: theme.elements.buttons.variants.secondary.borderColor,

  // boxShadow: `0 2px 4px ${lighten(0.55, theme.colors.black)}`,
  "&:hover": { backgroundColor: lighten(0.7, theme.colors.black) },
  "&:focus": { boxShadow: `0 0 0 2px ${theme.colors.black}` },
}));
