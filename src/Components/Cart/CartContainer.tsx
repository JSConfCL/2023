import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";
import { splitAtom } from "jotai/utils";
import { ViewportSizes } from "../../../styles/theme";
import {
  Container,
  LeftSide,
  Paragraph,
  RigthSide,
  SideContainer,
} from "../TicketSection/shared";
import { SectionTile } from "../TicketSection/Title";
import { Agreements } from "./Agreements";
import {
  cartTitleAtom,
  subNavigationAtom,
  ticketsAtom,
  ticketsAtomsAtom,
} from "./CartAtom";
import CartItem from "./CartItem";
import PaymentMethod from "./PaymentMethod";
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
  @media (min-width: ${ViewportSizes.Desktop}px) {
  }
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

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const CartContainer = () => {
  const ticketsAtom = useAtomValue(ticketsAtomsAtom);
  const subNavigationAtomValue = useAtomValue(subNavigationAtom);
  const [cartTileAtomNumber, cartTileAtomText] = useAtomValue(cartTitleAtom);
  const githubAccountName = "";
  return (
    <>
      <SectionTile
        status="active"
        number={cartTileAtomNumber}
        text={cartTileAtomText}
      />
      <AnimatePresence mode="popLayout" initial={false}>
        {subNavigationAtomValue === "ticket_selection" && (
          <Wrapper
            key={subNavigationAtomValue}
            layout="position"
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 50 }}
          >
            <SideContainer>
              <LeftSide>
                {githubAccountName && (
                  <Paragraph>Hey @{githubAccountName}!</Paragraph>
                )}
                <Paragraph>
                  Está todo listo para que puedas comprar tus tickets para la
                  JSConf Chile 🎉. Tus tickets estarán asociados a tu cuenta de
                  github.
                </Paragraph>
                <CartWrapper>
                  <CartItemsWrapper>
                    {ticketsAtom.map((entrada) => (
                      <CartItem key={`${entrada}`} entrada={entrada} />
                    ))}
                  </CartItemsWrapper>
                  <HR />
                  <CartPd>
                    * Importante: Los tickets {`"Estudiante"`} son precisamente
                    para estudiantes. <br /> Durante la acreditación, los
                    portadores de tickets de estudiante deberán presentar
                    certificado de alumno regular y/o cédula de identidad.
                  </CartPd>
                  <CartFooter>
                    <Total />
                  </CartFooter>
                </CartWrapper>
              </LeftSide>
              <RigthSide></RigthSide>
            </SideContainer>
          </Wrapper>
        )}
        {subNavigationAtomValue === "agreements" && (
          <Wrapper
            key={subNavigationAtomValue}
            layout="position"
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 50 }}
          >
            <SideContainer>
              <LeftSide>
                <Agreements />
              </LeftSide>
              <RigthSide></RigthSide>
            </SideContainer>
          </Wrapper>
        )}
        {subNavigationAtomValue === "payment_selection" && (
          <Wrapper
            key={subNavigationAtomValue}
            layout="position"
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 50 }}
          >
            <SideContainer>
              <LeftSide>
                <PaymentMethod />
              </LeftSide>
              <RigthSide></RigthSide>
            </SideContainer>
          </Wrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartContainer;
