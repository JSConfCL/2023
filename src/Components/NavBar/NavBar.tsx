/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";
import { Portal } from "react-portal";
import useMediaQuery from "../../helpers/useMediaQuery";
import { JSConfLogo } from "../svgs/logo";
import { PageProps } from "../../../pages";

type Props = PageProps["navData"];
type OnClickProps = {
  onClick: Function;
};

const StyledNav = styled.nav`
  z-index: 100;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const StyledWrapper = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 48px",
  height: 100,
  width: "100%",
  maxWidth: 1440,
  [theme.breakpoints.tabletPortraitOnly]: {
    padding: "32px 16px",
  },
}));

const StyledLinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled.li`
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

const StyledPortalWrapper = styled(motion.section)`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  z-index: 9999;
  top: 0px;
  background-color: black;
  flex-direction: column;
  padding: 40px 16px;

  > ul {
    display: flex;
    flex-direction: column;
  }

  svg {
    align-self: flex-end;
  }
`;

const Menu = (props: Props) => {
  return (
    <StyledLinksContainer>
      {props.linksCollection.items.map((item) => {
        return (
          <StyledLink key={item.sys.id}>
            <Link href={item.link!}>{item.contenido}</Link>
          </StyledLink>
        );
      })}
    </StyledLinksContainer>
  );
};

const MobileMenu = (props: Props & OnClickProps) => {
  return (
    <Portal>
      <StyledPortalWrapper>
        <FeatherIcon icon="x" onClick={() => props.onClick(false)} />
        <Menu {...props} />
      </StyledPortalWrapper>
    </Portal>
  );
};

export const NavBar = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <StyledNav>
      <StyledWrapper>
        <StyledJSConfLogoWrapper>
          <JSConfLogo />
        </StyledJSConfLogoWrapper>
        {!isMobile && <Menu {...props} />}
        {isMobile && (
          <FeatherIcon icon="menu" onClick={() => setIsOpen(true)} />
        )}
        {isOpen && <MobileMenu {...props} onClick={setIsOpen} />}
      </StyledWrapper>
    </StyledNav>
  );
};
