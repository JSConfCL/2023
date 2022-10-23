import styled from "@emotion/styled";
import { B, H2 } from "../core/Typography";
import { ViewportSizes } from "../../../styles/theme";

const Ticket = styled.div`
  color: #fff;
  display: flex;
  @media (max-width: ${ViewportSizes.Phone}px) {
    margin: 1rem 0;
  }
  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    margin: 1.5rem 0 1.5rem 4rem;
  }
`;

const TicketWrapper = styled.div`
  width: 70%;
`;
const TicketControlWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-self: baseline;
`;

const TicketInfoWrapper = styled.div``;

const TicketTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

const TicketTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
`;

const TicketPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  padding-right: 0.5rem;
`;

const TicketDescription = styled.p`
  font-size: 1rem;

  @media (max-width: ${ViewportSizes.Phone}px) {
  }
  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    width: 330px;
  }
`;

const TicketAmount = styled.p`
  align-self: center;
  margin: 0 1.5rem;
`;

const TicketAmountControl = styled.button`
  color: #000;
  background-color: #fff;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const TicketAvailability = styled.p``;

const CartItem = () => {
  return (
    <>
      <Ticket>
        <TicketWrapper>
          <TicketTitle>Estudiante - $12.990 </TicketTitle>
          <TicketInfoWrapper>
            <TicketAvailability>(50 Disponibles)</TicketAvailability>
            <TicketDescription>
              Descripción – Descripción – Lorem xXXXXXxxx a;sdkjasdl kjasdklj
              aljsk a;sdkjasdl kjasdklj aljsk; asjkld ja;kldj;kl sd;kl kjasdklj
              aljsk; asjkld ja;kldj;kl sd;kl
            </TicketDescription>
          </TicketInfoWrapper>
        </TicketWrapper>
        <TicketControlWrapper>
          <TicketAmountControl>
            <p>+</p>
          </TicketAmountControl>
          <TicketAmount>1</TicketAmount>
          <TicketAmountControl>
            <p>-</p>
          </TicketAmountControl>
        </TicketControlWrapper>
      </Ticket>
    </>
  );
};

export default CartItem;
