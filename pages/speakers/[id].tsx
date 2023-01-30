import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Linkedin, Twitter, GitHub, Paperclip } from "react-feather";

import { StyledWrapperSuspense } from "../../src/Components/NavBar/components";
import Seo from "../../src/Components/Seo";
import Description from "../../src/Components/core/Description";

import {
  HomeQueryDocument,
  HomeQueryQuery,
  HomeQueryQueryVariables,
} from "../../src/graphql/home.generated";
import {
  LaPreviaDocument,
  LaPreviaQuery,
} from "../../src/graphql/laprevia.generated";
import {
  SpeakerQueryDocument,
  SpeakerQueryQuery,
  SpeakerQueryQueryVariables,
} from "../../src/graphql/speaker.generated";
import {
  SpeakersDocument,
  SpeakersQuery,
  SpeakersQueryVariables,
} from "../../src/graphql/speakers.generated";

import { urlQlient } from "../../src/graphql/urql";
import { PREVIA_DATE } from "../../src/helpers/config";
import { CHILE, getFullTime, getLongDate } from "../../src/helpers/datesntimes";
import { ParseQuery } from "../../src/helpers/types";
import { jsconfTheme, ViewportSizes } from "../../styles/theme";

const NavBar = dynamic(
  async () => await import("../../src/Components/NavBar/NavBar"),
  {
    ssr: true,
  }
);

const Particles = dynamic(
  async () => await import("../../src/Components/Particles")
);

const SpeakerSection = dynamic(
  async () => await import("../../src/Components/sections/SpeakerSection")
);

type SpeakerData = ParseQuery<LaPreviaQuery["page"]>["speakersBlock"];

interface SpeakerProps {
  speakerCollection: SpeakerQueryQuery["speakerCollection"];
  eventCollection: SpeakerQueryQuery["eventCollection"];
  speakersData: SpeakerData;
  isPrevia: boolean;
}

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
  margin-bottom: 100px;
`;

const HeroInfo = styled.div`
  width: 100%;

  @media (min-width: ${ViewportSizes.Phone}px) {
    display: flex;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 24px;
`;

const HeroImage = styled.div`
  img {
    max-width: 90%;
    margin: 0 auto;
    filter: grayscale(100%);
    border-radius: 0 32px 0 0;
    display: block;
    max-height: 350px;

    @media (min-width: ${ViewportSizes.Phone}px) {
      flex: 0 0;
      width: 400px;
      max-height: unset;
    }
  }
`;

const HeroExtra = styled.div`
  font-size: 14px;
  line-height: 14px;
  display: flex;
  margin-bottom: 16px;
  > div {
    flex: 0 0 50%;
  }
  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 18px;
    line-height: 18px;
    padding: 0;
  }
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.black};
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
  color: ${({ theme }) => theme.elements.speakerSection.subtitleColor};
  font-family: "Barlow";
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  margin: 0;
  padding: 0;
  display: inline-block;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 42px;
    line-height: 42px;
  }
`;

type BrochureProps = {
  number: number;
  title: string;
  leftSection: any;
  rightSection: any;
};

const Kind = {
  talk: "Charla",
  workshop: "Taller",
};

const Brochure = ({
  number,
  title,
  leftSection,
  rightSection,
}: BrochureProps) => {
  return (
    <BrochureContainer direction={number % 2 === 0} hasImage={false}>
      <BrochureNumber direction={number % 2 === 0}>
        {number.toString().padStart(2, "0")}
      </BrochureNumber>
      <BrochureInfo>
        <BrochureTitle>{title}</BrochureTitle>
        <BrochureDetails>
          <div>{leftSection}</div>
          <div>{rightSection}</div>
        </BrochureDetails>
      </BrochureInfo>
    </BrochureContainer>
  );
};

const BrochureContainer = styled.section<{
  direction: boolean;
  hasImage: boolean;
}>`
  padding: 16px 0px;
  padding-left: ${({ direction }) => (!direction ? "16px" : "0px")};
  padding-right: ${({ direction }) => (!direction ? "0px" : "16px")};
  display: flex;
  gap: 8px;
  flex-direction: ${({ direction }) => (!direction ? "row" : "row-reverse")};
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
  width: 100vw;

  @media (min-width: ${ViewportSizes.Phone}px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    flex-direction: ${({ direction }) => (!direction ? "row" : "row-reverse")};
    gap: 32px;
    padding: 48px 0px;
    padding-left: ${({ direction }) => (!direction ? "48px" : "0px")};
    padding-right: ${({ direction }) => (!direction ? "0px" : "48px")};
  }

  @media (min-width: ${ViewportSizes.Desktop}px) {
    overflow: visible;
    max-width: 1440px;
    margin: 0 auto;
  }
