import styled from "@emotion/styled";
import { B, H2 } from "../core/Typography";
import { ViewportSizes } from "../../../styles/theme";

const Ticket = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TicketControlWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

const TicketInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TicketTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

const TicketTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  text-transform: uppercase;
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
`;

const TicketHeader = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
const TicketAmountControl = styled.button`
  color: #000;
  background-color: #fff;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-self: center;
  cursor: pointer;
`;

const TicketAvailability = styled.p``;

const CartItem = ({
  description,
  cantidad,
  nombreEntrada,
  precioEntrada,
}: {
  description: string;
  nombreEntrada: string;
  precioEntrada: number;
  cantidad: number;
}) => {
  const noHayDisponibles = cantidad === 0;
  return (
    <Ticket>
      <TicketHeader>
        <TicketTitle>
          {nombreEntrada} —{" "}
          {Intl.NumberFormat("es-CL", {
            currency: "CLP",
            style: "currency",
          }).format(precioEntrada)}
        </TicketTitle>
        <TicketControlWrapper>
          <TicketAmountControl>
            <p>+</p>
          </TicketAmountControl>
          <TicketAmount>0</TicketAmount>
          <TicketAmountControl>
            <p>-</p>
          </TicketAmountControl>
        </TicketControlWrapper>
      </TicketHeader>
      <TicketInfoWrapper>
        <TicketAvailability>
          {noHayDisponibles ? `Agotadas` : `(${cantidad} Disponibles)`}
        </TicketAvailability>
        <TicketDescription>{description}</TicketDescription>
      </TicketInfoWrapper>
    </Ticket>
  );
};

export default CartItem;
