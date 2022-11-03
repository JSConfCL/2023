/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { lazy, Suspense } from "react";
import { use100vh } from "react-div-100vh";
import { Portal } from "react-portal";
import { useLockBodyScroll } from "react-use";
import { Simplify } from "type-fest";
import { jsconfTheme, ViewportSizes } from "../../../styles/theme";
import useMediaQuery from "../../helpers/useMediaQuery";
import { SecondaryStyledButton, SecondaryStyledLink } from "../Links";
import JSConfLogo from "../svgs/logo";
import { X, Menu as MenuIcon } from "react-feather";
const Description = lazy(() => import("../core/Description"));

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
  [theme.breakpoints.phoneOnly]: {
    padding: "32px 16px",
  },
}));

const StyledLinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  @media (max-width: ${ViewportSizes.Phone}px) {
    display: none;
  }
`;

const MobileStyledLinksContainer = styled.ul`
  width: fit-content;
  list-style: none;
  padding: 29px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
  flex-shrink: 0;
  z-index: 100;
`;

const StyledLink = styled.li<{ isActive: string }>`
  padding: 8px 16px;
  font-weight: 400;
  font-family: "Koulen";
  cursor: pointer;
  border: 0px solid ${({ theme }) => theme.colors.jsconfRed};
  color: ${({ isActive, theme }) =>
    isActive === "active" ? theme.colors.jsconfRed : theme.colors.jsconfBlack};
  @media (min-width: ${ViewportSizes.Phone}px) {
    border-width: ${({ isActive }) =>
      isActive === "active" ? "0px 0px 2px 0px" : "0px"};
    color: inherit;
  }

  &:hover {
    opacity: 0.5;
  }
`;

const StyledJSConfLogoWrapper = styled.a`
  height: 100%;
  max-height: 50px;
  aspect-ratio: 1/1;
  cursor: pointer;
`;

const StyledPortalWrapper = styled(motion.section)<{ height: number | string }>`
  width: 100vw;
  height: ${({ height }) => height};
  display: flex;
  position: fixed;
  z-index: 9999;
  top: -1000px;
  overflow: scroll;
  background-color: #f0e040;
  flex-direction: column;
  align-items: center;
  font-size: 32px;
  opacity: 0;

  li {
    text-align: center;
  }

  svg {
    align-self: flex-end;
  }
  @media (min-width: ${ViewportSizes.Phone}px) {
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
  @media (min-width: ${ViewportSizes.Phone}px) {
    display: none;
  }
`;

type MenuItem = {
  id: string;
  link: string;
  onClick?: never;
  isBlank: boolean;
  contenido: string;
};
type MenuItemOnClick = {
  id: string;
  link?: never;
  onClick: () => void;
  contenido: string;
};

type ButtonItem = {
  link: string;
  onClick?: never;
  contenido: string;
};
type ButtonItemOnClick = {
  link?: never;
  onClick: () => void;
  contenido: string;
};

export type NavBarProps = Simplify<{
  items: Simplify<MenuItem | MenuItemOnClick>[];
  description?: any;
  buttonsCollection?: Simplify<ButtonItem | ButtonItemOnClick>[];
}>;

const FakeButton = styled.div``;

const Menu = ({ items }: { items: NavBarProps["items"] }) => {
  const { pathname } = useRouter();
  return (
    <>
      {items?.map((item) => (
        <StyledLink
          key={item.id}
          isActive={item?.link === pathname ? "active" : ""}
        >
          {item.onClick ? (
            <FakeButton as="button" onClick={item.onClick}>
              {item.contenido}
            </FakeButton>
          ) : item.isBlank ? (
            <Link rel="preconnect" href={item.link!} passHref>
              <a target="_blank">{item.contenido}</a>
            </Link>
          ) : (
            <Link href={item.link!}>{item.contenido}</Link>
          )}
        </StyledLink>
      ))}
    </>
  );
};

const JSConfLogoWrapper = styled.div`
  height: fit-content;
`;

const MobileMenu = ({ items, description, buttonsCollection }: NavBarProps) => {
  const controls = useAnimation();
  const height = use100vh();
  const viewportHeight = height ? `${height}px` : "100vh";

  const isMobile = useMediaQuery(`(max-width: ${ViewportSizes.Phone}px)`);
  const [isOpen, setIsOpen] = React.useState(false);

  useLockBodyScroll(isOpen);
  React.useEffect(() => {
    const animate = async () => {
      if (isOpen) {
        await controls.start({
          zIndex: 9999,
          top: 3,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.35 },
        });
      } else {
        await controls.start({
          opacity: 0.7,
          scale: 0.5,
          top: -3000,
          transition: { duration: 0.35 },
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
            <Menu items={items} />
          </MobileStyledLinksContainer>
          <StyledBottom>
            <Suspense>
              <Description data={description} />
            </Suspense>
            {buttonsCollection?.map((button, index) => {
              if (button.onClick) {
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

const NavVariant = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.5 },
  },
};

const NavBar = (props: NavBarProps) => {
  return (
    <StyledNav variants={NavVariant} animate="animate" initial="initial">
      <AnimatePresence exitBeforeEnter>
        <StyledWrapper>
          <Link href="/" passHref legacyBehavior>
            <StyledJSConfLogoWrapper>
              <JSConfLogo />
            </StyledJSConfLogoWrapper>
          </Link>
          <StyledLinksContainer>
            <Menu {...props} />
          </StyledLinksContainer>
          <MobileMenu
            items={props.items}
            buttonsCollection={props.buttonsCollection}
            description={props.description}
          />
        </StyledWrapper>
      </AnimatePresence>
    </StyledNav>
  );
};

export default NavBar;
