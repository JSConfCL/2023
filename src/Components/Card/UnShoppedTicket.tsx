import styled from "@emotion/styled";

import { ViewportSizes } from "../../../styles/theme";

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

const InfoWrapper = styled.div`
  line-height: 16px;
  font-size: 18px;
  text-align: center;
  @media (min-width: ${ViewportSizes.Desktop}px) {
    font-size: 40px;
    line-height: 80px;
  }
`;

const TertiaryButton = styled.button`
  border: solid 1px #3182ce;
  color: #3182ce;
  font-weight: 700;
  font-size: 18px;
  line-height: 23.4px;
  border-radius: 5px;
  text-align: center;
  margin-top: 1rem;
  text-align: center;
  margin-top: 1rem;
  @media (max-width: ${ViewportSizes.Phone}px) {
    width: 120px;
    height: 50px;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    width: 200px;
    height: 60px;
  }
`;

const UnShoppedTicket = () => {
  return (
    <>
      <Container>
        <StyledBlackWrapp>
          <Title>LO SENTIMOS 😢</Title>
          <InfoWrapper>
            <p>No se pudo completar la transacción.</p>
            <p>Favor inténtalo nuevamente.</p>
          </InfoWrapper>
          <TertiaryButton>Continuar</TertiaryButton>
        </StyledBlackWrapp>
      </Container>
    </>
  );
};

export default UnShoppedTicket;