`;

const BrochureTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textColor};
  font-family: "Barlow";
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 10px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 80px;
    line-height: 80px;
    margin-bottom: 20px;
  }
`;

const BrochureSubTitle = styled.h3`
  font-family: Barlow;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.5px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 24px;
    line-height: 29px;
  }
`;

const BrochureNumber = styled.section<{ direction: boolean }>`
  font-family: "Koulen";
  font-style: normal;
  font-weight: 400;
  font-size: 124.914px;
  line-height: 125px;
  /* identical to box height, or 100% */
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.altColor};
  width: 100px;
  margin-right: ${({ direction }) => (!direction ? "-6px" : "0px")};
  margin-left: ${({ direction }) => (direction ? "-30px" : "0px")};
  order: 1;

  @media (min-width: ${ViewportSizes.Phone}px) {
    min-width: 300px;
    order: 3;
    font-size: 341.766px;
    line-height: 342px;
    margin-right: ${({ direction }) => (!direction ? "-48px" : "0px")};
    margin-left: ${({ direction }) => (direction ? "-108px" : "0px")};
  }
`;

const BrochureDetails = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    flex: 0 0 50%;
    margin-bottom: 16px;
  }

  @media (min-width: ${ViewportSizes.Phone}px) {
    flex-direction: row;
  }
`;

const BrochureInfo = styled.div`
  width: calc(100% - 140px);
