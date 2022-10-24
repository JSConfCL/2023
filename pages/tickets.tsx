import { Suspense, useMemo } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import {
  TicketsQueryDocument,
  TicketsQueryQuery,
  TicketsQueryQueryVariables,
} from "../src/graphql/tickets.generated";
import { urlQlient } from "../src/graphql/urql";
import Seo from "../src/Components/Seo";
import { ParseQuery } from "../src/helpers/types";
import { ViewportSizes } from "../styles/theme";
import { fetchTickets } from "../src/helpers/API";
import { accessTokenAtom, isAuthenticatedAtom } from "../src/helpers/auth";
import { useAtom, useAtomValue } from "jotai";
import { NavBarProps } from "../src/Components/NavBar/NavBar";
import { parseNavBarData } from "../src/Components/NavBar/helper";

type Page = ParseQuery<TicketsQueryQuery["page"]>;
const TicketCart = dynamic(
  () => import("../src/Components/Cart/CartContainer")
);
const CreaTuCuenta = dynamic(
  () => import("../src/Components/TicketSection/CreaTuCuenta")
);
const CuentaCreada = dynamic(
  () => import("../src/Components/TicketSection/CuentaCreada")
);
const NoTickets = dynamic(
  () => import("../src/Components/TicketSection/NoTickets")
);
const YesTicketsCreateAccount = dynamic(
  () => import("../src/Components/TicketSection/YesTicketsCreateAccount")
);
const NavBar = dynamic(() => import("../src/Components/NavBar/NavBar"), {
  ssr: false,
});

export type PageProps = {
  navData: NavBarProps;
  whyItems: Page["whyBlockCollection"];
  heroData: Page["heroBlock"]; //
  seo: Page["seo"];
};

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

const StyledBlackWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const image =
  "https://images.ctfassets.net/1kfhsqlc8ewi/EAE7GIGq6Uk26KmdTC9T6/00be1cabc2d9b1dea800dbdb7e31c1bd/ticket.png";

const TicketContent = () => {
  const { data } = useQuery(["tickets"], fetchTickets);
  const areThereTickets = data && data.length >= 0;
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);
  console.log("data", data);
  return (
    <>
      <Suspense fallback={null}>
        {areThereTickets && <TicketCart entradas={data} />}
        {areThereTickets ? (
          isLoggedIn ? (
            <TicketCart entradas={data} />
          ) : (
            <YesTicketsCreateAccount imageUrl={image} />
          )
        ) : (
          <NoTickets imageUrl={image} />
        )}
        {areThereTickets ? (
          isLoggedIn ? null : (
            <CreaTuCuenta />
          )
        ) : (
          <CuentaCreada />
        )}
      </Suspense>
    </>
  );
};
const Tickets: NextPage<PageProps> = (props) => {
  const { isLoading } = useQuery(["tickets"], fetchTickets);
  // TODO: Cambiar esta variable a estar basada en el estado del usuario
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);
  const [, setAccessToken] = useAtom(accessTokenAtom);

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
  return (
    <StyledBlackWrapp>
      <Seo {...props.seo} />
      <Suspense fallback={null}>
        <NavBar items={items} />
      </Suspense>
      <Container>{!isLoading && <TicketContent />}</Container>
    </StyledBlackWrapp>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<TicketsQueryQuery, TicketsQueryQueryVariables>(
      TicketsQueryDocument,
      {
        id: "2izkVq9L0r7BEeoZbEAEsC",
        locale: "es-CL",
        isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
      }
    )
    .toPromise();

  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    seo: page?.seo,
    navData: parseNavBarData(page?.navBar),
    heroData: page?.heroBlock,
    whyItems: page?.whyBlockCollection,
  };

  return {
    props,
  };
}

export default Tickets;
