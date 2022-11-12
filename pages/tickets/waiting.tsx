import styled from "@emotion/styled";
import { H2 } from "../../src/Components/core/Typography";
import { TicketsLayout } from "../../src/Components/Layouts/TicketsLayout";
import Seo from "../../src/Components/Seo";
import {
  TicketsQueryDocument,
  TicketsQueryQuery,
  TicketsQueryQueryVariables,
} from "../../src/graphql/tickets.generated";
import { urlQlient } from "../../src/graphql/urql";
import { ParseQuery } from "../../src/helpers/types";
import { ViewportSizes } from "../../styles/theme";

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

const Paragraph = styled.p`
  text-align: center;
  font-size: 2rem;
`;

const A = styled.a`
  font-weight: bold;
`;

export default function Tickets(props: PageProps) {
  return (
    <>
      <Seo {...props.seo} />
      <Container>
        <ImageContainer>
          <Img src="/images/robot-waiting.svg" />
        </ImageContainer>
        <TextContainer>
          <Title>Estamos confirmando tu compra</Title>
          <Paragraph>
            Esperamos la confirmación por parte del procesador de pagos.
          </Paragraph>
          <Paragraph>
            En cuanto tengamos noticias, te enviaremos un mensaje a la dirección
            de correo q tienes asociada a tu cuenta de Github.
          </Paragraph>
          <Paragraph>
            Dependiendo del procesador de pagos, la confirmación puede durar un
            par de segundos (es lo común) o un par de horas. Si dentro de un día
            aun no recibes nada, envíanos un mensaje a{" "}
            <A href="mailto:soporte@jsconf.cl" target="_blank">
              soporte@jsconf.cl
            </A>
            .
          </Paragraph>
        </TextContainer>
      </Container>
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
