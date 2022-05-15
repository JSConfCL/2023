/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import { JSConfLogo } from "../svgs/logo";
import { PageProps } from "../../../pages";

type Props = PageProps["navData"];

const StyledNav = styled.nav`
  z-index: 100;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
`;

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 48px;
  padding-right: 48px;
  height: 100px;
  width: 100%;
  max-width: 1366px;
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
  font-weight: 400;
  font-family: "Koulen";
  cursor: pointer;
`;

const StyledJSConfLogoWrapper = styled.div`
  height: 100%;
  max-height: 50px;
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
          {props.linksCollection.items.map((item) => {
            return (
              <StyledLink key={item.sys.id}>
                <Link href={item.link!}>{item.contenido}</Link>
              </StyledLink>
            );
          })}
        </StyledLinksContainer>
      </StyledWrapper>
    </StyledNav>
  );
};
