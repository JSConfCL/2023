import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SpeakerQueryQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type SpeakerQueryQuery = {
  __typename?: "Query";
  speakerCollection?: {
    __typename?: "SpeakerCollection";
    items: Array<{
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
    } | null>;
  } | null;
  eventCollection?: {
    __typename?: "EventCollection";
    items: Array<{
      __typename?: "Event";
      title?: string | null;
      date?: any | null;
      duration?: number | null;
      language?: string | null;
      kind?: string | null;
      sys: { __typename?: "Sys"; id: string };
      description?: { __typename?: "EventDescription"; json: any } | null;
    } | null>;
  } | null;
};

export const SpeakerQueryDocument = gql`
  query SpeakerQuery($id: String!, $isPreview: Boolean = false) {
    speakerCollection(where: { slug: $id }, preview: true) {
      items {
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
    eventCollection(where: { speaker: { slug: $id } }, preview: $isPreview) {
      items {
        sys {
          id
        }
        title
        date
        duration
        language
        kind
        description {
          json
        }
      }
    }
  }
`;

export function useSpeakerQueryQuery(
  options: Omit<Urql.UseQueryArgs<SpeakerQueryQueryVariables>, "query">
) {
  return Urql.useQuery<SpeakerQueryQuery, SpeakerQueryQueryVariables>({
    query: SpeakerQueryDocument,
    ...options,
  });
}
