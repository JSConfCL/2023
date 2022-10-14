import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchTickets = async () => {
  const res = await fetch(`${API_URL}/tickets`);
  return res.json();
};
