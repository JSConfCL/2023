import { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { B, H2 } from "../core/Typography";
import { ViewportSizes } from "../../../styles/theme";
import ButtonPaymentMethodCollection from "../Collection/ButtonPaymentMethodCollection";

const CartItem = lazy(() => import("./CartItem"));

const CartItemsWrapper = styled.div``;

const Container = styled.div`
  @media (max-width: ${ViewportSizes.Phone}px) {
    margin: 1rem;
  }
  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
    max-width: 750px;
    padding: 0 65px !important;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    position: absolute;
    top: 75%;
    max-width: 750px;
  }
`;

const HR = styled.hr`
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
  margin: 1.5rem 0;

  @media (max-width: ${ViewportSizes.Phone}px){
    
  }
  @media (min-width: ${ViewportSizes.Desktop}px){
    margin: 1.5rem 0 0 4rem;
    width: 60%;
  }
}
`;

const CartFooter = styled.div`
  margin: 1rem 0;
`;

const GenericBtn = styled.button`
  border: solid 1px #3182ce;
  color: #3182ce;
  font-weight: 700;
  border-radius: 5px;
  width: 100px;
  height: 50px;
  text-align: center;
  margin-top: 1rem;
  align-self: flex-end;
`;

const CartTotalizer = styled.div``;

const CartPd = styled.p`
  color: #fff;
  font-style: italic;
  font-weight: 100;

  @media (max-width: ${ViewportSizes.Phone}px) {
    margin: 1rem 0;
  }
  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 1rem;
    margin: 1rem 1rem 1rem 4rem;
    line-height: 20px;
    width: 550px;
  }
`;

const CartPaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${ViewportSizes.Phone}px) {
    h2,
    p {
      margin: 0.5rem 0;
    }
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    h2,
    p {
      margin: 1rem 1rem 1rem 4rem;
    }
  }
`;

const TotalWrapper = styled.div`
  display: flex;

  @media (max-width: ${ViewportSizes.Phone}px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-bottom: 1.5rem;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const CartContainer = () => {
  return (
    <>
      <Container>
        <CartItemsWrapper>
          <CartItem />
        </CartItemsWrapper>
        <HR />
        <CartPd>
          * Durante la acreditación, portadores de tickets de estudiante deberán
          presentar certificado de alumno regular y cédula de identidad.
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
              Selecciona Stripe para pagar en dólares, MercadoPago para pagar en
              pesos Chilenos.
            </p>
            <ButtonPaymentMethodCollection />
            <GenericBtn>Pagar</GenericBtn>
          </CartPaymentMethodContainer>
        </CartFooter>
      </Container>
    </>
  );
};

export default CartContainer;
