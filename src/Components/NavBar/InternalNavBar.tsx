/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import { motion, useAnimation, Variants } from "framer-motion";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { lazy, Suspense } from "react";
import { use100vh } from "react-div-100vh";
import {
  Menu as MenuIcon,
  X,
  LogOut,
  Settings,
  Bookmark,
  LogIn,
} from "react-feather";
import { Portal } from "react-portal";
import { useLockBodyScroll } from "react-use";

import { jsconfTheme, ViewportSizes } from "../../../styles/theme";
import { API_URL } from "../../helpers/API";
import { isAuthenticatedAtom, accessTokenAtom } from "../../helpers/auth";
import useMediaQuery from "../../helpers/useMediaQuery";
import { SecondaryStyledButton, SecondaryStyledLink } from "../Links";
import JSConfLogo from "../svgs/logo";

import { UserDropdownMenu } from "./DropdownMenu";
import { NavBarSize } from "./components";
import { MenuItemType, NavBarProps } from "./types";

const Description = lazy(async () => await import("../core/Description"));

const StyledNav = styled(motion.nav)`
  z-index: 100;
  height: ${NavBarSize}px;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  overflow: hidden;
  background: ${({ theme }) => theme.elements.navBar.bgColor};
  color: ${({ theme }) => theme.elements.navBar.textColor};
`;

const StyledWrapper = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 48px",
  width: "100%",
  maxWidth: 1440,
  [theme.breakpoints.phoneOnly]: {
    padding: "0px 16px",
  },
}));

const StyledLinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
    display: none;
  }
`;

const MobileStyledLinksContainer = styled.ul`
  list-style: none;
  padding: 29px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  z-index: 100;
`;

const StyledLink = styled.li<{ isActive: boolean }>`
  padding: 8px 8px;
  font-weight: 400;
  font-family: "Koulen";
  text-align: center;
  position: relative;
  cursor: pointer;
  color: ${({ isActive, theme }) =>
    isActive
      ? theme.elements.navBar.activeTextColor
      : theme.elements.navBar.textColor};
  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
    color: ${({ isActive, theme }) =>
      isActive
        ? theme.elements.navBar.activeMobileTextColor
        : theme.elements.navBar.mobileTextColor};
  }
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: 150ms;

  &:hover {
    opacity: 0.5;
  }
`;

const StyledJSConfLogoWrapper = styled.a`
  height: 100%;
  max-height: 50px;
  min-height: 50px;
  aspect-ratio: 1/1;
  cursor: pointer;
  color: ${({ theme }) => theme.elements.navBar.textColor};
`;

const StyledPortalWrapper = styled(motion.section)<{ height: number | string }>`
  width: 100vw;
  height: ${({ height }) => height};
  display: flex;
  position: fixed;
  z-index: 9999;
  top: -200vh;
  overflow: scroll;

  background-color: ${({ theme }) => theme.colors.altColor};
  flex-direction: column;
  align-items: center;
  font-size: 32px;
  opacity: 0;

  svg {
    align-self: flex-end;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    display: none;
  }
`;

const MobileTopAreaWrapper = styled.section`
  height: 100px;
  display: flex;
  flex-direction: row;
  position: absolute;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & svg {
    height: 36px;
    color: black;
  }
`;

const StyledBottom = styled.section`
  bottom: 0px;
  width: calc(100vw - 32px);
  padding: 32px 0px;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
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

const MobileFeatherIconWrapper = styled.span`
  cursor: pointer;
  position: relative;
  height: fit-content;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    display: none;
  }
`;

const FakeButton = styled.div`
  cursor: pointer;
`;

const UnderLine = styled(motion.div)`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.jsconfRed};
  position: absolute;
  bottom: 1px;
  left: 0;
  right: 0;
`;

const isOpenAtom = atom(false);

const MenuItem = ({ item }: { item: MenuItemType }) => {
  const { pathname } = useRouter();
  const setIsOpen = useSetAtom(isOpenAtom);

  return (
    <StyledLink
      key={item.id}
      isActive={item?.link === pathname}
      onClick={() => {
        setIsOpen(false);
      }}
    >
      {item.onClick != null ? (
        <FakeButton as="button" onClick={item.onClick}>
          {item.contenido}
        </FakeButton>
      ) : item.isBlank ? (
        <Link rel="preconnect" href={item.link} passHref>
          <a target="_blank">
            <span>{item.contenido}</span>
          </a>
        </Link>
      ) : (
        <Link href={item.link}>
          <span>{item.contenido}</span>
        </Link>
      )}
      {item?.link === pathname ? <UnderLine /> : null}
    </StyledLink>
  );
};

