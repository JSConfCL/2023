import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SpeakersQueryVariables = Types.Exact<{
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type SpeakersQuery = {
  __typename?: "Query";
  speakerCollection?: {
    __typename?: "SpeakerCollection";
    items: Array<{
      __typename?: "Speaker";
      slug?: string | null;
      name?: string | null;
    } | null>;
  } | null;
};

export const SpeakersDocument = gql`
  query Speakers($isPreview: Boolean = false) {
    speakerCollection(preview: $isPreview) {
      items {
        slug
        name
      }
    }
  }
`;

export function useSpeakersQuery(
  options?: Omit<Urql.UseQueryArgs<SpeakersQueryVariables>, "query">
) {
  return Urql.useQuery<SpeakersQuery, SpeakersQueryVariables>({
    query: SpeakersDocument,
    ...options,
  });
}
