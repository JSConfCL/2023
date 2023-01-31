import styled from "@emotion/styled";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";
import ReactCountryFlag from "react-country-flag";
import { ExternalLink } from "react-feather";

import { StyledWrapperSuspense } from "../../src/Components/NavBar/components";
import Seo from "../../src/Components/Seo";
import { urlQlient } from "../../src/graphql/urql";
import {
  WorkshopsListDocument,
  WorkshopsListQuery,
  WorkshopsListQueryVariables,
} from "../../src/graphql/workshoplist.generated";
import { CHILE, getFullTime, getLongDate } from "../../src/helpers/datesntimes";
import { ViewportSizes } from "../../styles/theme";

const Particles = dynamic(
  async () => await import("../../src/Components/Particles")
);

const NavBar = dynamic(
  async () => await import("../../src/Components/NavBar/NavBar"),
  {
    ssr: false,
  }
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textColor};
  background: #000;
  scroll-behavior: smooth;
  width: 100%;
`;

const Hero = styled.section`
  color: #000;
  font-size: 42px;
  width: 100vw;
  margin: 0 auto;
  z-index: 1;
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 4rem;
  justify-content: flex-start;
  position: relative;
`;

const HeroInfo = styled.div`
  width: 100%;

  @media (min-width: ${ViewportSizes.Phone}px) {
    text-align: center;
  }
`;

const WorkshopsContainer = styled.div`
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  @media (min-width: ${ViewportSizes.Phone}px) {
    justify-content: flex-start;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 24px;
  gap: 1rem;
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.textColor};
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
  text-transform: capitalize;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 42px;
    line-height: 42px;
  }
`;

const StyledCard = styled.a`
  display: block;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 20px;
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const WorkshopTitle = styled.span`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.altColor};
`;

const ExternalLinkWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;
  @media (min-width: ${ViewportSizes.Phone}px) {
    justify-content: center;
  }
`;

interface Workshop {
  slug: string;
  title: string;
  date: string;
  duration: number;
  language: string;
  ticketId: string;
}

interface PageProps {
  seo: any;
  workshops: Workshop[];
}

const Card = ({ title, slug, date, duration }: Workshop) => {
  const dateinDate = new Date(date);

  return (
    <Link href={`/workshops/${slug}`} passHref>
      <StyledCard>
        <WorkshopTitle>{title}</WorkshopTitle>
        <div>
          <ReactCountryFlag countryCode={CHILE.abbr} />{" "}
          {getFullTime(dateinDate, duration, CHILE.timezone)}
        </div>
        <ExternalLinkWrapper>
          Ver más <ExternalLink size={24} />
        </ExternalLinkWrapper>
      </StyledCard>
    </Link>
  );
};

const Home: NextPage<PageProps> = ({ workshops, seo }: PageProps) => {
  const dates = ["2023-02-03", "2023-02-04"];
  return (
    <Container>
      <Seo {...seo} />
      <Suspense fallback={<StyledWrapperSuspense />}>
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
              <H1>Listado de Workshops</H1>
              {dates.map((date) => (
                <div key={date}>
                  <H2>{getLongDate(date)}</H2>

                  <WorkshopsContainer>
                    {workshops
                      .filter((workshop) => workshop.date.startsWith(date))
                      .sort(
                        (workshop1, workshop2) =>
                          Date.parse(workshop1.date) -
                          Date.parse(workshop2.date)
                      )
                      .map((workshop) => (
                        <Card key={workshop.title} {...workshop} />
                      ))}
                  </WorkshopsContainer>
                </div>
              ))}
            </HeroText>
          </HeroInfo>
        </Hero>
      </Suspense>
    </Container>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<WorkshopsListQuery, WorkshopsListQueryVariables>(
      WorkshopsListDocument,
      {
        isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
      }
    )
    .toPromise();

  const workshops = queryResults.data?.eventCollection?.items;

  const props = {
    seo: {},
    workshops,
  };

  return {
    props,
  };
}

export default Home;
