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
    <>
      <SectionTile status="active" number="01." text="Obten tus tickets!" />
      <SideContainer>
        <LeftSide>
          <Paragraph>Hay tickets disponibles! 🎉</Paragraph>
          <Paragraph>
            Para comprarlos, primero debes crear una cuenta de JSConf. Puedes
            hacerlo a través de cuenta de Github o Google.
          </Paragraph>
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
    </>
  );
};

export default YesTicketsCreateAccount;
