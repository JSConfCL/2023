import Image from "../core/Image";
import {
  Container,
  Paragraph,
  SideContainer,
  LeftSide,
  RigthSide,
  ImageWrapper,
  Shadow,
  ImageContainer,
} from "./shared";
import { SectionTile } from "./Title";

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
