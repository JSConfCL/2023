import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { PageContainer } from "../../src/Components/common/PageContainer";

import {
  DefaultPagelayout,
  InternalPageTitle,
} from "../../src/Components/Layouts/DefaultPagelayout";
import { FakeTicketContainer } from "../../src/Components/Ticket/Ticket";
import { TicketsList } from "../../src/Components/Ticket/TicketsList";

import { me, myTickets } from "../../src/helpers/API";

const MyTicketsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
`;

const Settings = () => {
  const { isLoading: isLoadingMe, data: user } = useQuery(["me"], me);
  const { isLoading: isLoadingTickets, data: tickets } = useQuery(
    ["mytickets"],
    myTickets
  );

  const isLoading = isLoadingMe || isLoadingTickets || !user;

  return (
    <PageContainer>
      <InternalPageTitle>Mis Tickets</InternalPageTitle>
      <MyTicketsWrapper>
        {isLoading ? (
          <FakeTicketContainer />
        ) : (
          <TicketsList user={user} tickets={tickets} />
        )}
      </MyTicketsWrapper>
    </PageContainer>
  );
};

Settings.getLayout = DefaultPagelayout;

export const config = {
  runtime: "experimental-edge",
};

export default Settings;