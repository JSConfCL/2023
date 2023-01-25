import styled from "@emotion/styled";

import { motion } from "framer-motion";
import { transparentize } from "polished";
import { CSSProperties } from "react";
import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import { ViewportSizes } from "../../../styles/theme";

import { API_URL } from "../../helpers/API";

export const Paragraph = styled.p`
  color: #fff;
  transition: font-size 250ms ease-in-out;
  font-size: 22px;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 24px;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 26px;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 28px;
  }
`;

export const PaymentButtonWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  gap: 50px;
`;

export const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
`;

export const Small = styled.small`
  font-size: 0.8em;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 2rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 2rem;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 2rem;
  }
`;

export const AgotadasSubtitle = styled(SubTitle)`
  color: ${({ theme }) => theme.colors.jsconfYellow};
`;

export const GenericBtn = styled(motion.button)`
  border-color: ${({ theme }) => theme.colors.altColor};
  color: ${({ theme }) => theme.colors.altColor};
  border-width: 2px;
  border-style: solid;
  font-weight: 700;
  padding-left: 1rem;
  padding-right: 1rem;
  display: inline-flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  line-height: 0;
  height: 50px;
  transition-duration: 250ms;
  transition-property: all;
  cursor: pointer;
  &:active,
  &:focus,
  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => transparentize(0.2)(theme.colors.altColor)};
    border-color: ${({ theme }) => transparentize(0.2)(theme.colors.altColor)};
    color: ${({ theme }) => transparentize(0.2)(theme.colors.altColor)};
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
    border-color: ${({ theme }) =>
      transparentize(0.78)(theme.colors.textColor)};
    color: ${({ theme }) => transparentize(0.75)(theme.colors.textColor)};
    box-shadow: none;
    cursor: not-allowed;
    transform: translateY(0em);
  }
`;

export const GenericLink = styled(motion.a)`
  border-color: ${({ theme }) => theme.colors.jsconfYellow};
  color: ${({ theme }) => theme.colors.jsconfYellow};
  border-width: 2px;
  border-style: solid;
  font-weight: 700;
  padding-left: 1rem;
  padding-right: 1rem;
  display: inline-flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  line-height: 0;
  height: 50px;
  transition-duration: 250ms;
  transition-property: all;
  cursor: pointer;
  &:active,
  &:focus,
  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme }) => theme.colors.jsconfRed};
    border-color: ${({ theme }) => theme.colors.jsconfRed};
    color: ${({ theme }) => theme.colors.jsconfRed};
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
    border-color: ${({ theme }) =>
      transparentize(0.78)(theme.colors.textColor)};
    color: ${({ theme }) => transparentize(0.75)(theme.colors.textColor)};
    box-shadow: none;
    cursor: not-allowed;
    transform: translateY(0em);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: gap 250ms ease-in-out;
  /* min-height: 40vh; */
  @media (max-width: ${ViewportSizes.Phone}px) {
    gap: 1rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    gap: 2rem;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    gap: 2rem;
  }
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  transition: gap 250ms ease-in-out;
  @media (min-width: ${ViewportSizes.Phone}px) {
    flex-direction: column;
    gap: 2rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    flex-direction: row;
    gap: 5rem;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    flex-direction: row;
    gap: 9rem;
  }
`;

export const LeftSide = styled(motion.div)`
  width: 100%;
  display: flex;
  flex: 2;
  flex-direction: column;
  gap: 2rem;
`;

export const RightSide = styled(motion.div)`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    justify-content: flex-end;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    justify-content: flex-end;
  }
`;

export const ImageWrapper = styled.div`
  transition: width 250ms ease-in-out, height 250ms ease-in-out;
  position: relative;
  height: 250px;
  width: 200px;
  transform: translateY(0px);
  overflow: hidden;
  @media (min-width: ${ViewportSizes.Phone}px) {
    transform: translateY(0);
    overflow: hidden;
    width: 300px;
    height: 400px;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    transform: translateY(-150px);
    overflow: visible;
    height: 320px;
    width: 290px;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    transform: translateY(-150px);
    overflow: visible;
    width: 350px;
    height: 350px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
`;

export const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.black};
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const SocialButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 1rem;

  @media (min-width: ${ViewportSizes.Phone}px) {
    width: 600px;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    width: 100%;
  }
`;

const style: CSSProperties = {
  paddingTop: "2rem",
  paddingBottom: "2rem",
  margin: 0,
  display: "inline-flex",
  justifyContent: "center",
};

export const GithubButton = () => {
  return (
    <SocialButtonWrapper>
      <GithubLoginButton
        style={style}
        onClick={() => {
          window.location.href = `${API_URL}/auth/github`;
        }}
        text="Ingresa con Github"
      />
      {false && (
        <GoogleLoginButton
          style={style}
          onClick={() => {
            window.location.href = `${API_URL}/auth/google`;
          }}
          text="Ingresa con Google"
        />
      )}
    </SocialButtonWrapper>
  );
};
