import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

import { H2, H3 } from "../../src/Components/core/Typography";
import { TicketsLayout } from "../../src/Components/Layouts/TicketsLayout";
import Seo from "../../src/Components/Seo";
import { TicketsList } from "../../src/Components/Ticket/TicketsList";

import { urlQlient } from "../../src/graphql/urql";
import { ParseQuery } from "../../src/helpers/types";
import { colors, ViewportSizes } from "../../styles/theme";
import { me, myTickets } from "../../src/helpers/API";

import {
  TicketsQueryDocument,
  TicketsQueryQuery,
  TicketsQueryQueryVariables,
} from "../../src/graphql/tickets.generated";

type Page = ParseQuery<TicketsQueryQuery["page"]>;

export interface PageProps {
  seo: Page["seo"];
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
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
  const { data: user } = useQuery(["me"], me);
  const { data: allTickets } = useQuery(["mytickets"], myTickets);

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

  const latestTickets = allTickets?.sort(
    (a, b) =>
      new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
  );

  return (
    <>
      <Seo {...props.seo} />
      <Container style={{ zIndex: 1 }}>
        <TextContainer>
          <Title>YA ESTAS LIST@ PARA LA JSCONF! 🎉</Title>
          <ImageContainer>
            {user && allTickets ? (
              <TicketsList
                user={user}
                tickets={[latestTickets[0]]}
                shareEnabled={true}
              />
            ) : null}
          </ImageContainer>
          <Paragraph>
            Tu compra fue exitosa. Siempre podrás ver los tickets en{" "}
            <Link href={"/mytickets"} passHref>
              <A>tu página de tickets</A>
            </Link>{" "}
            (Recuerda traer tu ticket el día de la conferencia para hacer
            acreditación!)
          </Paragraph>
          <Paragraph>Cuéntale al mundo! Compártelo tus redes!</Paragraph>
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
