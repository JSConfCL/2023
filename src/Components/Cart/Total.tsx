import styled from "@emotion/styled";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React from "react";
import { ViewportSizes } from "../../../styles/theme";
import { GenericBtn } from "../TicketSection/shared";
import {
  hasBoughtTicketsAtom,
  subNavigationAtom,
  totalPriceAtom,
} from "./CartAtom";
import { ArrowRight } from "react-feather";

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

  @media (min-width: ${ViewportSizes.Desktop}px) {
    flex-direction: column;
    align-items: flex-end;
  }
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
      {
        <GenericBtn
          disabled={!hasBoughtTickets}
          onClick={() => continuarAtomValue("payment_selection")}
        >
          {hasBoughtTickets ? (
            <>
              Continuar <ArrowRight size={16} />
            </>
          ) : (
            "Selecciona Tickets"
          )}
        </GenericBtn>
      }
      <CartTotalizer>
        <Title>Total (CLP)</Title>
        <Money>
          {Intl.NumberFormat("es-CL", {
            currency: "CLP",
            style: "currency",
          }).format(priceAtomValue)}
        </Money>
      </CartTotalizer>
    </TotalWrapper>
  );
};
