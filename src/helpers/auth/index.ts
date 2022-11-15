import { atom } from "jotai";
import { selectAtom, RESET } from "jotai/utils";
import decode, { JwtPayload } from "jwt-decode";

export const AUTHENTICATION_LOCALSTORAGE_KEY = "jsconfcl.auth.token.v1";

const accessTokenReferenceAtom = atom<null | string>(null);

export const accessTokenAtom = atom(
  (get) => get(accessTokenReferenceAtom),
  (get, set, newToken: string | null | typeof RESET) => {
    if (newToken === RESET || newToken === null) {
      localStorage.removeItem(AUTHENTICATION_LOCALSTORAGE_KEY);
      set(accessTokenReferenceAtom, null);
    } else {
      localStorage.setItem(AUTHENTICATION_LOCALSTORAGE_KEY, newToken);
      set(accessTokenReferenceAtom, newToken);
    }
  }
);

const fiveMinutesInMiliseconds = 1000 * 60 * 5;
const isTokenValid = (token: string) => {
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
  if (!token) {
    return null;
  }
  if (isTokenValid(token)) {
    // Eso quiere decir que lo que sacamos de localstorage es un token valido.
    return token;
  } else {
    return null;
  }
};
accessTokenAtom.onMount = (setAtom) => {
  const token = getValidToken();
  setAtom(token);
};

export const isAuthenticatedAtom = atom((get) => {
  const rawToken = get(accessTokenAtom);
  return Boolean(rawToken);
});

export const accessTokenPureAtom = selectAtom(
  accessTokenAtom,
  (accessToken) => accessToken
);
