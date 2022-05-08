import { createClient } from "urql";

export const urlQlient = createClient({
  url: process.env.NEXT_PUBLIC_CONTENTFUL_API_GRAPHQL!,
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY}`,
    },
  },
});
