import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useFlags } from "flagsmith/react";

import { TicketsLayout } from "../src/Components/Layouts/TicketsLayout";
import { TicketsList } from "../src/Components/Ticket/TicketsList";

import { me, myTickets } from "../src/helpers/API";
import { ViewportSizes } from "../styles/theme";

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
