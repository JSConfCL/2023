import styled from "@emotion/styled";

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

const Bold = styled.span`
  font-weight: bold;
`;

const CuentaCreada = () => {
  const username = "@fforres";
  return (
    <Container>
      <SectionTile status="inactive" number="02." text="Crea tu Cuenta ✅" />
      <SideContainer>
        <LeftSide>
          <Paragraph>
            Hola <Bold>{username}!</Bold>
          </Paragraph>
          <br />
          <Paragraph>
            Ya tienes una cuenta creada! No hay nada más que debas hacer por
            ahora. Recibirás un correo cuando habilitemos la compra de tickets.
          </Paragraph>
          <br />
          <Paragraph>
            Recuerda que los tickets que compres estarán asociados a tu cuenta,
            y podrás reasignarlos y regalarlos sin problemas.
          </Paragraph>
        </LeftSide>
        <RightSide></RightSide>
      </SideContainer>
    </Container>
  );
};

export default CuentaCreada;
