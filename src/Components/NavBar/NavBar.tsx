/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";

type Props = {
  logo: string;
};

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
  max-width: 1440px; // TODO: Meter en el theme
`;

const StyledImg = styled.img`
  height: 100%;
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
  cursor: pointer;
`;

export const NavBar = (props: Props) => {
  return (
    <StyledNav>
      <StyledWrapper>
        <div>
          <StyledImg alt="jsconf logo" src={props.logo} />
        </div>
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
