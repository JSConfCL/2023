/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import React, { useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import FeatherIcon from "feather-icons-react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Portal } from "react-portal";
import useMediaQuery from "../../helpers/useMediaQuery";
import Description from "../core/Description";
import { JSConfLogo } from "../svgs/logo";
import { PageProps } from "../../../pages";
import { SecondaryStyledLink } from "../Links";

type Props = PageProps["navData"];
type OnClickProps = {
  onClick: Function;
  animate: any;
};

const StyledNav = styled(motion.nav)`
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

const StyledLink = styled.li<{ isActive: string }>`
  padding: 8px 16px;
  font-weight: 400;
  font-family: "Koulen";
  cursor: pointer;
  border: 0px solid #f45b69;
  color: ${({ isActive }) => (isActive === "active" ? "#F45B69" : "#1E2019")};
  @media (min-width: 769px) {
    border-width: ${({ isActive }) =>
      isActive === "active" ? "0px 0px 2px 0px" : "0px"};
    color: inherit;
  }
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
  background-color: #f0e040;
  flex-direction: column;
  padding: 29px 16px;
  font-size: 32px;

  > ul {
    display: flex;
    flex-direction: column;
  }

  li {
    text-align: center;
  }

  svg {
    align-self: flex-end;
  }
`;

const Flex = styled.section`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > svg {
    height: 36px;
    color: black;
  }
`;

const StyledBottom = styled.section`
  bottom: 0px;
  position: absolute;
  width: calc(100vw - 32px);
  padding: 32px 0px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    color: black;
  }
  h1 {
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    color: black;
  }
`;

const Menu = (props: Props) => {
  const { pathname } = useRouter();

  return (
    <StyledLinksContainer>
      {props.linksCollection.items.map((item) => {
        return (
          <StyledLink
            key={item.sys.id}
            isActive={item.link === pathname ? "active" : ""}
          >
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
      <StyledPortalWrapper animate={props.animate}>
        <Flex>
          <JSConfLogo />
          <FeatherIcon
            icon="x"
            onClick={() => props.onClick(false)}
            color="#1E2019"
          />
        </Flex>

        <Menu {...props} />
        <StyledBottom>
          <Description data={props?.description?.json!} />
          {props.buttonsCollection.items.map((button, index) => (
            <SecondaryStyledLink
              key={`button-mobile-${index}`}
              href={button?.link!}
            >
              {button?.contenido!}
            </SecondaryStyledLink>
          ))}
        </StyledBottom>
      </StyledPortalWrapper>
    </Portal>
  );
};

const NavVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const NavBar = (props: Props) => {
  const controls = useAnimation();
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleOpen = async (value: boolean) => {
    if (value) {
      await controls.start({
        zIndex: 9999,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      });
    } else {
      await controls.start({
        opacity: 0,
        scale: 0.0,
        transition: { duration: 0.5 },
      });
      await controls.start({
        zIndex: 0,
        transition: { duration: 0.01 },
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    controls.start({
      opacity: 0,
      zIndex: 0,
      scale: 0,
      transition: { duration: 0 },
    });
  }, []);

  return (
    <StyledNav variants={NavVariant} animate="animate" initial="initial">
      <AnimatePresence exitBeforeEnter>
        <StyledWrapper>
          <StyledJSConfLogoWrapper>
            <JSConfLogo />
          </StyledJSConfLogoWrapper>
          {!isMobile && <Menu {...props} />}
          {isMobile && (
            <FeatherIcon icon="menu" onClick={() => handleOpen(true)} />
          )}
          {<MobileMenu {...props} onClick={handleOpen} animate={controls} />}
        </StyledWrapper>
      </AnimatePresence>
    </StyledNav>
  );
};
