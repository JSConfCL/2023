import * as Types from "../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type HomeQueryQueryVariables = Types.Exact<{ [key: string]: never }>;

export type HomeQueryQuery = {
  __typename?: "Query";
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
