import styled from "@emotion/styled";
import Atropos from "atropos/react";

import { jsconfTheme, ViewportSizes } from "../../../styles/theme";

import { UserType, OwnTicket } from "../../helpers/API/types";

const StyledAtropos = styled(Atropos)`
  width: 350px;
  height: 480px;
  margin: 0 auto 16px;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    width: 680px;
    height: 380px;
  }

  .atropos {
    position: relative;
    display: block;
    perspective: 1200px;
    transform: translate3d(0, 0, 0);
  }
  .atropos-rotate-scroll-x,
  .atropos-rotate-scroll-y,
  .atropos-rotate-touch {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .atropos-rotate-touch-scroll-y {
    touch-action: pan-y;
  }
  .atropos-rotate-touch-scroll-x {
    touch-action: pan-x;
  }
  .atropos-rotate-touch {
    touch-action: none;
  }
  .atropos-rotate,
  .atropos-scale {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition-property: transform;
    display: block;
  }
  .atropos-highlight,
  .atropos-shadow {
    position: absolute;
    pointer-events: none;
    transition-property: transform, opacity;
    display: block;
    opacity: 0;
  }
  .atropos-shadow {
    z-index: -1;
    background: #000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    filter: blur(30px);
  }
  .atropos-highlight {
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-image: radial-gradient(
      circle at 50%,
      rgba(255, 255, 255, 0.25),
      transparent 50%
    );
    z-index: 0;
  }
  .atropos-rotate {
    position: relative;
  }
  .atropos-inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 0);
    display: block;
  }
  .atropos-active {
    z-index: 1;
  }
  .atropos-active .atropos-shadow {
    opacity: 1 !important;
  }
  [data-atropos-offset] {
    transition-property: transform;
  }
  [data-atropos-opacity] {
    transition-property: opacity;
  }
  [data-atropos-offset][data-atropos-opacity] {
    transition-property: transform, opacity;
  }
`;
const TicketContainer = styled.div`
  width: 350px;
  height: 480px;
  margin: 0 auto 16px;
  background: #333;
  position: relative;
  cursor: pointer;

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

const StyledBackgroundImage = styled.div`
  position: absolute;
  height: 120%;
  width: 120%;
  bottom: -20%;
  right: -20%;
  background-image: url("/images/logo.svg");
  background-size: cover;
  background-position: 450px 205px;
  background-repeat: no-repeat;
`;

export const Ticket = ({
  user,
  ticket,
}: {
  user: UserType;
  ticket: OwnTicket;
}) => (
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
          <TicketSection>
            <div data-atropos-offset="8">
              <StyledImg src={user.photo ?? ""} />
            </div>
            <div style={{ paddingLeft: "16px" }}>
              <TicketUsername data-atropos-offset="5">
                {user.username ? "@" + user.username : ""}
              </TicketUsername>
              <TicketName data-atropos-offset="5">{user.name ?? ""}</TicketName>
            </div>
          </TicketSection>
          <StyledTd data-atropos-offset="5">
            <Title>JSConf Chile</Title>
            <SubTitle>Feb.03-04</SubTitle>
          </StyledTd>
          <TicketSection style={{ padding: 0 }}>
            <StyledLineContainer data-atropos-offset="3">
              <StyledLine data-atropos-offset="1">
                {ticket.ticket.name}
              </StyledLine>
              <StyledLine data-atropos-offset="2">
                {HumanTypes[ticket.ticket.type] ?? ""}
              </StyledLine>
              <StyledLine data-atropos-offset="3">
                {HumanSeasons[ticket.ticket.season] ?? ""}
              </StyledLine>
              <StyledLine data-atropos-offset="4">
                {HumanStatus[ticket.status] ?? ""}
              </StyledLine>
            </StyledLineContainer>
          </TicketSection>
        </StyledTr>
      </TicketInfo>
    </TicketContainer>
  </StyledAtropos>
);
