import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type WorkshopsListQueryVariables = Types.Exact<{
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type WorkshopsListQuery = {
  __typename?: "Query";
  eventCollection?: {
    __typename?: "EventCollection";
    items: Array<{
      __typename?: "Event";
      slug?: string | null;
      title?: string | null;
      date?: any | null;
      duration?: number | null;
      language?: string | null;
      kind?: string | null;
      ticketId?: string | null;
    } | null>;
  } | null;
};

export const WorkshopsListDocument = gql`
  query WorkshopsList($isPreview: Boolean = false) {
    eventCollection(
      where: { kind: "workshop", slug_exists: true, ticketId_exists: true }
      preview: $isPreview
    ) {
      items {
        slug
        title
        date
        duration
        language
        kind
        ticketId
      }
    }
  }
`;

export function useWorkshopsListQuery(
  options?: Omit<Urql.UseQueryArgs<WorkshopsListQueryVariables>, "query">
) {
  return Urql.useQuery<WorkshopsListQuery, WorkshopsListQueryVariables>({
    query: WorkshopsListDocument,
    ...options,
  });
}
