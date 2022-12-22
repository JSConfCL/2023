import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PoliticasDePrivacidadPageQueryVariables = Types.Exact<{
  locale: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type PoliticasDePrivacidadPageQuery = {
  __typename?: "Query";
  page?: {
    __typename?: "Page";
    contentCollection?: {
      __typename?: "PageContentCollection";
      items: Array<
        | { __typename: "Event" }
        | { __typename: "FollowUsBlock" }
        | { __typename: "Footer" }
        | { __typename: "HeroBlock" }
        | { __typename: "HowBlock" }
        | {
            __typename: "MarkdownBlock";
            description?: string | null;
            markdownTextContent?: string | null;
            sys: { __typename?: "Sys"; id: string };
          }
        | { __typename: "SpeakerBlock" }
        | { __typename: "SponsorType" }
        | { __typename: "SubscribeBlock" }
        | { __typename: "TeamBlock" }
        | { __typename: "WhyBlock" }
        | null
      >;
    } | null;
  } | null;
};

export const PoliticasDePrivacidadPageDocument = gql`
  query PoliticasDePrivacidadPage(
    $locale: String!
    $isPreview: Boolean = false
  ) {
    page(id: "53L43SORrqnSUGQswxUCtn", locale: $locale, preview: $isPreview) {
      contentCollection(limit: 20) {
        items {
          __typename
          ... on MarkdownBlock {
            sys {
              id
            }
            description
            markdownTextContent
          }
        }
      }
    }
  }
`;

export function usePoliticasDePrivacidadPageQuery(
  options: Omit<
    Urql.UseQueryArgs<PoliticasDePrivacidadPageQueryVariables>,
    "query"
  >
) {
  return Urql.useQuery<
    PoliticasDePrivacidadPageQuery,
    PoliticasDePrivacidadPageQueryVariables
  >({ query: PoliticasDePrivacidadPageDocument, ...options });
}
