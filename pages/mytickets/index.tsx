import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";

import {
  DefaultPageLayout,
  InternalPageTitle,
} from "../../src/Components/Layouts/DefaultPagelayout";
import { TicketsList } from "../../src/Components/Ticket/TicketsList";
import { FakeTicketContainer } from "../../src/Components/Ticket/components";
import { PageContainer } from "../../src/Components/common/PageContainer";

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

Settings.getLayout = DefaultPageLayout;

export const config = {
  runtime: "experimental-edge",
};

export default Settings;
