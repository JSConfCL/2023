/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import { JSConfLogo } from "../svgs/logo";

type Props = {};

const StyledNav = styled.nav`
  height: 80px;
  background-color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.black};
  z-index: 100;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: sticky;
  display: flex;
  top: 0;
`;

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  max-width: 1200px;
`;

const StyledLinksContainer = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled.ul`
  padding: 16px;
  font-size: 0.8em;
  cursor: pointer;
`;

const StyledJSConfLogoWrapper = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
`;

export const NavBar = (props: Props) => {
  return (
    <StyledNav>
      <StyledWrapper>
        <StyledJSConfLogoWrapper>
          <JSConfLogo />
        </StyledJSConfLogoWrapper>
        <StyledLinksContainer>
          <StyledLink>
            <Link href={"/"}>Home</Link>
          </StyledLink>
          <StyledLink>
            <Link href={"https://github.com/jsconfcl/code_of_conduct"}>
              Code Of Conduct
            </Link>
          </StyledLink>
        </StyledLinksContainer>
      </StyledWrapper>
    </StyledNav>
  );
};
