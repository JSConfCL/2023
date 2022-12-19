import { useFlags } from "flagsmith/react";

import Image from "../core/Image";

import { SectionTile } from "./Title";
import {
  GithubButton,
  ImageContainer,
  ImageWrapper,
  LeftSide,
  Paragraph,
  RigthSide,
  Shadow,
  SideContainer,
} from "./shared";

const YesTicketsCreateAccount = ({ imageUrl }: { imageUrl: string }) => {
  const { google_login_enabled: googleLoginEnabled } = useFlags([
    "google_login_enabled",
  ]);
  return (
    <>
      <SectionTile status="active" number="01." text="Obten tus tickets!" />
      <SideContainer>
        <LeftSide>
          <Paragraph>Hay tickets disponibles! 🎉</Paragraph>
          <Paragraph>
            Para comprarlos, primero debes crear una cuenta de JSConf. Puedes
            hacerlo a través de cuenta de{" "}
            {googleLoginEnabled.value ? "Github o Google" : "Github"}.
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
