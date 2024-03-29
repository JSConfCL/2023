import type { Document } from "@contentful/rich-text-types";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { parseISO } from "date-fns";
import { format } from "date-fns-tz";
import Link from "next/link";
import { transparentize } from "polished";
import React, { Dispatch, SetStateAction, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown, ChevronUp } from "react-feather";

import { PageProps } from "../../../pages";
import { jsconfTheme, ViewportSizes } from "../../../styles/theme";

import { CHILE, getFullTime, getLongDate } from "../../helpers/datesntimes";
import { PrimaryStyledLink } from "../Links/index";
import Description from "../core/Description";
import { H2, H3 } from "../core/Typography";

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

const colorOut = keyframes`
  from {
    background: rgb(244 91 105 / 20%);
  }

  to {
    background: transparent;
  }
`;

const colorIn = keyframes`
  from {
    background: transparent;
  }

  to {
    background: rgb(244 91 105 / 20%);
  }
`;

const StyledForegroundWrapper = styled.section(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: "0",
  padding: 48,
  flex: 1,
  justifyContent: "space-between",
  gap: 32,
  maxWidth: 1440,
  alignItems: "center",
  margin: "0 auto",
  [theme.breakpoints.phoneOnly]: {
    padding: 0,
    gap: 32,
  },
}));

const DescriptionCotainer = styled.div`
  display: flex;
  gap: 32px 16px;
  flex-direction: column;
  margin-bottom: 32px;

  h2 {
    margin-top: 48px;
  }

  > a {
    width: 100%;
  }

  ${jsconfTheme.breakpoints.phoneOnly} {
    padding: 0 16px;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    margin-bottom: 64px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HR = styled.hr`
  border-width: 1px;
  border-color: ${jsconfTheme.colors.jsconfRed};
  border-style: solid;
  width: 50%;
  background-color: ${jsconfTheme.colors.jsconfRed};
`;

const StyledActionsContainer = styled.div`
  ${jsconfTheme.breakpoints.phoneOnly} {
    padding: 0 16px;
    margin-bottom: 72px;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 40px;
  }
`;

const StyledActions = styled.div`
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    text-align: right;
  }
`;
const StyledButtons = styled.div`
  margin-bottom: 16px;
`;

const StyledButton = styled.button`
  padding: 8px 24px;
  background: rgba(244, 91, 105, 0.2);
  cursor: pointer;
  font-weight: bold;
  text-transform: capitalize;
  display: inline-block;
  width: 50%;
  text-align: center;

  &.active {
    background: ${jsconfTheme.colors.jsconfRed};
  }

  &:first-of-type {
    padding-left: 48px;
    border-radius: 24px 0 0 24px;
  }

  &:last-of-type {
    padding-right: 48px;
    border-radius: 0 24px 24px 0;
  }

  &:only-of-type {
    border-radius: 24px;
  }

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    text-align: right;
    width: auto;
  }
`;

const TableCell = styled.td`
  display: block;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 18px;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    display: table-cell;
    padding: 16px 0;
    height: 24px;
    line-height: 32px;
  }
`;

const ImageCell = styled(TableCell)`
  display: none;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    display: table-cell;
    width: 220px;

    img {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
      animation: ${fadeOut} 0.5s;
    }
  }
`;

const TitleCell = styled(TableCell)``;

const TimeCell = styled(TableCell)`
  font-size: 18px;
  vertical-align: bottom;
  white-space: nowrap;
  padding-bottom: 1rem;
  text-align: right;
  padding-right: 1rem;

  /* @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    width: 12%;
  } */
`;

const AuthorCell = styled(TableCell)`
  padding-right: 16px;
  padding-top: 1rem;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.altColor};
  font-weight: bold;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    padding-right: 16px;
    padding-top: 0rem;
    width: 15%;
  }