`;

const P = styled.p`
  font-size: 18px;
  margin-bottom: 18px;

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const B = styled.b`
  font-weight: 700;
`;
const Highlight = styled.span`
  display: inline-block;
  font-size: 18px;
  margin-bottom: 18px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.altColor};

  @media (min-width: ${ViewportSizes.Phone}px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Speaker = (props: SpeakerProps) => {
  const {
    items: [speaker],
  } = props?.speakerCollection ?? { items: [] };
  const { items: events } = props?.eventCollection ?? {};

  return (
    <Container>
      <Seo
        title={`Charlista ${speaker?.name ?? ""} | JSConf Chile ${
          props.isPrevia ? " - La Previa" : ""
        }`}
        description={`Detalles de Charla/Taller de  ${
          speaker?.name ?? ""
        } | JSConf Chile ${props.isPrevia ? " - La Previa" : ""}`}
        metadata={[]}
      />
      <Suspense fallback={<StyledWrapperSuspense />}>
        <NavBar
          id={props.isPrevia ? "yEsNC4mdITUXpMO1REbOv" : undefined}
          isPreviaSpeakers={props.isPrevia}
        />
      </Suspense>
      <Suspense fallback={null}>
        <Hero id="home">
          <Particles
            backgroundColor={
              props.isPrevia
                ? jsconfTheme.colors.jsconfRed
                : jsconfTheme.colors.jsconfYellow
            }
          />
          <HeroInfo style={{ zIndex: "5" }}>
            <HeroText>
              <div>
                <H1>{speaker?.name ?? ""}</H1>
                <H2>
                  {speaker?.position ?? ""} @ {speaker?.companyName ?? ""}
                </H2>
              </div>
              <div>
                {events?.map((event) => (
                  <HeroExtra key={event?.sys.id} style={{ display: "flex" }}>
                    <div>
                      <B>{Kind[event?.kind as "talk" | "workshop"]}</B>
                      <br />
                      {event?.title}
                    </div>
                    <div style={{ textTransform: "capitalize" }}>
                      <B>Fecha</B>
                      <br />
                      {getLongDate(event?.date)},{" "}
                      {getFullTime(
                        new Date(event?.date),
                        event?.duration!,
                        CHILE.timezone
                      )}
                    </div>
                  </HeroExtra>
                ))}
              </div>
            </HeroText>
            <HeroImage>
              <img src={speaker?.photo?.url ?? ""} alt={speaker?.name ?? ""} />
            </HeroImage>
          </HeroInfo>
        </Hero>
      </Suspense>
      <Brochure
        title="Charlista"
        number={1}
        leftSection={
          <div>
            <BrochureSubTitle>{speaker?.name ?? ""}</BrochureSubTitle>
            <BrochureSubTitle>
              {speaker?.position ?? ""} @ {speaker?.companyName ?? ""}
            </BrochureSubTitle>
          </div>
        }
        rightSection={
          <div>
            {speaker?.about ? <P>{speaker?.about}</P> : null}
            {speaker?.linkedin ? (
              <>
                <Highlight>
                  <Linkedin /> <a href={speaker.linkedin}>{speaker.linkedin}</a>
                </Highlight>
                <br />
              </>
            ) : null}
            {speaker?.github ? (
              <>
                <Highlight>
                  <GitHub /> <a href={speaker.github}>{speaker.github}</a>
                </Highlight>
                <br />
              </>
            ) : null}
            {speaker?.twitter ? (
              <>
                <Highlight>
                  <Twitter /> <a href={speaker.twitter}>{speaker.twitter}</a>
                </Highlight>
                <br />
              </>
            ) : null}
            {speaker?.web ? (
              <>
                <Highlight>
                  <Paperclip /> <a href={speaker.web}>{speaker.web}</a>
                </Highlight>
              </>
            ) : null}
          </div>
        }
      />
      {events?.map((event, index) => (
        <Brochure
          key={event?.sys.id}
          title={
            event?.kind && Object.keys(Kind).includes(event.kind)
              ? Kind[event.kind as "talk" | "workshop"]
              : ""
          }
          number={index + 2}
          leftSection={<BrochureSubTitle>{event?.title}</BrochureSubTitle>}
          rightSection={<Description data={event?.description?.json} />}
        />
      ))}
      {props?.speakersData && (
        <div id="speakers">
          <SpeakerSection page={props?.speakersData} />
        </div>
      )}
    </Container>
  );
};

export async function getStaticPaths() {
  const queryResults = await urlQlient
    .query<SpeakersQuery, SpeakersQueryVariables>(SpeakersDocument, {
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    })
    .toPromise();

  const paths = queryResults?.data?.speakerCollection?.items
    .filter((item) => Boolean(item?.slug))
    .map((item) => ({ params: { id: item?.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  if (!params?.id) {
    return { props: {} };
  }

  const queryResults = await urlQlient
    .query<SpeakerQueryQuery, SpeakerQueryQueryVariables>(
      SpeakerQueryDocument,
      {
        id: params.id,
        isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
      }
    )
    .toPromise();

  const isPrevia = Boolean(
    queryResults?.data?.eventCollection?.items?.filter((item) =>
      item?.date?.startsWith(PREVIA_DATE)
    ).length
  );

  const extraSpeakersResult = isPrevia
    ? await urlQlient
        .query(LaPreviaDocument, {
          id: "2wAn9UxGwc1bgUTOOT4SPW",
          locale: "es-CL",
          isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
        })
        .toPromise()
    : await urlQlient
        .query<HomeQueryQuery, HomeQueryQueryVariables>(HomeQueryDocument, {
          locale: "es-CL",
          isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
        })
        .toPromise();

  return {
    props: {
      speakerCollection: queryResults?.data?.speakerCollection ?? null,
      eventCollection: queryResults?.data?.eventCollection ?? null,
      speakersData: extraSpeakersResult.data?.page?.speakersBlock ?? null,
      isPrevia,
    },
  };
}

export default Speaker;
