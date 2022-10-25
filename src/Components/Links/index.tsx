import styled from "@emotion/styled";
import { lighten } from "polished";
import { MouseEventHandler } from "react";
import { ArrowIcon } from "../svgs/arrow";

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
  wordSpacing: "100vw",
  cursor: "pointer",
  borderColor: "transparent",
  textAlign: "left",
  maxWidth: 400,
  transition: "all 200ms ease-in-out",
  height: 100,
} as any;

const BasePrimaryAnchor = styled.a(({ theme }) => ({
  ...baseStyling,

  background: theme.elements.buttons.variants.primary.backgroundColor,
  backgroundColor:
    theme.elements.buttons.variants.primary.backgroundFallbackColor,
  color: theme.elements.buttons.variants.primary.textColor,
  borderTopRightRadius:
    theme.elements.buttons.variants.primary.borderTopRightRadius,
  borderWidth: theme.elements.buttons.variants.primary.borderWidth,
  borderStyle: theme.elements.buttons.variants.primary.borderStyle,
  // boxShadow: `0 2px 10px ${lighten(0.55, theme.colors.black)}`,
  "&:hover": {
    background: lighten(0.1, theme.colors.jsconfYellow),
    color: theme.elements.buttons.variants.primary.onHoverColor,
  },

  "&::selection": {
    backgroundColor: lighten(
      0.7,
      theme.elements.buttons.variants.primary.backgroundColor
    ),
  },
  "&:focus": { boxShadow: `0 0 0 2px ${theme.colors.black}` },
}));

const BaseSecondaryExternalLink = styled.a(({ theme }) => ({
  ...baseStyling,

  background: theme.elements.buttons.variants.secondary.backgroundColor,
  backgroundColor:
    theme.elements.buttons.variants.secondary.backgroundFallbackColor,
  color: theme.elements.buttons.variants.secondary.textColor,
  borderTopRightRadius:
    theme.elements.buttons.variants.secondary.borderTopRightRadius,
  borderWidth: theme.elements.buttons.variants.secondary.borderWidth,
  borderStyle: theme.elements.buttons.variants.secondary.borderStyle,

  // boxShadow: `0 2px 10px ${lighten(0.55, theme.colors.black)}`,
  "&:hover": { background: lighten(0.2, theme.colors.black) },
  "&:focus": { boxShadow: `0 0 0 2px ${theme.colors.black}` },
  [theme.breakpoints.phoneOnly]: {
    width: "100%",
  },
}));

const BaseTertiaryExternalLink = styled.a(({ theme }) => ({
  ...baseStyling,

  background: theme.elements.buttons.variants.tertiary.backgroundColor,
  backgroundColor:
    theme.elements.buttons.variants.tertiary.backgroundFallbackColor,
  color: theme.elements.buttons.variants.tertiary.textColor,
  borderTopRightRadius:
    theme.elements.buttons.variants.tertiary.borderTopRightRadius,
  borderColor: theme.elements.buttons.variants.tertiary.borderColor,
  borderWidth: theme.elements.buttons.variants.tertiary.borderWidth,
  borderStyle: theme.elements.buttons.variants.tertiary.borderStyle,
  minWidth: theme.elements.buttons.variants.tertiary.minWidth,

  backdropFilter: "blur(3px)",
  // boxShadow: `0 2px 10px ${lighten(0.55, theme.colors.black)}`,
  "&:hover": { background: lighten(0.1, theme.colors.jsconfYellow) },
  "&:focus": { boxShadow: `0 0 0 2px ${theme.colors.black}` },
  [theme.breakpoints.phoneOnly]: {
    width: "100%",
  },
}));

const StyledIconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const PrimaryStyledLink = (props: {
  href: string;
  children: React.ReactNode;
}) => {
  const isExternal = props.href.startsWith("http");
  return (
    <BasePrimaryAnchor
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      href={props.href}
    >
      {props.children}
      <StyledIconWrapper>
        <ArrowIcon />
      </StyledIconWrapper>
    </BasePrimaryAnchor>
  );
};

export const SecondaryStyledLink = (props: {
  href: string;
  children: React.ReactNode;
}) => {
  const isExternal = props.href.startsWith("http");
  return (
    <BaseSecondaryExternalLink
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      href={props.href}
    >
      {props.children}
      <StyledIconWrapper>
        <ArrowIcon color="white" />
      </StyledIconWrapper>
    </BaseSecondaryExternalLink>
  );
};

export const PrimaryStyledButton = (props: {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
}) => {
  return (
    <BasePrimaryAnchor as="button" onClick={props.onClick}>
      {props.children}
      <StyledIconWrapper>
        <ArrowIcon />
      </StyledIconWrapper>
    </BasePrimaryAnchor>
  );
};

export const SecondaryStyledButton = (props: {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
}) => {
  return (
    <BaseSecondaryExternalLink as="button" onClick={props.onClick}>
      {props.children}
      <StyledIconWrapper>
        <ArrowIcon color="white" />
      </StyledIconWrapper>
    </BaseSecondaryExternalLink>
  );
};

export const TertiaryStyledLink = (props: {
  href: string;
  children: React.ReactNode;
}) => {
  const isExternal = props.href.startsWith("http");
  return (
    <BaseTertiaryExternalLink
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      href={props.href}
    >
      <div>{props.children}</div>
      <StyledIconWrapper>
        <ArrowIcon color="black" />
      </StyledIconWrapper>
    </BaseTertiaryExternalLink>
  );
};
