import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { H2, H3 } from "../../src/Components/core/Typography";
import { TicketsLayout } from "../../src/Components/Layouts/TicketsLayout";
import Seo from "../../src/Components/Seo";
import {
  TicketsQueryDocument,
  TicketsQueryQuery,
  TicketsQueryQueryVariables,
} from "../../src/graphql/tickets.generated";
import { urlQlient } from "../../src/graphql/urql";
import { ParseQuery } from "../../src/helpers/types";
import { colors, ViewportSizes } from "../../styles/theme";
import confetti from "canvas-confetti";

type Page = ParseQuery<TicketsQueryQuery["page"]>;

export interface PageProps {
  seo: Page["seo"];
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
  padding-bottom: 8rem;
  gap: 3rem;
  transition: gap 250ms ease-in-out;
  @media (max-width: ${ViewportSizes.Phone}px) {
    gap: 4rem;
  }
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    gap: 6rem;
  }
  @media (min-width: ${ViewportSizes.Desktop}px) {
    gap: 6rem;
  }
`;

const Img = styled.img`
  width: 60%;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const TextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Title = styled(H2)`
  text-align: center;
`;
const EndingTitle = styled(H3)`
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 2rem;
`;

const A = styled.a`
  font-weight: bold;
`;

const SocialAnchor = styled.a<{ type: "twitter" | "facebook" | "linkedin" }>(
  ({ theme, type }) => [
    {
      display: `inline-block`,
      position: "relative",
      fontWeight: "bold",
      "&:after": {
        content: `""`,
        position: "absolute",
        width: "100%",
        transform: "scaleX(0)",
        height: "4px",
        bottom: 0,
        left: 0,
        backgroundColor: theme.colors.social[type],
        transformOrigin: "bottom right",
        transition: "transform 0.25s ease-out",
      },
      "&:hover:after": {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
      },
    },
  ]
);

const StyledCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  height: 99vh;
  width: 100vw;
  overflow: hidden;
  z-index: 0;
`;

const confettiColors = [colors.jsconfYellow, colors.jsconfBlack];

export default function Tickets(props: PageProps) {
  const encodedURL = encodeURIComponent(`https://jsconf.cl/tickets`);
  const ref =
    useRef<HTMLCanvasElement>() as React.MutableRefObject<HTMLCanvasElement>;

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const myConfetti = confetti.create(ref.current, {
      resize: true,
      useWorker: true,
    });

    setTimeout(() => {
      const end = Date.now() + 3 * 1000;

      function drawFrame() {
        void myConfetti({
          particleCount: 4,
          angle: 60,
          startVelocity: 50,
          spread: 80,
          origin: { x: 0, y: 0.45 },
          colors: confettiColors,
        });
        void myConfetti({
          particleCount: 4,
          angle: 120,
          startVelocity: 50,
          spread: 80,
          origin: { x: 1, y: 0.45 },
          colors: confettiColors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(drawFrame);
        }
      }
      drawFrame();
    }, 1000);
  }, []);

  return (
    <>
      <Seo {...props.seo} />
      <Container style={{ zIndex: 1 }}>
        <ImageContainer>
          <Img src="/images/robot-waiting.svg" />
        </ImageContainer>
        <TextContainer>
          <Title>YA ESTAS LIST@ PARA LA JSCONF! 🎉</Title>
          <Paragraph>
            Tu ticket está listo, puedes revisarlo en{" "}
            <Link href={"/settings/tickets"} passHref>
              <A>tu página de tickets</A>
            </Link>{" "}
            (Recuerda traerlo el día de la conferencia para hacer acreditación!)
          </Paragraph>
          <Paragraph>Cuéntale al mundo! Compártelo tus redes!</Paragraph>
          <Paragraph
            style={{
              display: "inline-flex",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <SocialAnchor
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                `Lista mi entrada para la @JSConfCL 🎉. Obten la tuya en https://jsconf.cl/tickets.

Nos vemos en Febrero!`
              )}`}
              target="_blank"
              rel="noreferrer"
              type="twitter"
            >
              <Twitter size={48} />
            </SocialAnchor>
            <SocialAnchor
              href={`http://www.facebook.com/sharer.php?u=${encodedURL}`}
              target="_blank"
              rel="noreferrer"
              type="twitter"
            >
              <Facebook size={48} />
            </SocialAnchor>
            <SocialAnchor
              href={`https://www.linkedin.com/sharing/share-offsite?url=https://tickets.jsconf.cl`}
              target="_blank"
              rel="noreferrer"
              type="twitter"
            >
              <Linkedin size={48} />
            </SocialAnchor>
          </Paragraph>
          <EndingTitle>Nos vemos en Febrero!</EndingTitle>
        </TextContainer>
      </Container>
      <StyledCanvas ref={ref} id="confetti" />
    </>
  );
}

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<TicketsQueryQuery, TicketsQueryQueryVariables>(
      TicketsQueryDocument,
      {
        id: "2izkVq9L0r7BEeoZbEAEsC",
        locale: "es-CL",
        isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
      }
    )
    .toPromise();

  const page = queryResults.data?.page as Page;
  const props: PageProps = {
    seo: page?.seo || null,
  };

  return {
    props,
  };
}

Tickets.getLayout = TicketsLayout;
