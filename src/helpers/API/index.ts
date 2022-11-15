import { QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";

import { Entrada } from "../../Components/Cart/CartAtom";
import { accessTokenAtom } from "../auth";
import { useAtomValue, useResetAtom } from "jotai/utils";
import { useEffect } from "react";
import { UserPayload, UserType } from "./types";

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
  return await fetch(input, init);
};

export const useQueryClient = () => {
  const resetLocalReferencedAtom = useResetAtom(accessTokenAtom);
  const accessToken = useAtomValue(accessTokenAtom);
  const { push } = useRouter();
  useEffect(() => {
    fetchReplacement = async (
      input: RequestInfo | URL,
      init?: RequestInit | undefined
    ) => {
      const headers = new Headers(init?.headers);
      if (accessToken !== null) {
        headers.append("Authorization", `Bearer ${accessToken}`);
      }
      headers.append("content-type", "application/json");
      headers.append("x-trace-id", `traceid_${nanoid()}`);
      const res = await window.fetch(input, {
        ...init,
        headers,
      });
      if (res.status === 200) {
        return await res.json();
      }

      if (res.status === 401 && typeof window !== "undefined") {
        resetLocalReferencedAtom();
        void push("/tickets");
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
  }, [accessToken, push, resetLocalReferencedAtom]);
  const queryClient = new QueryClient();
  return queryClient;
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

export const updateMe = async (
  object: Partial<UserPayload>
): Promise<UserType> => {
  return await customFetch(`${API_URL}/users/`, {
    method: "PUT",
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
