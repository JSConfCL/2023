import styled from "@emotion/styled";
import { ViewportSizes } from "../../../styles/theme";
import { Entrada } from "../../helpers/API";
import ButtonPaymentMethodCollection from "../Collection/ButtonPaymentMethodCollection";
import {
  Container,
  SideContainer,
  LeftSide,
  RigthSide,
} from "../TicketSection/shared";
import { SectionTile } from "../TicketSection/Title";
import CartItem from "./CartItem";

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

const CartFooter = styled.div``;

const GenericBtn = styled.button`
  border: solid 1px #3182ce;
  color: #3182ce;
  font-weight: 700;
  border-radius: 5px;
  width: 100px;
  height: 50px;
  text-align: center;
  align-self: flex-end;
`;

const CartTotalizer = styled.div``;

const CartPd = styled.p`
  opacity: 0.8;
  font-style: italic;
  font-size: 0.9rem;
`;

const CartPaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${ViewportSizes.Desktop}px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CartContainer = ({ entradas }: { entradas: Entrada[] }) => {
  return (
    <Container>
      <SectionTile status="active" number="01." text="Obten tus tickets" />
      <SideContainer>
        <Wrapper>
          <LeftSide>
            <CartWrapper>
              <CartItemsWrapper>
                {entradas.map((entrada) => {
                  return (
                    <CartItem
                      key={entrada.id}
                      nombreEntrada="Estudiante"
                      precioEntrada={12990}
                      cantidad={50}
                      description={entrada.description}
                    />
                  );
                })}
              </CartItemsWrapper>
              <HR />
              <CartPd>
                * Durante la acreditación, portadores de tickets de estudiante
                deberán presentar certificado de alumno regular y cédula de
                identidad.
              </CartPd>
              <CartFooter>
                <TotalWrapper>
                  <CartTotalizer>
                    <p>Total</p>
                    <p>$15.990</p>
                  </CartTotalizer>
                  <GenericBtn>Continuar</GenericBtn>
                </TotalWrapper>
                <CartPaymentMethodContainer>
                  <h2>Seleccione tu metodo de pago:</h2>
                  <p>
                    Selecciona Stripe para pagar en dólares, MercadoPago para
                    pagar en pesos Chilenos.
                  </p>
                  <ButtonPaymentMethodCollection />
                  <GenericBtn>Pagar</GenericBtn>
                </CartPaymentMethodContainer>
              </CartFooter>
            </CartWrapper>
          </LeftSide>
          <RigthSide>
            {/* TODO/IDEA: Podemos crear una animación cool aca */}
          </RigthSide>
        </Wrapper>
      </SideContainer>
    </Container>
  );
};

export default CartContainer;
