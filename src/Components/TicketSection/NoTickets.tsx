import styled from "@emotion/styled";
import { ViewportSizes } from "../../../styles/theme";
import Image from "../core/Image";
import { Container, Paragraph, SideContainer } from "./shared";
import { SectionTile } from "./Title";

const LeftSide = styled.div`
  width: 100%;
  flex: 2;
`;

const RigthSide = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  transition: width 250ms ease-in-out, height 250ms ease-in-out;
  position: relative;
  height: 250px;
  width: 200px;
  transform: translateY(0px);
  overflow: hidden;

  @media (min-width: ${ViewportSizes.Phone}px) {
    transform: translateY(0);
    overflow: hidden;
    width: 300px;
    height: 400px;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    transform: translateY(-150px);
    overflow: visible;
    height: 320px;
    width: 290px;
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    transform: translateY(-150px);
    overflow: visible;
    width: 350px;
    height: 350px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.black};
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const NoTickets = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Container>
      <SectionTile status="inactive" number="01." text="Obten tus tickets" />
      <SideContainer>
        <LeftSide>
          <Paragraph>
            Aún no tenemos tickets a la venta! 😢 (Pero falta poco!).
          </Paragraph>
          <br />
          <Paragraph>
            Mientras tanto, puedes crear tu cuenta JSConf Chile, así estarás
            list@ para cuando salgan a la venta.
          </Paragraph>
          <br />
          <Paragraph>
            Mantente atento a nuestras redes sociales, estaremos avisando de
            promociones, preventas y fechas de lanzamiento!
          </Paragraph>
        </LeftSide>
        <RigthSide>
          <ImageWrapper>
            <ImageContainer>
              <Image mobile={imageUrl} alt={"Un ticket de la JSCconf"} />
              <Shadow />
            </ImageContainer>
          </ImageWrapper>
        </RigthSide>
      </SideContainer>
    </Container>
  );
};

export default NoTickets;
