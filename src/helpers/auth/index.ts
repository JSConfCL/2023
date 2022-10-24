import { atom, useAtom } from "jotai";
import decode, { JwtPayload } from "jwt-decode";

export const AUTHENTICATION_LOCALSTORAGE_KEY = "jsconfcl.auth.token";

const accessTokenReferenceAtom = atom<null | string>(null);

export const accessTokenAtom = atom(
  (get) => get(accessTokenReferenceAtom),
  (get, set, newStr: string | null) => {
    set(accessTokenReferenceAtom, newStr);
    if (newStr) {
      localStorage.setItem(AUTHENTICATION_LOCALSTORAGE_KEY, newStr);
    } else {
      localStorage.removeItem(AUTHENTICATION_LOCALSTORAGE_KEY);
    }
  }
);

const fiveMinutesInMiliseconds = 1000 * 60 * 5;
const isTokenValid = (token: string | null) => {
  if (!token) {
    return false;
  }
  try {
    const { exp: expiration } = decode<JwtPayload>(token);
    if (
      typeof expiration === "number" &&
      expiration * 1000 <= Date.now() + fiveMinutesInMiliseconds
    ) {
      // Vamos a considerar 5 minutos de tiempo de gracia.
      // Si la hora actual, más 5 minutos, es mayor que la fecha de expiración, entonces consideramos el token como expirado.
      return false;
    } else {
      return true;
    }
  } catch (e) {
    // Si el parseo
    // Si la hora actual, más 5 minutos, es mayor que la fecha de expiración, entonces consideramos el token como expirado.
    return false;
  }
};
accessTokenAtom.onMount = (setAtom) => {
  const token = localStorage.getItem(AUTHENTICATION_LOCALSTORAGE_KEY);
  if (isTokenValid(token)) {
    // Eso quiere decir que lo que sacamos de localstorage es un token valido.
    setAtom(token as string);
  } else {
    setAtom(null);
  }
};

export const isAuthenticatedAtom = atom((get) => Boolean(get(accessTokenAtom)));
