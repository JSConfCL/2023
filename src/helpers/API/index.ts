import { QueryClient } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

import { useResetAtom } from "jotai/utils";
import { useEffect, useState } from "react";
import { Entrada } from "../../Components/Cart/CartAtom";
import { accessTokenAtom, getValidToken } from "../auth";
import { UserPayload, UserType, VolunteerPayload, OwnTicket } from "./types";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type ErrorResponse = {
  error: string;
  message: string[];
};

let fetchReplacement:
  | ((input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<any>)
  | undefined;

const customFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<any> => {
  if (typeof fetchReplacement === "function") {
    return await fetchReplacement(input, init);
  }
  const headers = new Headers(init?.headers);
  const token = getValidToken();
  if (token !== null) {
    headers.append("Authorization", `Bearer ${token}`);
  }
  headers.append("content-type", "application/json");
  headers.append("x-trace-id", `traceid_${nanoid()}`);
  headers.append("Accept-Language", `es`);
  headers.append("x-fetch", `raw`);
  return await fetch(input, { ...init, headers });
};

export const useQueryClient = () => {
  const resetLocalReferencedAtom = useResetAtom(accessTokenAtom);
  const [client, setClient] = useState<QueryClient | null>(null);
  const { push } = useRouter();
  useEffect(() => {
    if (!client) {
      setClient(new QueryClient());
    }
    if (typeof fetchReplacement !== "undefined") {
      return;
    }
    fetchReplacement = async (
      input: RequestInfo | URL,
      init?: RequestInit | undefined
    ) => {
      const headers = new Headers(init?.headers);
      const token = getValidToken();
      if (token !== null) {
        headers.append("Authorization", `Bearer ${token}`);
      }
      headers.append("content-type", "application/json");
      headers.append("Accept-Language", `es`);
      headers.append("x-fetch", `replacement`);
      headers.append("x-trace-id", `traceid_${nanoid()}`);
      const res = await window.fetch(input, {
        ...init,
        headers,
      });
      if (res.status >= 200 && res.status < 300) {
        return await res.json();
      }

      if (res.status === 401 && typeof window !== "undefined") {
        resetLocalReferencedAtom();
        void push("/tickets");
        return;
      }

      if (res.status === 422) {
        const response = await res.json();
        return {
          error: response.error as string,
          message: response.message as string[],
        };
      }
      throw new Error("Error");
    };
  }, [client, push, resetLocalReferencedAtom]);
  return client;
};

export const fetchTickets = async (): Promise<Entrada[]> =>
  await customFetch(`${API_URL}/tickets`);

export const createPayment = async (object: {
  gateway: "mercadopago" | "stripe";
  tickets: Array<{ id: string; quantity: number; name: string; email: string }>;
}): Promise<{ paymentUrl: string }> => {
  return await customFetch(`${API_URL}/payments`, {
    method: "POST",
    body: JSON.stringify(object),
  });
};

export const me = async (): Promise<UserType> => {
  return await customFetch(`${API_URL}/users/me`);
};

export const myTickets = async (): Promise<OwnTicket[]> => {
  return await customFetch(`${API_URL}/users/me/tickets`);
};

export const updateMe = async (
  object: Partial<UserPayload>
): Promise<UserType> => {
  return await customFetch(`${API_URL}/users/`, {
    method: "PUT",
    body: JSON.stringify(object),
  });
};

export const subscribeVolunteer = async (
  object: VolunteerPayload
): Promise<void> => {
  return await customFetch(`${API_URL}/subscriptions/volunteer`, {
    method: "POST",
    body: JSON.stringify(object),
  });
};

export const subscribeUser = async (object: {
  email: string;
}): Promise<{ some: string }> => {
  return await customFetch(`${API_URL}/subscriptions`, {
    method: "POST",
    body: JSON.stringify(object),
  });
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
