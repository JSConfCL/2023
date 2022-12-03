import styled from "@emotion/styled";
import Atropos from "atropos/react";

import { jsconfTheme, ViewportSizes } from "../../../styles/theme";

const AtroposContainer = styled.div`
  overflow: hidden;
`;

const StyledAtropos = styled(Atropos)`
  width: 350px;
  height: 480px;
  margin: 0 auto 16px;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    width: 680px;
    height: 380px;
  }
`;

const TicketContainer = styled.div`
  width: 350px;
  height: 480px;
  margin: 0 auto 16px;
  background: #333;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    width: 680px;
    height: 380px;
  }

  &:before {
    display: inline-block;
    width: 45px;
    height: 45px;
    background: black;
    left: -20px;
    top: 185px;
    content: "";
    position: absolute;
    border-radius: 50%;
    border-top: 8px solid transparent;
    border-left: 8px solid transparent;
    transform: rotate(315deg);
    z-index: 1;
  }

  &:after {
    display: inline-block;
    width: 45px;
    height: 45px;
    background: black;
    right: -20px;
    top: 185px;
    content: "";
    position: absolute;
    border-radius: 50%;
    border-top: 8px solid transparent;
    border-left: 8px solid transparent;
    transform: rotate(315deg);
    z-index: 1;
  }
`;

const TicketInfo = styled.div`
  width: calc(100% - 32px);
  height: calc(100% - 32px);
  position: relative;
  top: 16px;
  left: 16px;
  border: 8px solid ${jsconfTheme.colors.jsconfYellow};

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    background-position: 435px 154px;
  }

  &:before {
    display: inline-block;
    width: 65px;
    height: 65px;
    background: #333;
    left: -40px;
    top: 150px;
    content: "";
    position: absolute;
    border-radius: 50%;
    border-bottom: 8px solid #f0e040;
    border-right: 8px solid #f0e040;
    border-top: 8px solid transparent;
    border-left: 8px solid transparent;
    transform: rotate(315deg);
  }

  &:after {
    display: inline-block;
    width: 65px;
    height: 65px;
    background: #333;
    right: -40px;
    top: 150px;
    content: "";
    position: absolute;
    border-radius: 50%;
    border-bottom: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #f0e040;
    border-left: 8px solid #f0e040;
    transform: rotate(315deg);
  }
`;

const TicketSection = styled.div`
  padding: 16px 16px 0;
  display: flex;
`;

const TicketHeader = styled.div`
  margin-top: 16px;
  padding: 0 16px;
  display: flex;
  align-items: center;
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
  z-index: 2;
`;

const StyledImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  min-width: 60px;
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

const StyledBackgroundImage = styled.div`
  position: absolute;
  height: 120%;
  width: 120%;
  bottom: -20%;
  right: -20%;
  background-image: url("/images/logo.svg");
  background-size: cover;
  background-position: 106px 304px;
  background-repeat: no-repeat;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    background-image: url("/images/logo.svg");
    background-size: cover;
    background-position: 450px 205px;
    background-repeat: no-repeat;
  }
`;

export const Ticket = ({
  userTicketId,
  userPhoto,
  userUsername,
  userName,
  ticketName,
  ticketType,
  ticketSeason,
  userTicketStatus,
}: {
  userTicketId: string;
  userPhoto: string | null;
  userUsername: string | null;
  userName: string | null;
  ticketName: string;
  ticketType: string;
  ticketSeason: string;
  userTicketStatus: string;
}) => (
  <AtroposContainer data-id={userTicketId}>
    <StyledAtropos
      highlight={false}
      activeOffset={40}
      shadowScale={1.5}
      shadowOffset={100}
    >
      <TicketContainer data-atropos-opacity="1;0.85" data-atropos-offset="-5">
        <StyledBackgroundImage data-atropos-offset="-10" />
        <TicketInfo data-atropos-offset="2">
          <StyledTr data-atropos-offset="2">
            <TicketHeader>
              <div style={{ height: "60px" }} data-atropos-offset="8">
                <StyledImg src={userPhoto ?? ""} />
              </div>
              <div style={{ paddingLeft: "16px" }}>
                <TicketUsername data-atropos-offset="5">
                  {userUsername ? "@" + userUsername : ""}
                </TicketUsername>
                <TicketName data-atropos-offset="5">
                  {userName ?? ""}
                </TicketName>
              </div>
            </TicketHeader>
            <StyledTd data-atropos-offset="5">
              <Title>JSConf Chile</Title>
              <SubTitle>Feb.03-04</SubTitle>
            </StyledTd>
            <TicketSection style={{ padding: 0 }}>
              <StyledLineContainer data-atropos-offset="3">
                <StyledLine data-atropos-offset="1">{ticketName}</StyledLine>
                <StyledLine data-atropos-offset="2">
                  {HumanTypes[ticketType] ?? ""}
                </StyledLine>
                <StyledLine data-atropos-offset="3">
                  {HumanSeasons[ticketSeason] ?? ""}
                </StyledLine>
                <StyledLine data-atropos-offset="4">
                  {HumanStatus[userTicketStatus] ?? ""}
                </StyledLine>
              </StyledLineContainer>
            </TicketSection>
          </StyledTr>
        </TicketInfo>
      </TicketContainer>
    </StyledAtropos>
  </AtroposContainer>
);
