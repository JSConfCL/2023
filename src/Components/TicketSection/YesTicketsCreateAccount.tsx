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

const YesTicketsCreateAccount = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Container>
      <SectionTile status="active" number="01." text="Obten tus tickets!" />
      <SideContainer>
        <LeftSide>
          <Paragraph>Los tickets están disponibles! 🎉</Paragraph>
          <br />
          <Paragraph>
            Crea una cuenta de JSConf Chile para comprarlos!
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

export default YesTicketsCreateAccount;
