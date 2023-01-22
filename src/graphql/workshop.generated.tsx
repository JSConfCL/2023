import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type WorkshopQueryQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type WorkshopQueryQuery = {
  __typename?: "Query";
  eventCollection?: {
    __typename?: "EventCollection";
    items: Array<{
      __typename?: "Event";
      title?: string | null;
      date?: any | null;
      duration?: number | null;
      language?: string | null;
      kind?: string | null;
      ticketId?: string | null;
      sys: { __typename?: "Sys"; id: string };
      description?: { __typename?: "EventDescription"; json: any } | null;
      speaker?: {
        __typename?: "Speaker";
        name?: string | null;
        position?: string | null;
        companyName?: string | null;
        about?: string | null;
        twitter?: string | null;
        github?: string | null;
        web?: string | null;
        linkedin?: string | null;
        sys: { __typename?: "Sys"; id: string };
        photo?: { __typename?: "Asset"; url?: string | null } | null;
      } | null;
    } | null>;
  } | null;
};

export const WorkshopQueryDocument = gql`
  query WorkshopQuery($id: String!, $isPreview: Boolean = false) {
    eventCollection(where: { slug: $id }, preview: $isPreview) {
      items {
        sys {
          id
        }
        title
        date
        duration
        language
        kind
        ticketId
        description {
          json
        }
        speaker {
          sys {
            id
          }
          name
          photo {
            url
          }
          position
          companyName
          about
          twitter
          github
          web
          linkedin
        }
      }
    }
  }
`;

export function useWorkshopQueryQuery(
  options: Omit<Urql.UseQueryArgs<WorkshopQueryQueryVariables>, "query">
) {
  return Urql.useQuery<WorkshopQueryQuery, WorkshopQueryQueryVariables>({
    query: WorkshopQueryDocument,
    ...options,
  });
}
