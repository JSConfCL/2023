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
import NoTickets from "../src/Components/TicketSection/NoTickets";
import { accessTokenAtom, isAuthenticatedAtom } from "../src/helpers/auth";
import { useAtom, useAtomValue } from "jotai";
import CuentaCreada from "../src/Components/TicketSection/CuentaCreada";
import { NavBarProps } from "../src/Components/NavBar/NavBar";
import { parseNavBarData } from "../src/Components/NavBar/helper";

type Page = ParseQuery<TicketsQueryQuery["page"]>;
const TicketCart = dynamic(
  () => import("../src/Components/Cart/CartContainer")
);
const CreaTuCuenta = dynamic(
  () => import("../src/Components/TicketSection/CreaTuCuenta")
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
  padding-left: 2rem;
  padding-right: 2rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    padding: 0;
    gap: 32px;
  }
`;

const Section = styled.section`
  padding: 16px 0px;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
  width: 100vw;
`;

const StyledBlackWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const image =
  "https://images.ctfassets.net/1kfhsqlc8ewi/EAE7GIGq6Uk26KmdTC9T6/00be1cabc2d9b1dea800dbdb7e31c1bd/ticket.png";

const Tickets: NextPage<PageProps> = (props) => {
  const { isLoading, isError, data } = useQuery(["tickets"], fetchTickets);
  // TODO: Cambiar esta variable a estar basada en el estado del usuario
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);
  const [, setAccessToken] = useAtom(accessTokenAtom);

  const areThereTickets = false;
  // TODO: Usar isLoading y isError para mostrar UIs de error o loading.
  // TODO: Usar el array "data" para mostrar los tickets
  console.log({ data });
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
      <Suspense fallback={null}>
        <NavBar items={items} />
      </Suspense>
      <Seo {...props.seo} />
      <Container>
        <Section>
          {areThereTickets ? <TicketCart /> : <NoTickets imageUrl={image} />}
        </Section>
        <Section>
          {isLoggedIn ? (
            areThereTickets ? null : (
              <CuentaCreada />
            )
          ) : (
            <CreaTuCuenta />
          )}
        </Section>
      </Container>
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
