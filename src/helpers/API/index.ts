import { QueryClient } from "@tanstack/react-query";
import { Entrada } from "../../Components/Cart/CartAtom";
import { getValidToken } from "../auth";
import { nanoid } from "nanoid";

export const queryClient = new QueryClient();

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const customFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const accessToken = getValidToken();
  const headers = new Headers(init?.headers);
  if (accessToken !== null) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }
  headers.append("content-type", "application/json");
  headers.append("x-trace-id", `traceid_${nanoid()}`);
  const res = await fetch(input, {
    ...init,
    headers,
  });
  if (res.status === 200) {
    return await res.json();
  }
  if (res.status === 401) {
    throw new Error("Unauthorized");
  }
  throw new Error("Error");
};

export const fetchTickets = async (): Promise<Entrada[]> => {
  return await customFetch(`${API_URL}/tickets`);
};

export const createPayment = async (object: {
  gateway: "mercadopago" | "stripe";
  tickets: Array<{ id: string; quantity: number; name: string; email: string }>;
}): Promise<{ paymentUrl: string }> => {
  return await customFetch(`${API_URL}/payments`, {
    method: "POST",
    body: JSON.stringify(object),
  });
};

type UserType = {
  company: null | string;
  country: null | string;
  email: null | string;
  gender: null | string;
  id: string;
  name: null | string;
  photo: null | string;
  position: null | string;
  provider: null | string;
  providerId: null | string;
  seniority: null | string;
  username: null | string;
  year: null | number;
};

export interface UserPayload {
  photo: string;
  name: string;
  username: string;
  email: string;
  country: string;
  company: string;
  position: string;
  seniority: string;
  year: number | string;
  gender: string;
}

export const me = async (): Promise<UserType> => {
  return await customFetch(`${API_URL}/users/me`);
};

export const updateMe = async (object: UserPayload): Promise<UserType> => {
  const json = await customFetch(`${API_URL}/users/`, {
    method: "PUT",
    body: JSON.stringify(object),
  });
  return json.updatedPost;
};

export const finishGithubLogin = async ({
  code,
}: {
  code: string;
}): Promise<{
  token: string;
  user: UserType;
}> => {
  return await customFetch(`${API_URL}/auth/github/callback?code=${code}`);
};
export const finishGoogleLogin = async ({
  code,
}: {
  code: string;
}): Promise<{
  token: string;
  user: UserType;
}> => {
  return await customFetch(`${API_URL}/auth/google/callback?code=${code}`);
};
