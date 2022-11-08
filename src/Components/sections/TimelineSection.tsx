import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { lazy, Suspense, useState } from "react";
import { add, format, parseISO } from "date-fns";
import esLocale from "date-fns/locale/es";

import { H2, H3 } from "../core/Typography";
import { PrimaryStyledLink } from "../Links/index";

import { jsconfTheme, ViewportSizes } from "../../../styles/theme";

import { PageProps } from "../../../pages";

const Particles = lazy(() => import("../Particles"));

const DATES = ["2023-02-03", "2023-02-04"];
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

const StyledActions = styled.div``;
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

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    text-align: right;
    width: auto;
  }
`;

const TableCell = styled.td`
  display: block;
  color: white;
  font-size: 18px;
  text-transform: capitalize;

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
  color: ${jsconfTheme.colors.jsconfYellow};
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 20px;
  vertical-align: bottom;
`;

const AuthorCell = styled(TableCell)`
  margin-top: 16px;
  vertical-align: bottom;
  padding-right: 16px;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    padding-right: 16px;
    text-align: right;
  }
`;

const TableRow = styled.tr`
  display: block;
  width: 100%;
  border-bottom: 1px solid #FFFFFF4D;
  padding: 32px 16px;

  @media (min-width: ${ViewportSizes.TabletLandscape}px) {
    display: table-row;

    &:hover {
      background: rgb(244 91 105 / 20%);

      {ImageCell} {
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
type Flatten<T> = T extends any[] ? T[number] : T;

const getTime = (date: Date) => `${format(date, "kk")}:${format(date, "mm")}`;

const TimelineRow = ({ event }: { event: Flatten<PageProps["events"]> }) => {
  const date = new Date(event.date);

  return (
    <TableRow>
      <ImageCell>
        <Suspense fallback={null}>
          {event?.speaker?.photo?.url ? (
            <img src={event?.speaker?.photo?.url} />
          ) : null}
        </Suspense>
      </ImageCell>
      <TimeCell>
        {getTime(date)} - {getTime(add(date, { minutes: event.duration }))}
      </TimeCell>
      <TableCell>
        {event.kind && event.kind !== GENERAL ? (
          <>
            {event.kind}
            <br />
          </>
        ) : null}
        {event.title}
      </TableCell>
      <AuthorCell>{event?.speaker?.name}</AuthorCell>
    </TableRow>
  );
};

const TimelineSection = (props: { events: PageProps["events"] }) => {
  const [selectedDate, setSelectedDate] = useState(DATES[0]);
  const events = props.events || [];
  const selectedEvents = events.filter((event) =>
    event.date.startsWith(selectedDate)
  );

  if (!events.length) {
    return null;
  }

  return (
    <div style={{ position: "relative" }}>
      <StyledForegroundWrapper>
        <DescriptionCotainer style={{}}>
          <div>
            <H2 whileHover={{ scale: 1.01 }}>Calendario</H2>
            <HR />
          </div>
          <PrimaryStyledLink href="/tickets">
            Obtener
            <br />
            Tickets
          </PrimaryStyledLink>
        </DescriptionCotainer>
        <StyledActionsContainer>
          <StyledActions>
            <StyledButtons>
              {DATES.map((date) => (
                <StyledButton
                  key={date}
                  className={date === selectedDate ? "active" : ""}
                  onClick={() => setSelectedDate(date)}
                >
                  {format(parseISO(date), "EEEE", { locale: esLocale })}{" "}
                  {format(parseISO(date), "d")}
                </StyledButton>
              ))}
            </StyledButtons>
            * Los horarios están sujetos a cambio
          </StyledActions>
        </StyledActionsContainer>
        <CalendarContainer>
          <H3>General</H3>
          <Table>
            <tbody>
              {selectedEvents
                .filter((event) => event.kind !== "workshop")
                .map((event) => (
                  <TimelineRow key={event.title} event={event} />
                ))}
            </tbody>
          </Table>
          <H3>Talleres</H3>
          <Table>
            <tbody>
              {selectedEvents
                .filter((event) => event.kind === "workshop")
                .map((event) => (
                  <TimelineRow key={event.title} event={event} />
                ))}
            </tbody>
          </Table>
        </CalendarContainer>
      </StyledForegroundWrapper>
    </div>
  );
};

export default TimelineSection;
