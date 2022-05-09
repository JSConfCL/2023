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
  noBackgroundDarkLogo?: {
    __typename?: "Asset";
    url?: string | null;
    width?: number | null;
    sys: { __typename?: "Sys"; id: string };
  } | null;
  noBackgroundLightLogo?: {
    __typename?: "Asset";
    url?: string | null;
    width?: number | null;
    sys: { __typename?: "Sys"; id: string };
  } | null;
  whyBlockCollection?: {
    __typename?: "WhyBlockCollection";
    items: Array<{
      __typename?: "WhyBlock";
      title?: string | null;
      description?: { __typename?: "WhyBlockDescription"; json: any } | null;
      icon?: {
        __typename?: "Asset";
        url?: string | null;
        description?: string | null;
      } | null;
    } | null>;
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
    noBackgroundDarkLogo: asset(id: "6ECA1Y0dtDKiFr7VD6Dg1o") {
      sys {
        id
      }
      url
      width
    }
    noBackgroundLightLogo: asset(id: "1dQDBBpssnGVVO8TtxBlVf") {
      sys {
        id
      }
      url
      width
    }
    whyBlockCollection {
      items {
        title
        description {
          json
        }
        icon {
          url
          description
        }
      }
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
