import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { transparentize } from "polished";

import { ViewportSizes } from "../../../styles/theme";

export const H1 = styled(motion.h1)<{ color?: string }>`
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  font-size: 120px;
  line-height: 120px;
  /* or 100% */
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme, color }) => color ?? theme.colors.titleColor};
`;

export const H2 = styled(motion.h2)`
  font-family: "Koulen";
  letter-spacing: 1px;
  color: ${({ theme, color }) => color ?? theme.colors.titleColor};
  font-weight: 400;
  text-align: left;
  font-size: 40px;
  line-height: 40px;
  text-transform: uppercase;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 80px;
    line-height: 80px;
  }
`;

export const H3 = styled(motion.h3)`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #ffffff;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 32px;
    line-height: 43px;
  }
`;

export const P = styled(motion.p)<{ variant?: "sm" | null }>`
  font-family: "Barlow";
  font-weight: 400;
  font-size: ${({ variant }) => (variant === "sm" ? "16px" : "18px")};
  font-style: normal;
  letter-spacing: 0.5px;
  line-height: 1.75rem;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: ${({ variant }) => (variant === "sm" ? "16px" : "20px")};
  }
`;

export const B = styled(motion.b)<{ variant?: "sm" | null }>`
  font-weight: bold;
  font-size: ${({ variant }) => (variant === "sm" ? "16px" : "18px")};
  line-height: 1.75rem;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: ${({ variant }) => (variant === "sm" ? "16px" : "20px")};
  }
`;

export const UL = styled(motion.ul)<{ variant?: "sm" | null }>`
  list-style: disc;
  margin-inline-start: 1em;
  padding-left: 1rem;
  line-height: 1.75rem;
  font-size: ${({ variant }) => (variant === "sm" ? "16px" : "18px")};

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: ${({ variant }) => (variant === "sm" ? "16px" : "20px")};
  }
`;

export const LI = styled(motion.li)<{ variant?: "sm" | null }>`
  line-height: 1.75rem;
  font-size: ${({ variant }) => (variant === "sm" ? "16px" : "18px")};

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: ${({ variant }) => (variant === "sm" ? "16px" : "20px")};
  }
`;

export const Strong = styled.strong`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.75rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 20px;
  }
`;

export const Anchor = styled.a`
  color: ${({ theme }) => theme.colors.altColor};
  font-weight: bold;
  height: 50px;
  transition-duration: 250ms;
  transition-property: all;
  cursor: pointer;
  &:active,
  &:focus,
  &:hover {
    color: ${({ theme }) => transparentize(0.75)(theme.colors.altColor)};
  }
  &:focus,
  &:hover {
    transform: translateY(-0.25em);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0em);
  }
  &:disabled,
  &:disabled:hover {
    color: ${({ theme }) => transparentize(0.75)(theme.colors.white)};
    cursor: not-allowed;
    transform: translateY(0em);
  }
`;
