import Image from "../core/Image";

import { SectionTile } from "./Title";
import {
  GithubButton,
  ImageContainer,
  ImageWrapper,
  LeftSide,
  Paragraph,
  RightSide,
  Shadow,
  SideContainer,
} from "./shared";

const YesTicketsCreateAccount = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <SectionTile status="active" number="01." text="Obtén tus tickets!" />
      <SideContainer>
        <LeftSide>
          <Paragraph>Hay tickets disponibles! 🎉</Paragraph>
          <Paragraph>
            Para comprarlos, primero debes crear una cuenta de JSConf. Puedes
            hacerlo a través de cuenta de Github
          </Paragraph>
          <GithubButton />
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            y
            <ImageContainer>
              <Image mobile={imageUrl} alt={"Un ticket de la JSConf"} />
              <Shadow />
            </ImageContainer>
          </ImageWrapper>
        </RightSide>
      </SideContainer>
    </>
  );
};

export default YesTicketsCreateAccount;