`;

const TableRow = styled.tr`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
  border-bottom: 1px solid #ffffff4d;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    display: table-row;
    animation: ${colorOut} 1s ease;

    &:hover {
      animation: ${colorIn} 1s ease;
      background: rgb(244 91 105 / 20%);

      ${ImageCell} {
        img {
          opacity: 1;
          width: 200px;
          height: 200px;
          border-radius: 0 32px 0 0;
          filter: grayscale(100%);
          transform: translate(10px, 10px);
          animation: ${fadeIn} 1s ease;
        }
      }
    }
  }
`;

const Table = styled.table`
  width: 100%;
  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    margin-bottom: 100px;
  }
  tbody {
    width: 100%;
  }
`;

const CalendarContainer = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  ${jsconfTheme.breakpoints.phoneOnly} {
    margin-top: 32px;
  }
`;

const Tag = styled.span`
  display: inline-block;
  background: ${transparentize(0.2, jsconfTheme.colors.jsconfRed)};
  color: white;
  font-weight: bold;
  line-height: 0;
  font-size: 1rem;
  margin: 0;
  padding: 12px 8px;
  border-radius: 0px 8px 0px 0px;
`;

const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;

type Flatten<T> = T extends any[] ? T[number] : T;

const LANGUAGES = {
  es: "Español",
  en: "English",
};

const Title = styled.div`
  text-transform: capitalize;
`;

const TitleWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  gap: 0.25rem;
`;

const TitleActions = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 1.5rem;

  @media (max-width: ${ViewportSizes.TabletLandscape}px) {
    top: 1rem;
  }
`;

const ChevronContainer = styled.span`
  cursor: pointer;
`;

const Language = ({ language }: { language?: string | null }) => {
  if (!language) {
    return null;
  }
  return <Tag>{language}</Tag>;
};

const CollapsableInfo = ({
  information,
  show,
}: {
  information?: Document;
  show: boolean;
}) => {
  if (!information) {
    return null;
  }

  return (
    <div>{show ? <Description variant="sm" data={information} /> : null}</div>
  );
};

