import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchTickets = async (): Promise<
  Array<{
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
  }>
> => {
  const res = await fetch(`${API_URL}/tickets`);
  return res.json();
};
