import { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import { Document } from "@contentful/rich-text-types";
import { B, H2 } from "../core/Typography";
import { ViewportSizes } from "../../../styles/theme";
import QRCode from "react-qr-code";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1440px;
  min-height: calc(100vh - 100px);
  margin: 1.5rem 0;
`;
const StyledBlackWrapp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.elements.global.backgroundColor};
`;

const Title = styled.h1`
  line-height: 80px;
  text-align: center;
  @media (max-width: ${ViewportSizes.Phone}px) {
    font-size: 32px;
  }
  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 80px;
  }
`;

const TicketDescription = styled.div`
  background-color: #fff;
  width: 250px;
  border-radius: 20px;
  padding: 25px;
`;

const TicketHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const TicketMain = styled.div`
  margin-bottom: 1.5rem;
`;

const InfoTitle = styled.div`
  color: #000;
  border-bottom: 1px solid #a6a6a6;
  padding-bottom: 1rem;
  p {
    font-weight: 700;
    font-size: 1.3rem;
    &:nth-of-type(2) {
      color: #a6a6a6;
      font-weight: 300;
      font-size: 0.8rem;
      margin-top: 0.5rem;
    }
  }
`;

const Info = styled.div`
  color: #a6a6a6;
  font-size: 0.85rem;
  margin: 0.5rem 0;
  p {
    font-weight: 300;
    &:nth-of-type(2) {
      font-weight: 700;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TicketFooter = styled.div`
  padding: 1rem;
  border-top: 1px dashed #a6a6a6;
`;

const Grid = styled.div``;

const ShoppedTicket = () => {
  return (
    <>
      <Container>
        <StyledBlackWrapp>
          <Title>TUS TICKETS</Title>
          <Grid>
            <TicketDescription>
              <TicketHeader>
                <div></div>
                <InfoTitle>
                  <p>JSConf Chile</p>
                  <p>Muestra este ticket en la entrada</p>
                </InfoTitle>
              </TicketHeader>
              <TicketMain>
                <Info>
                  <p>Lugar</p>
                  <p>Santiago, Chile, Matucana 100</p>
                </Info>
                <InfoWrapper>
                  <Info>
                    <p>Fecha</p>
                    <p>3 y4 de Feb. 2023</p>
                  </Info>
                  <Info>
                    <p>Hora</p>
                    <p>8:00 AM</p>
                  </Info>
                </InfoWrapper>
                <Info>
                  <p>Tipo de Entrada</p>
                  <p>Estudiante</p>
                </Info>
              </TicketMain>
              <TicketFooter>
                <QRCode
                  size={250}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                    margin: "auto",
                  }}
                  value={"hola"}
                  viewBox={`0 0 256 256`}
                />
              </TicketFooter>
            </TicketDescription>
          </Grid>
        </StyledBlackWrapp>
      </Container>
    </>
  );
};

export default ShoppedTicket;
