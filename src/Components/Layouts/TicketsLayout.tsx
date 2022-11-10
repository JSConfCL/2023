import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { Suspense, useMemo } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { ViewportSizes } from "../../../styles/theme";
import { accessTokenAtom, isAuthenticatedAtom } from "../../helpers/auth";
import { flagsAtom } from "../../helpers/featureFlags";
import NavBar from "../NavBar/NavBar";

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
  gap: 1rem;
  width: 100vw;
  /* min-height: min(90vh, 500px); */
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
  const { replace } = useRouter();
  const setAccessToken = useSetAtom(accessTokenAtom);
  const { "ticket-page-enabled": ticketPageEnabled } = useAtomValue(flagsAtom);
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
  if (ticketPageEnabled === false) {
    replace("/");
    return null;
  }
  return (
    <StyledBlackWrapp>
      <Suspense fallback={null}>
        <NavBar items={items} />
      </Suspense>
      <Container>{page}</Container>
    </StyledBlackWrapp>
  );
};
