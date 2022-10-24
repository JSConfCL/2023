import { lazy, Suspense } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import {
  SponsorQueryDocument,
  SponsorQueryQuery,
  SponsorQueryQueryVariables,
} from "../src/graphql/sponsor.generated";
import { urlQlient } from "../src/graphql/urql";
import Seo from "../src/Components/Seo";
import { ParseQuery } from "../src/helpers/types";
import { ViewportSizes } from "../styles/theme";
import { fetchTickets } from "../src/helpers/API";

type Page = ParseQuery<SponsorQueryQuery["page"]>;
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

const Number = styled.span`
  /* identical to box height, or 100% */
  color: #f0e040;
`;
const Text = styled.span`
  color: white;
`;

const Title = styled.h2<{ status: "active" | "inactive" }>`
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  gap: 1rem;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  font-size: 20.914px;
  font-size: 2.5rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 5rem;
  }
  ${Number} {
    opacity: ${({ status }) => (status === "inactive" ? 0.5 : 1)};
    text-decoration: ${({ status }) =>
      status === "inactive" ? "line-through" : "none"};
  }
  ${Text} {
    opacity: ${({ status }) => (status === "inactive" ? 0.5 : 1)};
    text-decoration: ${({ status }) =>
      status === "inactive" ? "line-through" : "none"};
  }
`;

const TiicketPage: NextPage<PageProps> = (props) => {
  const { isLoading, isError, data } = useQuery(["tickets"], fetchTickets);
  // TODO: Cambiar esta variable a estar basada en el estado del usuario
  const isLoggedIn = false;
  // TODO: Usar isLoading y isError para mostrar UIs de error o loading.
  // TODO: Usar el array "data" para mostrar los tickets
  console.log({ data });
  return (
    <StyledBlackWrapp>
      <Suspense fallback={null}>
        <NavBar
          // TODO: Cambiar estas props por una nav-bar de verdad en contentful
          __typename="NavigationBar"
          buttonsCollection={{
            __typename: "NavigationBarButtonsCollection",
            items: [],
          }}
          description={{
            __typename: "NavigationBarDescription",
            json: "",
          }}
          linksCollection={{
            __typename: "NavigationBarLinksCollection",
            // TODO: Hacer q se muestre /settings solo cuando el usuario este logueado
            items: [
              {
                __typename: "LinkItem",
                contenido: "Settings",
                isBlank: false,
                link: "settings",
                sys: { id: "settings", __typename: "Sys" },
              },
            ],
          }}
        />
      </Suspense>
      <Seo {...props.seo} />
      <Container>
        <Section>
          <Title status="inactive">
            <Number>01.</Number>
            <Text>Obten tus tickets</Text>
          </Title>
        </Section>
        <Section>
          {/* TODO: Esta seccion **NO** se tiene q mostrar si el usuario esta logueado */}
          <Title status="active">
            <Number>02.</Number>
            <Text>Crea tu Cuenta</Text>
          </Title>
          {isLoggedIn ? <TicketCart /> : <CreaTuCuenta />}
        </Section>
      </Container>
    </StyledBlackWrapp>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<SponsorQueryQuery, SponsorQueryQueryVariables>(
      SponsorQueryDocument,
      {
        id: "1S7E2fm8TuIuOZY5jMAY8K",
        locale: "es-CL",
        isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
      }
    )
    .toPromise();

  const page = queryResults.data?.page as Page;
  if (!page) return { props: {} };
  const props: PageProps = {
    seo: page?.seo,
  };
  return {
    props,
  };
}

export default TiicketPage;
