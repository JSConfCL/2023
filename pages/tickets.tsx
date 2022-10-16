import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import {
  TicketsQueryDocument,
  TicketsQueryQuery,
  TicketsQueryQueryVariables,
} from "../src/graphql/tickets.generated";
import { urlQlient } from "../src/graphql/urql";
import { ParseQuery } from "../src/helpers/types";
import Seo from "../src/Components/Seo";
import EventSchema from "../src/Components/schema/event";
import Hero from "../src/Components/sections/Hero";

const NavBar = dynamic(() => import("../src/Components/NavBar/NavBar"), {
  ssr: false,
});

const TicketBanner = lazy(() => import("../src/Components/Banner/Ticket"));
const TicketCard = lazy(() => import("../src/Components/Card/Ticket"));
const TicketCart = lazy(() => import("../src/Components/Cart/CartContainer"));

type Page = ParseQuery<TicketsQueryQuery["page"]>;

export type PageProps = {
  navData: Page["navBar"];
  whyItems: Page["whyBlockCollection"];
  heroData: Page["heroBlock"]; //

  //seo: Page["seo"];
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1440px;
  min-height: calc(100vh - 100px);
`;
const StyledBlackWrapp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const Ticket: NextPage<PageProps> = (props) => {
  const [login, setLogin] = useState(true);
  const [ticketAvailability, setTicketAvailability] = useState(true);
  const [buyedTicket, setBuyedTicket] = useState(false);

  return (
    <StyledBlackWrapp>
      <Container>
        <Suspense fallback={null}>
          <NavBar {...props.navData} />
        </Suspense>
        <Suspense fallback={null}>
          <TicketBanner {...props.heroData} />
        </Suspense>
        {/* {props.whyItems.items.map((elem, index) => {
       return(
          <Suspense key={`why-card-${index}`} fallback={null}>
               <TicketCard number={index + 1} {...elem} key={`why-card-${index}`} />
           </Suspense>)
         
        })} */}
        {props.whyItems.items.map((elem, index) => {
          const LogState = JSON.parse(
            elem.extendedDescription.json.content[0].content[0].value
          );
          console.log(LogState);
          if (
            login === LogState.loggedin &&
            ticketAvailability === LogState.ticket
          ) {
            return (
              <Suspense key={`why-card-${index}`} fallback={null}>
                <TicketCard
                  number={index + 1}
                  {...elem}
                  key={`why-card-${index}`}
                />
              </Suspense>
            );
          } else {
            return null;
          }
        })}
        <TicketCart />
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
    navData: page?.navBar,
    heroData: page?.heroBlock,
    whyItems: page?.whyBlockCollection,
  };

  return {
    props,
  };
}

export default Ticket;