const JSConfLogoWrapper = styled.div`
  height: fit-content;
`;

const MobileMenu = ({ items, description, buttonsCollection }: NavBarProps) => {
  const controls = useAnimation();
  const height = use100vh();
  const viewportHeight = height ? `${height}px` : "100vh";

  const isMobile = useMediaQuery(
    `(max-width: ${ViewportSizes.TabletLandscape}px)`
  );
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);

  useLockBodyScroll(isOpen);
  React.useEffect(() => {
    const animate = async () => {
      if (isOpen) {
        await controls.start({
          zIndex: 9999,
          top: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.35 },
        });
      } else {
        await controls.start({
          opacity: 0.7,
          scale: 0.5,
          top: `-100vh`,
          transition: { duration: 0.35 },
        });
      }
    };
    animate().catch((e) => console.error(e));
  }, [controls, isOpen]);

  React.useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile, setIsOpen]);

  const hasItems = items.length > 0;
  if (!hasItems) {
    return null;
  }
  return (
    <>
      <MobileFeatherIconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </MobileFeatherIconWrapper>
      <Portal>
        <StyledPortalWrapper height={viewportHeight} animate={controls}>
          <MobileTopAreaWrapper>
            <JSConfLogoWrapper>
              <JSConfLogo />
            </JSConfLogoWrapper>
            <MobileFeatherIconWrapper onClick={() => setIsOpen(false)}>
              <X color={jsconfTheme.colors.jsconfBlack} />
            </MobileFeatherIconWrapper>
          </MobileTopAreaWrapper>

          <MobileStyledLinksContainer>
            {items.map((item) => {
              return <MenuItem key={item.id} item={item} />;
            })}
          </MobileStyledLinksContainer>
          <StyledBottom>
            <Suspense>
              <Description data={description} />
            </Suspense>
            {buttonsCollection?.map((button, index) => {
              if (button.onClick != null) {
                return (
                  <SecondaryStyledButton
                    key={`button-mobile-${index}`}
                    onClick={button.onClick}
                  >
                    {button.contenido}
                  </SecondaryStyledButton>
                );
              } else {
                return (
                  <SecondaryStyledLink
                    key={`button-mobile-${index}`}
                    href={button.link}
                  >
                    {button.contenido}
                  </SecondaryStyledLink>
                );
              }
            })}
          </StyledBottom>
        </StyledPortalWrapper>
      </Portal>
    </>
  );
};

const NavVariant: Variants = {
  initial: {
    opacity: 0,
    translateY: -50,
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: { duration: 0.5, delay: 0.5 },
  },
};

export const InternalNavBar = (props: NavBarProps) => {
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);
  const setAccessToken = useSetAtom(accessTokenAtom);
  return (
    <StyledNav variants={NavVariant} animate="animate" initial="initial">
      <StyledWrapper>
        <Link href="/" passHref legacyBehavior>
          <StyledJSConfLogoWrapper>
            <JSConfLogo />
          </StyledJSConfLogoWrapper>
        </Link>
        <StyledLinksContainer>
          {props.items.map((item) => {
            return <MenuItem key={item.id} item={item} />;
          })}
          {isLoggedIn ? (
            <UserDropdownMenu />
          ) : (
            <MenuItem
              item={{
                contenido: (
                  <>
                    Ingresar <LogIn size={12} />
                  </>
                ),
                id: "Login",
                onClick: () => {
                  window.location.href = `${API_URL}/auth/github`;
                },
              }}
            />
          )}
        </StyledLinksContainer>
        <MobileMenu
          items={[
            ...props.items,
            ...(isLoggedIn
              ? [
                  {
                    contenido: (
                      <>
                        <Bookmark size={26} /> Mis Tickets
                      </>
                    ),
                    id: "MyTickets",
                    link: "/mytickets",
                    isBlank: false,
                  },
                  {
                    contenido: (
                      <>
                        <Settings size={26} /> Configuracion
                      </>
                    ),
                    id: "Settings",
                    link: "/settings",
                    isBlank: false,
                  },
                  {
                    contenido: (
                      <>
                        <LogOut size={26} /> Salir
                      </>
                    ),
                    id: "Logout",
                    onClick: () => {
                      setAccessToken(null);
                    },
                  },
                ]
              : [
                  {
                    contenido: (
                      <>
                        <LogIn size={26} /> Ingresar
                      </>
                    ),
                    id: "Login",
                    onClick: () => {
                      window.location.href = `${API_URL}/auth/github`;
                    },
                  },
                ]),
          ]}
          buttonsCollection={props.buttonsCollection}
          description={props.description}
        />
      </StyledWrapper>
    </StyledNav>
  );
};
