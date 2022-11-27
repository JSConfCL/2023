import styled from "@emotion/styled";

import { jsconfTheme, ViewportSizes } from "../../../styles/theme";

import { UserType, OwnTicket } from "../../helpers/API/types";

const TicketContainer = styled.div`
  width: 350px;
  height: 480px;
  margin: 0 auto 16px;
  background: #333;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    width: 680px;
    height: 380px;
  }
`;

const TicketInfo = styled.div`
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  position: relative;
  top: 16px;
  left: 16px;
  border: 8px solid ${jsconfTheme.colors.jsconfYellow};
  background-image: url("/images/logo.svg");
  background-size: cover;
  background-position: 70px 255px;
  background-repeat: no-repeat;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    background-position: 435px 154px;
  }
`;

const TicketSection = styled.div`
  padding: 16px 16px 0;
  display: flex;
`;

const StyledTr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const StyledTd = styled.div`
  padding: 24px;
  flex: 0 0;
`;

const StyledImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const TicketUsername = styled.h2`
  color: ${jsconfTheme.colors.jsconfYellow};
`;

const TicketName = styled.h2`
  font-size: 24px;
  line-height: 24px;
`;

const Title = styled.h1`
  font-size: 48px;
  line-height: 48px;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 80px;
    line-height: 80px;
  }
`;

const SubTitle = styled.h2`
  font-size: 40px;
  line-height: 40px;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 56px;
    line-height: 56px;
  }
`;

const StyledLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    flex-direction: row;
  }
`;

const StyledLine = styled.div`
  border: 1px solid ${jsconfTheme.colors.jsconfYellow};
  text-align: center;
  padding: 8px 0;
  flex: 1 1 50%;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    flex: 1 1 25%;
    &:first-of-type {
      margin-left: 0;
    }
  }
`;

const HumanSeasons: { [K: string]: string } = {
  early_bird: "Compra Temprana",
  sale: "Venta",
};

const HumanTypes: { [K: string]: string } = {
  student: "Estudiante",
  adult: "Adulto",
};

const HumanStatus: { [K: string]: string } = {
  created: "Creado",
  not_paid: "Por Pagar",
  failed: "Fallido",
  eliminated: "Eliminado",
  reserved: "Reservado",
  not_redeemed: "Por Canjear",
  offered: "Ofrecido",
  redeemed: "Canjeado",
  // ToCheck
  on_sale: "A la venta",
};

export const Ticket = ({
  user,
  ticket,
}: {
  user: UserType;
  ticket: OwnTicket;
}) => (
  <TicketContainer>
    <TicketInfo>
      <StyledTr>
        <TicketSection>
          <div>
            <StyledImg src={user.photo ?? ""} />
          </div>
          <div style={{ paddingLeft: "16px" }}>
            <TicketUsername>
              {user.username ? "@" + user.username : ""}
            </TicketUsername>
            <TicketName>{user.name ?? ""}</TicketName>
          </div>
        </TicketSection>
        <StyledTd>
          <Title>JSConf Chile</Title>
          <SubTitle>Feb.03-04</SubTitle>
        </StyledTd>
        <TicketSection style={{ padding: 0 }}>
          <StyledLineContainer>
            <StyledLine>{ticket.ticket.name}</StyledLine>
            <StyledLine>{HumanTypes[ticket.ticket.type] ?? ""}</StyledLine>
            <StyledLine>{HumanSeasons[ticket.ticket.season] ?? ""}</StyledLine>
            <StyledLine>{HumanStatus[ticket.status] ?? ""}</StyledLine>
          </StyledLineContainer>
        </TicketSection>
      </StyledTr>
    </TicketInfo>
  </TicketContainer>
);
