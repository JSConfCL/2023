import { QueryClient } from "@tanstack/react-query";
import { Entrada } from "../../Components/Cart/CartAtom";
import { getValidToken } from "../auth";

export const queryClient = new QueryClient();

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const customFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const accessToken = getValidToken();
  const headers = new Headers();
  if (accessToken !== null) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }
  return await fetch(input, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...init?.headers,
    },
  });
};

export const fetchTickets = async (): Promise<Entrada[]> => {
  const res = await customFetch(`${API_URL}/tickets`);
  return await res.json();
};

export const createPayment = async (object: {
  gateway: "mercadopago" | "stripe";
  tickets: Array<{ id: string; quantity: number; name: string; email: string }>;
}): Promise<{ paymentUrl: string }> => {
  const res = await customFetch(`${API_URL}/payments`, {
    method: "POST",
    body: JSON.stringify(object),
  });
  return await res.json();
};

export const me = async (): Promise<{
  token: string;
  user: any;
}> => {
  const res = await customFetch(`${API_URL}/users/me`);
  if (res.status === 200) {
    return await res.json();
  } else {
    throw new Error("Token exchange error");
  }
};

export const finishGithubLogin = async ({
  code,
}: {
  code: string;
}): Promise<{
  token: string;
  user: any;
}> => {
  const res = await customFetch(`${API_URL}/auth/github/callback?code=${code}`);
  if (res.status === 200) {
    return await res.json();
  } else {
    throw new Error("Token exchange error");
  }
};
export const finishGoogleLogin = async ({
  code,
}: {
  code: string;
}): Promise<{
  token: string;
  user: any;
}> => {
  const res = await customFetch(`${API_URL}/auth/google/callback?code=${code}`);
  if (res.status === 200) {
    return await res.json();
  } else {
    throw new Error("Token exchange error");
  }
};
