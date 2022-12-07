import styled from "@emotion/styled";
import { useAtomValue } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { useCallback } from "react";
import { Paragraph } from "../TicketSection/shared";
import { ticketsAtomsAtom } from "./CartAtom";
import CartItem from "./CartItem";
import { Total } from "./Total";
const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const HR = styled.hr`
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
`;

const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CartPd = styled.p`
  opacity: 0.8;
  font-style: italic;
  font-size: 0.9rem;
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TicketSelection = ({
  isDisabled,
  githubAccountName,
}: {
  isDisabled?: boolean;
  githubAccountName?: string;
}) => {
  const ticketsAtom = useAtomValue(ticketsAtomsAtom);
  const areThereTickets = useAtomCallback(
    useCallback((get) => {
      let quantityOfTickets = 0;
      const ticketsAtoms = get(ticketsAtomsAtom);
      ticketsAtoms.forEach((entradaAtom) => {
        const { quantity } = get(entradaAtom);
        quantityOfTickets += quantity;
      });
      return quantityOfTickets !== 0;
    }, [])
  );

  return (
    <TicketWrapper>
      {githubAccountName && <Paragraph>Hey @{githubAccountName}!</Paragraph>}
      <Paragraph>
        {areThereTickets() ? (
          <>
            Está todo listo para que puedas comprar tus tickets para la JSConf
            Chile 🎉. Tus tickets estarán asociados a tu cuenta de github.
          </>
        ) : (
          <>
            Las entradas están agotadas! ... por ahora 😄. Lanzaremos un nuevo
            batch de entradas el día 21 de Diciembre! <br /> Mientras tanto,
            mantente atento a nuestras redes sociales, durante los próximos
            meses tendremos anuncios de la JSConf, (y regalaremos más de alguna
            entrada!)
          </>
        )}
      </Paragraph>
      <CartWrapper>
        <CartItemsWrapper>
          {ticketsAtom.map((entrada) => (
            <CartItem
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              key={`${entrada}`}
              entrada={entrada}
              isDisabled={isDisabled}
            />
          ))}
        </CartItemsWrapper>
        <HR />
        <CartPd>
          * Importante: Los tickets {`"Estudiante"`} son precisamente para
          estudiantes. <br /> Durante la acreditación, los portadores de tickets
          de estudiante deberán presentar certificado de alumno regular y/o
          cédula de identidad.
        </CartPd>
        <CartFooter>
          <Total />
        </CartFooter>
      </CartWrapper>
    </TicketWrapper>
  );
};
