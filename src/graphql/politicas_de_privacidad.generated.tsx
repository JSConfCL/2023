import * as Types from "../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PoliticasDePrivacidadPageQueryVariables = Types.Exact<{
  locale: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type PoliticasDePrivacidadPageQuery = {
  __typename?: "Query";
  page?: {
    __typename?: "Page";
    navBar?: {
      __typename?: "NavigationBar";
      linksCollection?: {
        __typename?: "NavigationBarLinksCollection";
        items: Array<{
          __typename?: "LinkItem";
          contenido?: string | null;
          link?: string | null;
          isBlank?: boolean | null;
          sys: { __typename?: "Sys"; id: string };
        } | null>;
      } | null;
      buttonsCollection?: {
        __typename?: "NavigationBarButtonsCollection";
        items: Array<{
          __typename?: "LinkItem";
          contenido?: string | null;
          link?: string | null;
        } | null>;
      } | null;
      description?: {
        __typename?: "NavigationBarDescription";
        json: any;
      } | null;
    } | null;
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
      navBar {
        linksCollection(limit: 20) {
          items {
            sys {
              id
            }
            contenido
            link
            isBlank
          }
        }
        buttonsCollection(limit: 20) {
          items {
            contenido
            link
          }
        }
        description {
          json
        }
      }
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
