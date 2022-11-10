import styled from "@emotion/styled";
import { useAtomValue } from "jotai";
import { ViewportSizes } from "../../../styles/theme";
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

export const TicketSelection = () => {
  const ticketsAtom = useAtomValue(ticketsAtomsAtom);
  const githubAccountName = "";
  return (
    <TicketWrapper>
      {githubAccountName && <Paragraph>Hey @{githubAccountName}!</Paragraph>}
      <Paragraph>
        Está todo listo para que puedas comprar tus tickets para la JSConf Chile
        🎉. Tus tickets estarán asociados a tu cuenta de github.
      </Paragraph>
      <CartWrapper>
        <CartItemsWrapper>
          {ticketsAtom.map((entrada) => (
            <CartItem key={`${entrada}`} entrada={entrada} />
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
