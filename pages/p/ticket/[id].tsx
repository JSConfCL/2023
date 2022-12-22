import styled from "@emotion/styled";
import { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";

import { DefaultPageLayout } from "../../../src/Components/Layouts/DefaultPagelayout";
import { PublicTicket } from "../../../src/helpers/API/types";

const Ticket = dynamic(
  async () => {
    const { Ticket } = await import("../../../src/Components/Ticket/Ticket");
    return { default: Ticket };
  },
  {
    ssr: false,
  }
);

export const config = {
  runtime: "experimental-edge",
};

const StyledSpacer = styled.div(({ theme }) => ({
  height: 100,
}));

const ticketApiUrl = process.env.NEXT_PUBLIC_WORKER_IMAGE_API!;
const TicketPage = ({
  ticket,
  cleanedId,
}: {
  ticket: PublicTicket;
  cleanedId: string;
}) => {
  return (
    <div>
      <Head>
        <title>{ticket.username} 💛 JSConf Chile</title>
        <meta
          name="description"
          content="Mi Ticket para la JSConf Chile. Obtén tu ticket acá!"
        />

        <meta
          property="og:url"
          content={`https://jsconf.cl/p/ticket/${cleanedId}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${ticket.username} 💛 JSConf Chile`}
        />
        <meta
          property="og:description"
          content="Mi Ticket para la JSConf Chile. Obtén tu ticket acá!"
        />
        <meta
          property="og:image"
          content={`${ticketApiUrl}/ticket/image/${ticket.ticketId}`}
        />
        <meta name="twitter:site" content="@jsconfcl" />
        <meta name="twitter:creator" content="@jsconfcl" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jsconf.cl" />
        <meta
          property="twitter:url"
          content={`https://jsconf.cl/p/ticket/${cleanedId}`}
        />
        <meta
          name="twitter:title"
          content={`${ticket.username} 💛 JSConf Chile`}
        />
        <meta
          name="twitter:description"
          content="Mi Ticket para la JSConf Chile. Obtén tu ticket acá!"
        />
        <meta
          name="twitter:image"
          content={`${ticketApiUrl}/ticket/image/${ticket.ticketId}`}
        />
      </Head>
      <StyledSpacer />
      <Suspense>
        <Ticket
          userTicketId={ticket.ticketId}
          userTicketStatus={ticket.status}
          userPhoto={ticket?.userPhoto ?? ""}
          userUsername={ticket?.username ?? ""}
          userName={ticket?.name ?? ""}
          ticketName={ticket.ticketName}
          ticketType={ticket.ticketType}
          ticketSeason={ticket.ticketSeason}
          fadeIn
          showGetTicket
        />
      </Suspense>
    </div>
  );
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { id } = query;
  if (!id) {
    throw new Error(`No ID present`);
  }
  if (Array.isArray(id)) {
    throw new Error(`ID should be a singl string, not an array`);
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tickets/qr/info/user_ticket_${id}`
  );
  const ticket = await response.json();
  if (ticket.statusCode === 500) {
    throw new Error(`Could not find ticket with id ${id}`);
  }
  return { props: { ticket, cleanedId: id } };
};

TicketPage.getLayout = DefaultPageLayout;
export default TicketPage;
