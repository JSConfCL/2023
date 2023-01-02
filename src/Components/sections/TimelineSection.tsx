import type { Document } from "@contentful/rich-text-types";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { parseISO } from "date-fns";
import { format } from "date-fns-tz";
import { transparentize } from "polished";
import { Suspense, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown, ChevronUp } from "react-feather";

import { PageProps } from "../../../pages";
import { jsconfTheme, ViewportSizes } from "../../../styles/theme";

import { CHILE, getFullTime, getLongDate } from "../../helpers/datesntimes";
import { PrimaryStyledLink } from "../Links/index";
import Description from "../core/Description";
import { H2, H3 } from "../core/Typography";

const GENERAL = "general";

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

const TimeCell = styled(TableCell)`
  margin-bottom: 8px;
  font-size: 18px;
  vertical-align: bottom;
  white-space: nowrap;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    width: 12%;
  }
`;

const AuthorCell = styled(TableCell)`
  margin-top: 16px;
  padding-right: 16px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.altColor};
  font-weight: bold;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    padding-right: 16px;
    width: 15%;
  }
`;

const TableRow = styled.tr`
  display: block;
  width: 100%;
  border-bottom: 1px solid #ffffff4d;
  padding: 32px 16px;

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
`;

const CalendarContainer = styled.div`
  ${jsconfTheme.breakpoints.phoneOnly} {
    h3 {
      margin-top: 32px;
      padding: 0 16px;
    }
  }
`;

const Tag = styled.span`
  display: inline-block;
  background: ${transparentize(0.5, jsconfTheme.colors.jsconfRed)};
  color: white;
  font-weight: bold;
  padding: 0 8px;
  font-size: 0.8em;
  border-radius: 0px 8px 0px 0px;
  margin: 8px 0;
`;

type Flatten<T> = T extends any[] ? T[number] : T;

const LANGUAGES = {
  es: "Español",
  en: "English",
};

const Title = styled.div`
  text-transform: capitalize;
`;

const TitleActions = styled.div`
  text-align: right;
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

const Kind = ({ kind }: { kind?: string }) => {
  if (!kind || kind === GENERAL) {
    return null;
  }

  return <Title>{kind}</Title>;
};

const CollapsableInfo = ({ information }: { information?: Document }) => {
  const [show, setShow] = useState(false);
  const Chevron = show ? ChevronUp : ChevronDown;

  if (!information) {
    return null;
  }

  return (
    <div>
      <TitleActions>
        <ChevronContainer>
          <Chevron
            onClick={() => {
              setShow((tmpShow) => !tmpShow);
            }}
          />
        </ChevronContainer>
      </TitleActions>
      {show ? <Description variant="sm" data={information} /> : null}
    </div>
  );
};

const TimelineRow = ({
  event,
  showLocalTime,
}: {
  event: Flatten<PageProps["events"]>;
  showLocalTime: boolean;
}) => {
  const date = new Date(event.date);
  const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const language = event.language
    ? LANGUAGES[event.language as "es" | "en"]
    : null;

  return (
    <TableRow>
      <ImageCell>
        <Suspense fallback={null}>
          {event?.speaker?.photo?.url ? (
            <img
              alt={event?.speaker?.name || "Speaker"}
              src={`${event?.speaker?.photo?.url}?fit=thumb&w=320&h=320&f=face`}
            />
          ) : null}
        </Suspense>
      </ImageCell>
      <AuthorCell>{event?.speaker?.name}</AuthorCell>
      <TableCell>
        <Kind kind={event.kind} />
        <Title>{event.title}</Title>
        <CollapsableInfo information={event.description?.json} />
        <Language language={language} />
      </TableCell>
      <TimeCell>
        <div>
          <ReactCountryFlag countryCode={CHILE.abbr} />{" "}
          {getFullTime(date, event.duration, CHILE.timezone)}
        </div>
        {showLocalTime ? (
          <div>📍 {getFullTime(date, event.duration, localTimezone)}</div>
        ) : null}
      </TimeCell>
    </TableRow>
  );
};

const TimelineSection = (props: {
  events: PageProps["events"];
  showLocalTime?: boolean;
  showTickets?: boolean;
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
          <H3>General</H3>
          <Table>
            <tbody>
              {generalEvents.map((event) => (
                <TimelineRow
                  key={event.title}
                  event={event}
                  showLocalTime={showDifferentTimezone}
                />
              ))}
            </tbody>
          </Table>
          {workshopEvents.length ? (
            <>
              <H3>Talleres</H3>
              <Table>
                <tbody>
                  {workshopEvents.map((event) => (
                    <TimelineRow
                      key={event.title}
                      event={event}
                      showLocalTime={showDifferentTimezone}
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
