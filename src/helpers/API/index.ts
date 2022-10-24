import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const customFetch = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  return fetch(input, { ...init, headers: { ...init?.headers } });
};

export type Entrada = {
  createdAt: string;
  description: string;
  id: string;
  name: string;
  price: number;
  priceUSD: number;
  quantity: number;
  season: string;
  status: string;
  stripePriceId: string;
  type: string;
  updatedAt: string;
};

export const fetchTickets = async (): Promise<Array<Entrada>> => {
  const res = await fetch(`${API_URL}/tickets`);
  return res.json();
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

export const useQuery = () => {};
