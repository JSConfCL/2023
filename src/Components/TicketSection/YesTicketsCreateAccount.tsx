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
  GithubButton,
} from "./shared";
import { SectionTile } from "./Title";

const YesTicketsCreateAccount = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Container>
      <SectionTile status="active" number="01." text="Obten tus tickets!" />
      <SideContainer>
        <LeftSide>
          <Paragraph>Hay tickets disponibles! 🎉</Paragraph>
          <br />
          <Paragraph>
            Para comprarlos, primero debes crear una cuenta de JSConf. Puedes
            hacerlo a través de cuenta de Github en el siguente botón.
          </Paragraph>
          <br />
          <br />
          <GithubButton />
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
