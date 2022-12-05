import Head from "next/head";

export const PublicTicketPageMetaTags = ({
  ticketApiUrl,
  ticketId,
}: {
  ticketApiUrl: string;
  ticketId: string;
}) => {
  return (
    <Head>
      <meta
        name="description"
        content="Mi Ticket para la JSConf Chile. Obtén tu ticket acá!"
      />
      <meta property="og:url" content="https://jsconf.cl/tickets" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Mi Ticket para la JSConf Chile. Obtén tu ticket acá!"
      />
      <meta
        property="og:image"
        content={`${ticketApiUrl}/ticket/image/${ticketId}`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="jsconf.cl" />
      <meta property="twitter:url" content="https://jsconf.cl/tickets" />
      <meta
        name="twitter:description"
        content="Mi Ticket para la JSConf Chile. Obtén tu ticket acá!"
      />
      <meta
        name="twitter:image"
        content={`${ticketApiUrl}/ticket/image/${ticketId}`}
      />
    </Head>
  );
};
