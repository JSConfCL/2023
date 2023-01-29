import styled from "@emotion/styled";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { lazy, Suspense } from "react";
import ReactCountryFlag from "react-country-flag";
import { ExternalLink } from "react-feather";

import { StyledWrapperSuspense } from "../../src/Components/NavBar/components";
import Seo from "../../src/Components/Seo";

import {
  EventsListDocument,
  EventsListQuery,
  EventsListQueryVariables,
} from "../../src/graphql/eventlist.generated";

import { urlQlient } from "../../src/graphql/urql";
import { CHILE, getFullTime, getLongDate } from "../../src/helpers/datesntimes";
import { ViewportSizes } from "../../styles/theme";

const Particles = lazy(
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
  background: ${({ theme }) => theme.colors.backgroundColor};
  scroll-behavior: smooth;
  width: 100%;
`;

const Hero = styled.section`
  color: #000;
  font-size: 42px;
  width: 100vw;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 3;
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`;

const HeroInfo = styled.div`
  width: 100%;

  @media (min-width: ${ViewportSizes.Phone}px) {
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
  color: ${({ theme }) => theme.colors.textColor};
  font-family: "Permanent Marker";
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

const StyledCard = styled.a`
  display: block;
  background: rgba(255, 255, 255, 0.8);
  color: #333;
  padding: 16px;
  font-size: 20px;
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
  border-bottom: 2px solid #ddd;

  span {
    font-family: "Permanent Marker";
    font-weight: bold;
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.altColor};
  }
`;

interface Hash {
  [k: string]: {
    slug: string;
    date: string;
    duration: number;
  };
}

interface Event {
  name: string;
  subtitle: string;
  slug: string;
  date: string;
  duration: number;
  flags: {
    ticketId: string;
  };
}

interface PageProps {
  seo: any;
  events: Event[];
}

const Card = ({ name, subtitle, slug, date, duration }: Event) => {
  const dateinDate = new Date(date);
  return (
    <Link href={`/events/${slug}`} passHref>
      <StyledCard>
        <span style={{ fontSize: "2em", display: "block" }}>{name}</span>
        <span style={{ display: "block" }}>{subtitle}</span>
        <div style={{ textTransform: "capitalize" }}>{getLongDate(date)}</div>
        <div>
          <ReactCountryFlag countryCode={CHILE.abbr} />{" "}
          {getFullTime(dateinDate, duration, CHILE.timezone)}
        </div>
        Ver más <ExternalLink size={24} />
      </StyledCard>
    </Link>
  );
};

const Home: NextPage<PageProps> = ({ events, seo }: PageProps) => {
  return (
    <Container>
      <Seo {...seo} />
      <Suspense fallback={<StyledWrapperSuspense />}>
        <NavBar />
      </Suspense>
      <Suspense fallback={null}>
        <Hero id="home">
          <Particles backgroundColor="#fff" />
          <HeroInfo style={{ zIndex: "5" }}>
            <HeroText>
              <H1>Listado de Eventos</H1>
              <div style={{ zIndex: "10" }}>
                {events
                  .sort(
                    (event1, event2) =>
                      Date.parse(event1.date) - Date.parse(event2.date)
                  )
                  .map((event) => (
                    <div style={{ color: "red" }} key={event.name}>
                      <Card key={event.name} {...event} />
                    </div>
                  ))}
              </div>
            </HeroText>
          </HeroInfo>
        </Hero>
      </Suspense>
    </Container>
  );
};

export async function getStaticProps() {
  const queryResults = await urlQlient
    .query<EventsListQuery, EventsListQueryVariables>(EventsListDocument, {
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();

  const pagesInfo: Hash = {
    "01yfAORmroDbUfn1GvPgSb": {
      slug: "meetup",
      date: "2023-02-01T18:00:00.000-03:00",
      duration: 330,
    },
    "3cENxcLEoIFxxmiK3bqOdx": {
      slug: "meet-and-drink",
      date: "2023-02-02T19:00:00.000-03:00",
      duration: 270,
    },
  };

  const events = queryResults.data?.pageCollection?.items
    .filter((item) => Object.keys(item?.flags ?? {}).includes("ticketId"))
    .map((event) => (event ? { ...event, ...pagesInfo[event.sys.id] } : null))
    .filter((event) => Boolean(event));

  const props = {
    seo: {},
    events,
  };

  return {
    props,
  };
}

export default Home;
