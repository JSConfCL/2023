import styled from "@emotion/styled";
import Seo from "../../Components/Seo";
import React, { Suspense, useMemo } from "react";
import NavBar, { NavBarProps } from "../NavBar/NavBar";
import { ViewportSizes } from "../../../styles/theme";
import { useAtomValue, useSetAtom } from "jotai";
import { accessTokenAtom, isAuthenticatedAtom } from "../../helpers/auth";
import { ParseQuery } from "../../helpers/types";
import { TicketsQueryQuery } from "../../graphql/tickets.generated";
import { ReactElement } from "react-markdown/lib/react-markdown";

// const NavBar = dynamic(() => import("../NavBar/NavBar"), {
//   ssr: false,
// });

const StyledBlackWrapp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  display: flex;
  min-height: fit-content;
  align-items: center;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1440px;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    gap: 32px;
  }
`;

export const TicketsLayout = (page: ReactElement) => {
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);
  const setAccessToken = useSetAtom(accessTokenAtom);
  const items = useMemo(() => {
    if (isLoggedIn) {
      return [
        {
          contenido: "Settings",
          id: "Settings",
          isBlank: false,
          link: "/settings",
          onClick: undefined,
        },
        {
          contenido: "success",
          id: "success",
          isBlank: false,
          link: "/tickets/success",
          onClick: undefined,
        },
        {
          contenido: "waiting",
          id: "waiting",
          isBlank: false,
          link: "/tickets/waiting",
          onClick: undefined,
        },
        {
          contenido: "Log Out",
          id: "Log Out",
          onClick: () => {
            setAccessToken(null);
          },
        },
      ];
    }
    return [];
  }, [isLoggedIn, setAccessToken]);
  console.log({ items });
  return (
    <StyledBlackWrapp>
      <Suspense fallback={null}>
        <NavBar items={items} />
      </Suspense>
      <Container>{page}</Container>
    </StyledBlackWrapp>
  );
};
