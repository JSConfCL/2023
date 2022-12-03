import Head from "next/head";

import { DefaultPagelayout } from "../../../src/Components/Layouts/DefaultPagelayout";
import { Ticket } from "../../../src/Components/Ticket/Ticket";

import { PublicTicket } from "../../../src/helpers/API/types";

const TicketPage = ({ ticket }: { ticket: PublicTicket }) => {
  return (
    <div>
      <Head>
        <title>Ticket: ${ticket.username} | JSConf CL</title>
        <meta
          name="description"
          content="Mi Ticket para ir a la JSConf, unete a la primera "
        />

        <meta property="og:url" content="https://www.jsconf.cl/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Ticket: ${ticket.username} | JSConf CL`}
        />
        <meta
          property="og:description"
          content="Mi Ticket para ir a la JSConf, unete a la primera "
        />
        <meta
          property="og:image"
          content={`https://tickets-images-worker-localhost.jsconfcl.workers.dev/ticket/image/${ticket.ticketId}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="www.jsconf.cl" />
        <meta property="twitter:url" content="https://www.jsconf.cl/" />
        <meta
          name="twitter:title"
          content={`Ticket: ${ticket.username} | JSConf CL`}
        />
        <meta
          name="twitter:description"
          content="Mi Ticket para ir a la JSConf, unete a la primera "
        />
        <meta
          name="twitter:image"
          content={`https://tickets-images-worker-localhost.jsconfcl.workers.dev/ticket/image/${ticket.ticketId}`}
        />
      </Head>
      <Ticket
        userTicketId={ticket.ticketId}
        userTicketStatus={ticket.status}
        userPhoto={ticket?.userPhoto ?? ""}
        userUsername={ticket?.username ?? ""}
        userName={ticket?.name ?? ""}
        ticketName={ticket.ticketName}
        ticketType={ticket.ticketType}
        ticketSeason={ticket.ticketSeason}
      />
    </div>
  );
};

export async function getServerSideProps({ query }: { query: { id: string } }) {
  const { id } = query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tickets/qr/info/user_ticket_${id}`
  );
  const ticket = await res.json();

  console.log({ status: "PROPS", ticket });
  return { props: { ticket } };
}

TicketPage.getLayout = DefaultPagelayout;

export default TicketPage;
