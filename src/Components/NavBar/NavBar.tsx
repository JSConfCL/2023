/* eslint-disable @next/next/no-img-element */
import { lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import React, { useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Portal } from "react-portal";

import useMediaQuery from "../../helpers/useMediaQuery";
import { PageProps } from "../../../pages";
import { SecondaryStyledLink } from "../Links";

const FeatherIcon = lazy(() => import("feather-icons-react"));
const JSConfLogo = dynamic(() => import("../svgs/logo"));
const Description = lazy(() => import("../core/Description"));

type Props = PageProps["navData"];

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
  @media (max-width: 769px) {
    display: none;
  }
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

  &:hover {
    opacity: 0.5;
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
  opacity: 0;

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
  @media (min-width: 769px) {
    display: none;
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

const FeatherIconWrapper = styled.div`
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
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
            {item.isBlank ? (
              <Link rel="preconnect" href={item.link!} passHref>
                <a target="_blank">{item.contenido}</a>
              </Link>
            ) : (
              <Link href={item.link!}>{item.contenido}</Link>
            )}
          </StyledLink>
        );
      })}
    </StyledLinksContainer>
  );
};

const MobileMenu = (props: Props) => {
  const controls = useAnimation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const animate = async () => {
      if (isOpen) {
        await controls.start({
          zIndex: 9999,
          top: 3,
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
          zIndex: -1000,
          top: -3000,
          transition: { duration: 0.01 },
        });
      }
    };
    animate();
  }, [controls, isOpen]);

  React.useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  // useEffect(() => {
  //   controls.start({
  //     opacity: 0,
  //     top: -3000,
  //     zIndex: -1000,
  //     scale: 0,
  //     transition: { duration: 0 },
  //   });
  // }, [controls]);

  return (
    <>
      <FeatherIconWrapper onClick={() => setIsOpen(true)}>
        <FeatherIcon icon="menu" />
      </FeatherIconWrapper>
      <Portal>
        <StyledPortalWrapper animate={controls}>
          <Flex>
            <Suspense fallback={<div>Loading...</div>}>
              <JSConfLogo />
            </Suspense>
            <FeatherIconWrapper onClick={() => setIsOpen(false)}>
              <FeatherIcon icon="x" color="#1E2019" />
            </FeatherIconWrapper>
          </Flex>

          <Menu {...props} />
          <StyledBottom>
            <Suspense fallback={<div>Loading...</div>}>
              <Description data={props?.description?.json!} />
            </Suspense>
            {props.buttonsCollection?.items.map((button, index) => (
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
    </>
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
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <StyledNav variants={NavVariant} animate="animate" initial="initial">
      <AnimatePresence exitBeforeEnter>
        <StyledWrapper>
          <StyledJSConfLogoWrapper>
            <JSConfLogo />
          </StyledJSConfLogoWrapper>
          <Menu {...props} />
          <MobileMenu {...props} />
        </StyledWrapper>
      </AnimatePresence>
    </StyledNav>
  );
};

export default NavBar;
