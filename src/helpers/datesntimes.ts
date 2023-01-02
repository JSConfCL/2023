import { parseISO, add } from "date-fns";
import { format, formatInTimeZone } from "date-fns-tz";
import esLocale from "date-fns/locale/es";

const getTime = (date: Date, timezone: string) => {
  return `${formatInTimeZone(date, timezone, "HH")}:${formatInTimeZone(
    date,
    timezone,
    "mm"
  )}`;
};

export const getFullTime = (date: Date, duration: number, timezone: string) =>
  `${getTime(date, timezone)} - ${getTime(
    add(date, { minutes: duration }),
    timezone
  )}`;

export const getShortDate = (date: string) =>
  `${format(parseISO(date), "EEEE", { locale: esLocale })} ${format(
    parseISO(date),
    "d"
  )}`;

export const getLongDate = (date: string) =>
  `${format(parseISO(date), "EEEE", { locale: esLocale })} ${format(
    parseISO(date),
    "d"
  )}`;

export const CHILE = {
  abbr: "CL",
  title: "Chile",
  timezone: "America/Santiago",
  hasExceptions: true,
};
