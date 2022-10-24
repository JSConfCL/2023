import styled from "@emotion/styled";
import { CSSProperties, lazy } from "react";
import { ViewportSizes } from "../../../styles/theme";
import ButtonPaymentMethodCollection from "../Collection/ButtonPaymentMethodCollection";
import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { Paragraph } from "./shared";
import { API_URL } from "../../helpers/API";

const CartItemsWrapper = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: ${ViewportSizes.Phone}px) {
    gap: 1rem;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    flex-direction: row;
    gap: 4rem;
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    flex-direction: row;
    gap: 8rem;
  }
`;

const HR = styled.hr`
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
  margin: 1.5rem 0;

  @media (min-width: ${ViewportSizes.Desktop}px) {
    margin: 1.5rem 0 0 4rem;
    width: 60%;
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
      margin: 0.5rem 1rem 0.5rem 4rem;
    }
  }
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (min-width: ${ViewportSizes.Desktop}px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  flex: 2;
`;

const RigthSide = styled.div`
  width: 100%;
  flex: 1;
`;

const CartContainer = () => {
  return (
    <>
      <Container>
        <LeftSide>
          <Paragraph>
            Podrás recibir correos cuando los tickets estén disponibles,
            preventas y anuncios de la Conferencia.
          </Paragraph>
          <br />
          <Paragraph>
            Además, los tickets que compres estarán asociados a tu cuenta.
            Podrás reasignarlos y regalarlos sin problemas.
          </Paragraph>
        </LeftSide>
        <RigthSide>
          <div>
            <GithubLoginButton
              style={
                {
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  display: "inline-flex",
                  justifyContent: "center",
                } as CSSProperties
              }
              onClick={() => {
                window.location.href = `${API_URL}/auth/github`;
              }}
              text="Ingresa con Github"
            />
          </div>
          {/* TODO: Habilitar cuando tengamos login con gmail listo */}
          {/* <GoogleLoginButton></GoogleLoginButton> */}
        </RigthSide>
      </Container>
    </>
  );
};

export default CartContainer;
