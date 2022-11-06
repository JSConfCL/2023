import { useQuery } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import {
  hasticketsAtom,
  ticketsAtom,
} from "../../src/Components/Cart/CartAtom";
import TicketCart from "../../src/Components/Cart/CartContainer";
import { TicketsLayout } from "../../src/Components/Layouts/TicketsLayout";
import Seo from "../../src/Components/Seo";
import NoTickets from "../../src/Components/TicketSection/NoTickets";
import YesTicketsCreateAccount from "../../src/Components/TicketSection/YesTicketsCreateAccount";
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

export type PageProps = {
  seo: Page["seo"];
};

const image =
  "https://images.ctfassets.net/1kfhsqlc8ewi/EAE7GIGq6Uk26KmdTC9T6/00be1cabc2d9b1dea800dbdb7e31c1bd/ticket.png";

const TicketContent = () => {
  const { data } = useQuery(["tickets"], fetchTickets);
  const setTicketsAtom = useSetAtom(ticketsAtom);
  useEffect(() => {
    if (data) {
      setTicketsAtom(data.map((el) => ({ ...el, currentQuantity: 0 })));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const areThereTickets = useAtomValue(hasticketsAtom);
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);
  if (areThereTickets) {
    if (isLoggedIn) {
      return <TicketCart />;
    }
    return <YesTicketsCreateAccount imageUrl={image} />;
  } else {
    return <NoTickets imageUrl={image} />;
  }
};
export default function Tickets(props: PageProps) {
  const { isLoading } = useQuery(["tickets"], fetchTickets);
  return (
    <>
      <Seo {...props.seo} />
      {!isLoading && <TicketContent />}
    </>
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
    seo: page?.seo,
  };

  return {
    props,
  };
}

Tickets.getLayout = TicketsLayout;