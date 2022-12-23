import styled from "@emotion/styled";
import { PrimitiveAtom, useAtom } from "jotai";
import { useCallback } from "react";
import { Minus, Plus } from "react-feather";

import { ViewportSizes } from "../../../styles/theme";
import { AgotadasSubtitle, SubTitle } from "../TicketSection/shared";

import { Entrada } from "./CartAtom";

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
  align-items: center;
`;

const TicketInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TicketDescription = styled.p`
  @media (max-width: ${ViewportSizes.Phone}px) {
  }
  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
  }
`;

const TicketAmount = styled.p`
  font-size: 1.5rem;
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 2rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    font-size: 2rem;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 2rem;
  }
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
  height: 26px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.8;
    background-color: #333;
    cursor: not-allowed;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    height: 32px;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    height: 32px;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    height: 32px;
  }
`;

const TicketAvailability = styled.p``;

const CartItem = ({
  entrada,
  isDisabled,
}: {
  entrada: PrimitiveAtom<Entrada>;
  isDisabled?: boolean;
}) => {
  const [ticket, setTicket] = useAtom(entrada);
  const { description, name, price, quantity, currentQuantity } = ticket;
  const isAvailable = quantity !== 0;
  const isMin = currentQuantity === 0;
  const isMax = currentQuantity === quantity;

  const goUp = useCallback(() => {
    if (isMax) {
      return;
    }
    setTicket({ ...ticket, currentQuantity: currentQuantity + 1 });
  }, [currentQuantity, isMax, setTicket, ticket]);
  const goDown = useCallback(() => {
    if (isMin) {
      return;
    }
    setTicket({ ...ticket, currentQuantity: currentQuantity - 1 });
  }, [currentQuantity, isMin, setTicket, ticket]);

  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const isDisabledDown = isDisabled || !isAvailable || isMin;
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const isDisabledUp = isDisabled || !isAvailable || isMax;

  return (
    <Ticket>
      <TicketHeader>
        <SubTitle>
          {name}
          {isAvailable
            ? ` — ` +
              Intl.NumberFormat("es-CL", {
                currency: "CLP",
                style: "currency",
              }).format(price)
            : null}
        </SubTitle>
        <TicketControlWrapper>
          {isAvailable ? (
            <>
              <TicketAmountControl disabled={isDisabledDown} onClick={goDown}>
                <Minus size={18} stroke="#000" />
              </TicketAmountControl>
              <TicketAmount>{currentQuantity}</TicketAmount>
              <TicketAmountControl disabled={isDisabledUp} onClick={goUp}>
                <Plus size={18} stroke="#000" />
              </TicketAmountControl>
            </>
          ) : (
            <AgotadasSubtitle> Agotadas </AgotadasSubtitle>
          )}
        </TicketControlWrapper>
      </TicketHeader>
      <TicketInfoWrapper>
        {isAvailable ? (
          <TicketAvailability>({quantity} Disponibles)</TicketAvailability>
        ) : null}
        <TicketDescription>{description}</TicketDescription>
      </TicketInfoWrapper>
    </Ticket>
  );
};

export default CartItem;
