import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useFlags } from "flagsmith/react";

import { TicketsLayout } from "../src/Components/Layouts/TicketsLayout";
import { Ticket } from "../src/Components/Ticket/Ticket";

import { me, myTickets } from "../src/helpers/API";
import { ViewportSizes } from "../styles/theme";

import { UserType, OwnTicket } from "../src/helpers/API/types";

const PageContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  display: inline-block;
  line-height: 1;
  transition-duration: 250ms;
  transition-property: font-size;
  font-size: 2.5rem;
  margin-bottom: 16px;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 2.2rem;
    margin-bottom: 32px;
  }
`;

const Loading = () => <div>Loading</div>;
const TicketsList = ({
  user,
  tickets,
}: {
  user: UserType;
  tickets?: OwnTicket[];
  shareEnabled?: boolean;
}) => {
  if (!tickets?.length) {
    return <div>No hay tickets.</div>;
  }

  return (
    <div>
      {tickets?.map((ticket: OwnTicket) => (
        <Ticket
          key={ticket.id}
          userTicketId={ticket.id}
          userTicketStatus={ticket.status}
          userPhoto={user.photo}
          userUsername={user.username}
          userName={user.name}
          ticketName={ticket.ticket.name}
          ticketType={ticket.ticket.type}
          ticketSeason={ticket.ticket.season}
          fadeIn
        />
      ))}
    </div>
  );
};

const Settings = () => {
  const { isLoading: isLoadingMe, data: user } = useQuery(["me"], me);
  const { isLoading: isLoadingTickets, data: tickets } = useQuery(
    ["mytickets"],
    myTickets
  );
  const { ticket_shared_enabled: ticketShareEnabled } = useFlags([
    "ticket_shared_enabled",
  ]);

  const isLoading = isLoadingMe || isLoadingTickets || !user;

  return (
    <PageContainer>
      <PageTitle>Mis Tickets</PageTitle>
      {isLoading ? (
        <Loading />
      ) : (
        <TicketsList
          user={user}
          tickets={tickets}
          shareEnabled={Boolean(ticketShareEnabled?.value)}
        />
      )}
    </PageContainer>
  );
};

Settings.getLayout = TicketsLayout;

export default Settings;