const FloatingChevron = ({
  hasInformation,
  show,
  setShow,
}: {
  hasInformation: boolean;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const Chevron = show ? ChevronUp : ChevronDown;

  if (!hasInformation) {
    return null;
  }
  return (
    <TitleActions>
      <ChevronContainer>
        <Chevron
          onClick={() => {
            setShow((tmpShow) => !tmpShow);
          }}
        />
      </ChevronContainer>
    </TitleActions>
  );
};

const TimelineRow = ({
  event,
  showLocalTime,
  showPictures,
}: {
  event: Flatten<PageProps["events"]>;
  showLocalTime: boolean;
  showPictures: boolean;
}) => {
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const date = new Date(event.date);
  const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const language = event.language
    ? LANGUAGES[event.language as "es" | "en"]
    : null;
  const slug = event?.speaker?.slug;

  const WithLinkWrapper = slug
    ? ({ children }: { children: any }) => (
        <Link rel="preconnect" href={`/speakers/${slug}`} passHref>
          <a>{children}</a>
        </Link>
      )
    : ({ children }: { children: any }) => <>{children}</>;

  React.useEffect(() => {
    setLoaded(true);
  }, []);
  const hasInformation = event.description?.json;
  return (
    <TableRow>
      {showPictures ? (
        <ImageCell>
          {event?.speaker?.photo?.url ? (
            <WithLinkWrapper>
              <img
                alt={event?.speaker?.name || "Speaker"}
                src={`${event?.speaker?.photo?.url}?fit=thumb&w=320&h=320&f=face`}
              />
            </WithLinkWrapper>
          ) : null}
        </ImageCell>
      ) : null}
      {event?.speaker?.name ? (
        <AuthorCell>
          <WithLinkWrapper>{event.speaker.name}</WithLinkWrapper>
        </AuthorCell>
      ) : (
        <div></div>
      )}
      <TitleCell>
        <TitleWrapperContainer>
          <Title>
            <WithLinkWrapper>{event.title}</WithLinkWrapper>
          </Title>
          <CollapsableInfo show={show} information={event.description?.json} />
          <Tags>
            <Language language={language} />
            {event?.includesTranslation ? (
              <Tag>Traduccion simultanea</Tag>
            ) : null}
          </Tags>
        </TitleWrapperContainer>
      </TitleCell>
      <TimeCell>
        <div>
          <ReactCountryFlag countryCode={CHILE.abbr} />{" "}
          {getFullTime(date, event.duration, CHILE.timezone)}
        </div>
        {showLocalTime ? (
          <div>📍 {getFullTime(date, event.duration, localTimezone)}</div>
        ) : null}
      </TimeCell>
      {loaded && (
        <FloatingChevron
          show={show}
          setShow={setShow}
          hasInformation={hasInformation}
        />
      )}
    </TableRow>
  );
};

const TimelineSection = (props: {
  events: PageProps["events"];
  showLocalTime?: boolean;
  showTickets?: boolean;
  showPictures?: boolean;
}) => {
  const events = props.events;
  const dates = Array.from(
    new Set(events.map(({ date }) => format(parseISO(date), "yyyy-MM-dd")))
  );
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const selectedEvents = events
    .filter(({ date }) =>
      format(parseISO(date), "yyyy-MM-dd").startsWith(selectedDate)
    )
    .sort(
      (event1, event2) => Date.parse(event1.date) - Date.parse(event2.date)
    );

  if (events.length === 0) {
    return null;
  }

  const generalEvents = selectedEvents.filter(
    (event) => event.kind !== "workshop"
  );
  const workshopEvents = selectedEvents.filter(
    (event) => event.kind === "workshop"
  );

  const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const isDifferentTimezone = localTimezone !== CHILE.timezone;
  const showDifferentTimezone =
    Boolean(props.showLocalTime) && isDifferentTimezone;
  const showPictures = props.showPictures ?? true;

  return (
    <div style={{ position: "relative" }}>
      <StyledForegroundWrapper>
        <DescriptionCotainer style={{}}>
          <div>
            <H2 whileHover={{ scale: 1.01 }}>Calendario</H2>
            <HR />
          </div>
          {props?.showTickets ? (
            <PrimaryStyledLink href="/tickets">
              Obtener
              <br />
              Tickets
            </PrimaryStyledLink>
          ) : null}
        </DescriptionCotainer>
        <StyledActionsContainer>
          <StyledActions>
            <StyledButtons>
              {dates.map((date) => (
                <StyledButton
                  key={date}
                  className={date === selectedDate ? "active" : ""}
                  onClick={() => setSelectedDate(date)}
                >
                  {getLongDate(date)}
                </StyledButton>
              ))}
            </StyledButtons>
            <div>* Los horarios están sujetos a cambio</div>
            {showDifferentTimezone ? (
              <div style={{ color: jsconfTheme.colors.jsconfRed }}>
                ** Los horarios se muestran en la zona horaria de{" "}
                <ReactCountryFlag countryCode={CHILE.abbr} /> Chile y 📍 de tu
                ubicación ({localTimezone}).
              </div>
            ) : (
              ""
            )}
          </StyledActions>
        </StyledActionsContainer>
        <CalendarContainer>
          <H3>Escenario Principal</H3>
          <Table>
            <tbody>
              {generalEvents.map((event) => (
                <TimelineRow
                  key={event.title}
                  event={event}
                  showLocalTime={showDifferentTimezone}
                  showPictures={showPictures}
                />
              ))}
            </tbody>
          </Table>
          {workshopEvents.length ? (
            <>
              <H3>Talleres / Workshops</H3>
              <Table>
                <tbody>
                  {workshopEvents.map((event) => (
                    <TimelineRow
                      key={event.title}
                      event={event}
                      showLocalTime={showDifferentTimezone}
                      showPictures={showPictures}
                    />
                  ))}
                </tbody>
              </Table>
            </>
          ) : null}
        </CalendarContainer>
      </StyledForegroundWrapper>
    </div>
  );
};

export default TimelineSection;
