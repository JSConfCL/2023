import { atom } from "jotai";
import { selectAtom } from "jotai/utils";
import decode, { JwtPayload } from "jwt-decode";

export const AUTHENTICATION_LOCALSTORAGE_KEY = "jsconfcl.auth.token";

export const accessTokenReferenceAtom = atom<null | string>(null);

export const accessTokenAtom = atom(
  (get) => get(accessTokenReferenceAtom),
  (get, set, newStr: string | null) => {
    set(accessTokenReferenceAtom, newStr);
    if (newStr !== null) {
      localStorage.setItem(AUTHENTICATION_LOCALSTORAGE_KEY, newStr);
    } else {
      localStorage.removeItem(AUTHENTICATION_LOCALSTORAGE_KEY);
    }
  }
);

const fiveMinutesInMiliseconds = 1000 * 60 * 5;
const isTokenValid = (token: string | null) => {
  if (token === null) {
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

export const getValidToken = () => {
  const token = localStorage.getItem(AUTHENTICATION_LOCALSTORAGE_KEY);
  if (isTokenValid(token)) {
    // Eso quiere decir que lo que sacamos de localstorage es un token valido.
    return token as string;
  } else {
    return null;
  }
};
accessTokenAtom.onMount = (setAtom) => {
  const token = getValidToken();
  setAtom(token);
};

export const isAuthenticatedAtom = atom((get) => Boolean(get(accessTokenAtom)));

export const accessTokenPureAtom = selectAtom(
  accessTokenAtom,
  (accessToken) => accessToken
);
