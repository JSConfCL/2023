import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { ChevronDown, LogOut, Settings, Bookmark } from "react-feather";
import { me } from "../../helpers/API";
import { usePopper } from "react-popper";
import { keyframes } from "@emotion/react";
import { useClickAway } from "react-use";
import { transparentize } from "polished";
import Link from "next/link";
import { accessTokenAtom } from "../../helpers/auth";
import { useSetAtom } from "jotai";

const Container = styled.div`
  font-family: "Koulen";
`;

const StyledDropdownWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 0.5rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.elements.navBarDropDown.textColor};
`;

const StyledImageWrapper = styled.div<{ image: string | null }>`
  background-color: ${({ theme }) =>
    theme.elements.navBarDropDown.backgroundColor};
  border-width: 2px;
  border-radius: 50%;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme.elements.navBarDropDown.imageBorderColor};
  height: 2rem;
  width: 2rem;
  overflow: hidden;
  background-image: url(${({ image }) => image});
  background-size: cover;
`;

const StyledIconWrapper = styled.div<{ isClosed: boolean }>`
  transform: ${({ isClosed }) =>
    isClosed ? `rotate(0deg)` : `rotate(180deg)`};
  display: flex;
  transition-property: transform;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  color: ${({ theme }) => theme.elements.navBarDropDown.chevronColor};
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const DrowndownContainer = styled.div<{ isOpen: boolean }>`
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  width: 10rem;
  opacity: 0;
  border-style: solid;
  border-color: ${({ theme }) =>
    theme.elements.navBarDropDown.imageBorderColor};
  border-width: 2px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme.elements.navBarDropDown.backgroundColor};
  border-radius: 4px;
  animation: ${fadeIn} 250ms ease-in 75ms forwards;
  box-shadow: 2px 2px 8px 0px
    ${({ theme }) =>
      transparentize(0.7, theme.elements.navBarDropDown.shadowColor)};
  gap: 0.75rem;
  color: ${({ theme }) => theme.elements.navBarDropDown.textColor};
`;

const StyledUsername = styled.span`
  font-weight: bold;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledBlock = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) =>
    transparentize(0.8, theme.elements.navBarDropDown.imageBorderColor)};
`;

const StyledMenuElement = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const StyledAnchor = styled.a`
  cursor: pointer;
  line-height: 0.5rem;
`;

export const UserDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const setAccessToken = useSetAtom(accessTokenAtom);

  const { data } = useQuery(["me"], me);
  const containerRef = useRef(null);
  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: "bottom-end",
      strategy: "absolute",
      modifiers: [
        {
          name: "arrow",
          options: {
            padding: 5,
          },
        },
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );

  useClickAway(containerRef, () => {
    setIsOpen(false);
  });
  if (!data) {
    return null;
  }

  return (
    <Container ref={containerRef}>
      <StyledDropdownWrapper
        onClick={() => setIsOpen((prevValue) => !prevValue)}
        ref={referenceRef}
      >
        <StyledImageWrapper image={data.photo}></StyledImageWrapper>
        <StyledIconWrapper isClosed={!isOpen}>
          <ChevronDown />
        </StyledIconWrapper>
      </StyledDropdownWrapper>
      <DrowndownContainer
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
        isOpen={isOpen}
      >
        <StyledMenuElement>
          <StyledUsername>👋 @{data.username}</StyledUsername>
        </StyledMenuElement>
        <StyledMenuElement>
          <StyledBlock />
        </StyledMenuElement>
        <StyledMenuElement>
          <Bookmark size={14} />
          <Link href={"/mytickets"}>
            <StyledAnchor>Mis tickets</StyledAnchor>
          </Link>
        </StyledMenuElement>

        <StyledMenuElement>
          <StyledBlock />
        </StyledMenuElement>
        <StyledMenuElement>
          <Settings size={14} />
          <Link href={"/settings"}>
            <StyledAnchor>Configuracion</StyledAnchor>
          </Link>
        </StyledMenuElement>
        <StyledMenuElement onClick={() => setAccessToken(null)}>
          <LogOut size={14} />
          <StyledAnchor>Salir</StyledAnchor>
        </StyledMenuElement>
      </DrowndownContainer>
    </Container>
  );
};
