import { QueryClient } from "@tanstack/react-query";
import { Entrada } from "../../Components/Cart/CartAtom";
import { getValidToken } from "../auth";

export const queryClient = new QueryClient();

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const customFetch = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  return fetch(input, { ...init, headers: { ...init?.headers } });
};

export const fetchTickets = async (): Promise<Array<Entrada>> => {
  const res = await fetch(`${API_URL}/tickets`);
  return res.json();
};

export const createPayment = async (object: {
  gateway: "mercadopago" | "stripe";
  tickets: { id: string; quantity: number; name: string; email: string }[];
}): Promise<{ paymentUrl: string }> => {
  const accessToken = getValidToken();
  const res = await fetch(`${API_URL}/payments`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify(object),
  });
  return res.json();
};

export const me = async (): Promise<{
  token: string;
  user: any;
}> => {
  const res = await fetch(`${API_URL}/users/me`);
  if (res.status === 200) {
    return res.json();
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
  const res = await fetch(`${API_URL}/auth/github/callback?code=${code}`);
  if (res.status === 200) {
    return res.json();
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
  const res = await fetch(`${API_URL}/auth/google/callback?code=${code}`);
  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error("Token exchange error");
  }
};

export const useQuery = () => {};
