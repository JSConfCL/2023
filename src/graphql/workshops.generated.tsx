import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type WorkshopsQueryQueryVariables = Types.Exact<{
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type WorkshopsQueryQuery = {
  __typename?: "Query";
  eventCollection?: {
    __typename?: "EventCollection";
    items: Array<{ __typename?: "Event"; slug?: string | null } | null>;
  } | null;
};

export const WorkshopsQueryDocument = gql`
  query WorkshopsQuery($isPreview: Boolean = false) {
    eventCollection(where: { kind: "workshop" }, preview: $isPreview) {
      items {
        slug
      }
    }
  }
`;

export function useWorkshopsQueryQuery(
  options?: Omit<Urql.UseQueryArgs<WorkshopsQueryQueryVariables>, "query">
) {
  return Urql.useQuery<WorkshopsQueryQuery, WorkshopsQueryQueryVariables>({
    query: WorkshopsQueryDocument,
    ...options,
  });
}
