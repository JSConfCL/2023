import styled from "@emotion/styled";
import { useAtomValue, useSetAtom } from "jotai";
import { ArrowRight } from "react-feather";

import { GenericBtn } from "../TicketSection/shared";

import {
  hasBoughtTicketsAtom,
  subNavigationAtom,
  totalPriceAtom,
} from "./CartAtom";

const CartTotalizer = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  gap: 2rem;
`;
const Title = styled.p`
  text-align: right;
`;

const Money = styled.p`
  text-align: right;
`;

export const Total = () => {
  const priceAtomValue = useAtomValue(totalPriceAtom);
  const continuarAtomValue = useSetAtom(subNavigationAtom);
  const hasBoughtTickets = useAtomValue(hasBoughtTicketsAtom);
  return (
    <TotalWrapper>
      <CartTotalizer>
        <Title>Total (CLP)</Title>
        <Money>
          {Intl.NumberFormat("es-CL", {
            currency: "CLP",
            style: "currency",
          }).format(priceAtomValue)}
        </Money>
      </CartTotalizer>
      <GenericBtn
        disabled={!hasBoughtTickets}
        onClick={() => continuarAtomValue("agreements")}
      >
        {hasBoughtTickets ? (
          <>
            Continuar <ArrowRight size={16} />
          </>
        ) : (
          "Selecciona Tickets"
        )}
      </GenericBtn>
    </TotalWrapper>
  );
};
