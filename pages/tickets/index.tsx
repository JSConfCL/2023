import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";

import {
  availableTicketsAtom,
  ticketsAtom,
  Entrada,
} from "../../src/Components/Cart/CartAtom";
import { CartContainer } from "../../src/Components/Cart/CartContainer";
import { DefaultPageLayout } from "../../src/Components/Layouts/DefaultPagelayout";
import Seo from "../../src/Components/Seo";
import StickContainer from "../../src/Components/StickContainer";
import NoTickets from "../../src/Components/TicketSection/NoTickets";
import YesTicketsCreateAccount from "../../src/Components/TicketSection/YesTicketsCreateAccount";
import { PageContainer } from "../../src/Components/common/PageContainer";
import {
  TicketsQueryDocument,
  TicketsQueryQuery,
  TicketsQueryQueryVariables,
} from "../../src/graphql/tickets.generated";
import { urlQlient } from "../../src/graphql/urql";
import { fetchTickets } from "../../src/helpers/API";
import { isAuthenticatedAtom } from "../../src/helpers/auth";
import { ParseQuery } from "../../src/helpers/types";

type Page = ParseQuery<TicketsQueryQuery["page"]>;

const MEETUP = "meetup";
const WORKSHOP = "workshop";

export interface PageProps {
  seo: Page["seo"];
  flags: Page["flags"];
}

const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.jsconfRed};
  color: white;
  margin: 0 auto;
  width: 90%;
  font-size: 2rem;
  padding: 16px;
`;

const image =
  "https://images.ctfassets.net/1kfhsqlc8ewi/EAE7GIGq6Uk26KmdTC9T6/00be1cabc2d9b1dea800dbdb7e31c1bd/ticket.png";

const ticket = ["tickets"];
const TicketContent = () => {
  const isSaleEnabled = useAtomValue(availableTicketsAtom);
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);

  if (isSaleEnabled) {
    if (isLoggedIn) {
      return <CartContainer />;
    }
    return <YesTicketsCreateAccount imageUrl={image} />;
  } else {
    return <NoTickets imageUrl={image} />;
  }
};

export default function Tickets(props: PageProps) {
  const setAvailableTicketsAtom = useSetAtom(availableTicketsAtom);
  const setTicketsAtom = useSetAtom(ticketsAtom);
  const { isLoading } = useQuery(ticket, fetchTickets, {
    onSuccess: (data) => {
      const availableTickets: Entrada[] = [];
      const notAvailableTickets: Entrada[] = [];

      data.forEach((ticket) => {
        if (ticket.quantity) {
          availableTickets.push(ticket);
        } else {
          notAvailableTickets.push(ticket);
        }
      });

      const jsconfTickets = [
        ...availableTickets,
        ...notAvailableTickets,
      ].filter((ticket) => ![MEETUP, WORKSHOP].includes(ticket.type));

      setAvailableTicketsAtom(jsconfTickets.length > 0);
      setTicketsAtom(
        jsconfTickets.map((el) => ({ ...el, currentQuantity: 0 }))
      );
    },
  });
  return (
    <PageContainer>
      <Seo {...props.seo} />
      {!isLoading && <TicketContent />}
      {props.flags?.messages ? (
        <StickContainer>
          <Banner>
            {props.flags?.messages?.map((message: string) => (
              <div
                key={message}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            ))}
          </Banner>
        </StickContainer>
      ) : null}
    </PageContainer>
  );
}

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
    seo: page?.seo || null,
    flags: page?.flags || null,
  };

  return {
    props,
  };
}

Tickets.getLayout = DefaultPageLayout;
