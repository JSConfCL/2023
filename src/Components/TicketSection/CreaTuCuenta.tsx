import styled from "@emotion/styled";
import { CSSProperties } from "react";
import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import { API_URL } from "../../helpers/API";

import { SectionTile } from "./Title";
import { Container, Paragraph, SideContainer } from "./shared";

const LeftSide = styled.div`
  width: 100%;
  flex: 2;
`;

const RightSide = styled.div`
  width: 100%;
  flex: 1;
`;

const style: CSSProperties = {
  paddingTop: "2rem",
  paddingBottom: "2rem",
  display: "inline-flex",
  justifyContent: "center",
};

const CreaTuCuenta = () => {
  return (
    <Container>
      <SectionTile status="active" number="02." text="Crea tu Cuenta" />
      <SideContainer>
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
        <RightSide>
          <div>
            <GithubLoginButton
              style={style}
              onClick={() => {
                window.location.href = `${API_URL}/auth/github`;
              }}
              text="Ingresa con Github"
            />
          </div>
          <div>
            <GoogleLoginButton
              style={style}
              onClick={() => {
                window.location.href = `${API_URL}/auth/github`;
              }}
              text="Ingresa con Google"
            />
          </div>
        </RightSide>
      </SideContainer>
    </Container>
  );
};

export default CreaTuCuenta;
