import * as Types from "../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type HomeQueryQueryVariables = Types.Exact<{ [key: string]: never }>;

export type HomeQueryQuery = {
  __typename?: "Query";
  darkLogo?: {
    __typename?: "Asset";
    url?: string | null;
    width?: number | null;
    sys: { __typename?: "Sys"; id: string };
  } | null;
  yellowLogo?: {
    __typename?: "Asset";
    url?: string | null;
    width?: number | null;
    sys: { __typename?: "Sys"; id: string };
  } | null;
};

export const HomeQueryDocument = gql`
  query HomeQuery {
    darkLogo: asset(id: "6WRwV3LQrvpKVwHm9NQnNn") {
      sys {
        id
      }
      url
      width
    }
    yellowLogo: asset(id: "7vS6nB42b1ciyNfwcjmnWN") {
      sys {
        id
      }
      url
      width
    }
  }
`;

export function useHomeQueryQuery(
  options?: Omit<Urql.UseQueryArgs<HomeQueryQueryVariables>, "query">
) {
  return Urql.useQuery<HomeQueryQuery>({
    query: HomeQueryDocument,
    ...options,
  });
}
