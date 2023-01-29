import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EventsListQueryVariables = Types.Exact<{
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type EventsListQuery = {
  __typename?: "Query";
  pageCollection?: {
    __typename?: "PageCollection";
    items: Array<{
      __typename?: "Page";
      name?: string | null;
      subtitle?: string | null;
      flags?: any | null;
      sys: { __typename?: "Sys"; id: string };
    } | null>;
  } | null;
};

export const EventsListDocument = gql`
  query EventsList($isPreview: Boolean = false) {
    pageCollection(where: { flags_exists: true }, preview: $isPreview) {
      items {
        sys {
          id
        }
        name
        subtitle
        flags
      }
    }
  }
`;

export function useEventsListQuery(
  options?: Omit<Urql.UseQueryArgs<EventsListQueryVariables>, "query">
) {
  return Urql.useQuery<EventsListQuery, EventsListQueryVariables>({
    query: EventsListDocument,
    ...options,
  });
}
