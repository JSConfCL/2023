import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";

import Seo from "../../src/Components/Seo";
import Description from "../../src/Components/core/Description";

import { urlQlient } from "../../src/graphql/urql";
import {
  WorkshopQueryDocument,
  WorkshopQueryQuery,
  WorkshopQueryQueryVariables,
} from "../../src/graphql/workshop.generated";
import {
  WorkshopsQueryDocument,
  WorkshopsQueryQuery,
  WorkshopsQueryQueryVariables,
} from "../../src/graphql/workshops.generated";

import { CHILE, getFullTime, getLongDate } from "../../src/helpers/datesntimes";
import { ParseQuery } from "../../src/helpers/types";
import { ViewportSizes } from "../../styles/theme";

const Particles = lazy(
  async () => await import("../../src/Components/Particles")
);

const NavBar = dynamic(
  async () => await import("../../src/Components/NavBar/NavBar"),
  {
    ssr: true,
  }
);

const RegisterTicketButton = dynamic(
  async () => await import("../../src/Components/RegisterTicketButton"),
  {
    ssr: false,
  }
);

type WorkshopData = ParseQuery<WorkshopQueryQuery["eventCollection"]>;

interface WorkshopProps {
  eventCollection: WorkshopData;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  background: ${({ theme }) => theme.colors.backgroundColor};
  scroll-behavior: smooth;
  width: 100%;
  background: #000;
`;

const Hero = styled.section`
  color: white;
  font-size: 42px;
  width: 100vw;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 3;
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 100px;
  padding-bottom: 32px;
`;

const HeroInfo = styled.div`
  width: 100%;

  @media (min-width: ${ViewportSizes.Phone}px) {
    display: flex;
    text-align: center;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 24px;
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: "Barlow";
  font-weight: 700;
  font-size: 42px;
  line-height: 42px;
  margin: 0;
  display: inline-block;
  text-transform: uppercase;
  padding: 0;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 80px;
    line-height: 80px;
  }
`;

const H2 = styled.h2`
  color: #ddd;
  font-family: "Barlow";
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  margin: 16px 0;
  padding: 0;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 42px;
    line-height: 42px;
  }
`;

const H2Alt = styled(H2)`
  color: #eee;
  font-size: 18px;
  line-height: 18px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 36px;
    line-height: 36px;
  }
`;

const B = styled.b`
  font-weight: 700;
`;

const SmartButtonContainer = styled.div`
  text-align: center;
  position: relative;
  margin: 24px 16px 16px 16px;
  font-size: 20px;
`;

export default function Events(props: WorkshopProps) {
  const {
    eventCollection: {
      items: [workshop],
    },
  } = props;
  const { speaker } = workshop;

  return (
    <Container>
      <Seo
        title={`Workshop ${workshop.title ?? ""} | JSConf Chile}`}
        description={`Detalles del Taller de ${
          speaker?.name ?? ""
        } | JSConf Chile`}
        metadata={[]}
      />
      <Suspense fallback={null}>
        <NavBar />
      </Suspense>
      <Suspense fallback={null}>
        <Hero id="home">
          <Particles
            backgroundColor={"#000"}
            color={"#f0e040"}
            shape="circle"
            configuration="sponsors"
          />
          <HeroInfo style={{ zIndex: "5" }}>
            <HeroText>
              <div>
                <H1>{workshop?.title ?? ""}</H1>
                <H2>
                  <B>Por</B>:{speaker?.name ?? ""} - {speaker?.position ?? ""} @{" "}
                  {speaker?.companyName ?? ""}
                </H2>
                <H2Alt>
                  <B>Fecha</B>: {getLongDate(workshop?.date)},{" "}
                  {getFullTime(
                    new Date(workshop?.date),
                    workshop?.duration,
                    CHILE.timezone
                  )}
                </H2Alt>
                <br />
                <Description data={workshop?.description?.json} />
                <Suspense fallback={null}>
                  <SmartButtonContainer>
                    <RegisterTicketButton ticketId={workshop.ticketId} />
                  </SmartButtonContainer>
                </Suspense>
              </div>
            </HeroText>
          </HeroInfo>
        </Hero>
      </Suspense>
    </Container>
  );
}

export async function getStaticPaths() {
  const queryResults = await urlQlient
    .query<WorkshopsQueryQuery, WorkshopsQueryQueryVariables>(
      WorkshopsQueryDocument,
      {
        isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
      }
    )
    .toPromise();

  const paths = queryResults?.data?.eventCollection?.items
    .filter((item) => Boolean(item?.slug))
    .map((item) => ({ params: { id: item?.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  if (!params || !params.id) {
    return { props: {} };
  }

  const queryResults = await urlQlient
    .query<WorkshopQueryQuery, WorkshopQueryQueryVariables>(
      WorkshopQueryDocument,
      {
        id: params.id,
        isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
      }
    )
    .toPromise();

  return {
    props: {
      eventCollection: queryResults?.data?.eventCollection ?? null,
    },
  };
}
