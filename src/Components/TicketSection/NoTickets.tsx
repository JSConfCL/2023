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
import { isAuthenticatedAtom } from "../../helpers/auth";
import { useAtomValue } from "jotai";

import styled from "@emotion/styled";

// ;

const socialColors = {
  twitter: "#0087ca",
  facebook: "#1877F2",
  linkedin: "#0A66C2",
};
const SocialAnchor = styled.a<{ type: "twitter" | "facebook" | "linkedin" }>(
  ({ type }) => [
    {
      display: `inline-block`,
      position: "relative",
      fontWeight: "bold",
      // backgroundSize: "1px 1em",
      // boxShadow: "inset 0 -0.175em white, inset 0 -0.2em #000",
      // display: "inline",
      // textDecoration: "underline",
      // textDecorationSkip: "objects",
      // textDecorationStyle: "solid",
      // textDecorationSkipInk: "auto",
      // transitionProperty: "text-decoration-color",
      // transitionTimingFunction: "ease-in-out",
      // transitionDuration: "250ms",
      ["&:after"]: {
        content: `""`,
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "4px",
        bottom: 0,
        left: 0,
        backgroundColor: socialColors[type],
        transformOrigin: "bottom right",
        transition: "transform 0.25s ease-out",
      },
      ["&:hover:after"]: {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
      },
    },
  ]
);

const NoTickets = ({ imageUrl }: { imageUrl: string }) => {
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);

  return (
    <Container>
      <SectionTile status="inactive" number="01." text="Obten tus tickets" />
      <SideContainer>
        <LeftSide>
          <Paragraph>Aún no tenemos tickets a la venta 😢</Paragraph>
          <Paragraph>Pero falta poco! </Paragraph>
          <br />
          {!isLoggedIn ? (
            <>
              <Paragraph>
                Mientras tanto, puedes crear tu cuenta JSConf Chile, así estarás
                list@ para cuando salgan a la venta!
              </Paragraph>
              <br />
              <GithubButton />
              <Paragraph>
                Creando tu cuente además podrás recibir correos cuando los
                tickets estén disponibles, preventas y anuncios de la JSConf.
              </Paragraph>
            </>
          ) : (
            <>
              <Paragraph>
                Ya tienes tu cuenta de JSConf creada! Cuando anunciemos la fecha
                de lanzamiento, recibirás un email (al correo de tu cuenta de
                Github).
              </Paragraph>
              <br />
              <GithubButton />
              <Paragraph>
                Para estar al tanto del lanzamiento de los tickets, noticias y
                todos los anuncios de la JSConf, puedes seguirnos en{" "}
                <SocialAnchor
                  href="https://twitter.com/jsconfcl"
                  target="_blank"
                  rel="noreferrer"
                  type="twitter"
                >
                  Twitter (@JSconfCL)
                </SocialAnchor>
                ,{" "}
                <SocialAnchor
                  href="https://twitter.com/jsconfcl"
                  target="_blank"
                  rel="noreferrer"
                  type="facebook"
                >
                  Facebook
                </SocialAnchor>
                , o{" "}
                <SocialAnchor
                  href="https://twitter.com/jsconfcl"
                  target="_blank"
                  rel="noreferrer"
                  type="linkedin"
                >
                  Linkedin
                </SocialAnchor>
              </Paragraph>
            </>
          )}
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
