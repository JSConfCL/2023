import * as Types from "../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type FooterQueryQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
  locale: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type FooterQueryQuery = {
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
    followUsBlock?: {
      __typename?: "FollowUsBlock";
      title?: string | null;
      socialNetworksCollection?: {
        __typename?: "FollowUsBlockSocialNetworksCollection";
        items: Array<{
          __typename?: "SocialNetwork";
          name?: string | null;
          url?: string | null;
          icon?: { __typename?: "Asset"; url?: string | null } | null;
        } | null>;
      } | null;
    } | null;
    footer?: {
      __typename?: "Footer";
      linksCollection?: {
        __typename?: "FooterLinksCollection";
        items: Array<{
          __typename?: "LinkItem";
          contenido?: string | null;
          link?: string | null;
          isBlank?: boolean | null;
          sys: { __typename?: "Sys"; id: string };
        } | null>;
      } | null;
    } | null;
    subscribeBlock?: {
      __typename?: "SubscribeBlock";
      title?: string | null;
    } | null;
  } | null;
};

export const FooterQueryDocument = gql`
  query FooterQuery(
    $id: String!
    $locale: String!
    $isPreview: Boolean = false
  ) {
    page(id: $id, locale: $locale, preview: $isPreview) {
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
      followUsBlock {
        title
        socialNetworksCollection(limit: 20) {
          items {
            name
            url
            icon {
              url
            }
          }
        }
      }
      footer {
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
      }
      subscribeBlock {
        title
      }
    }
  }
`;

export function useFooterQueryQuery(
  options: Omit<Urql.UseQueryArgs<FooterQueryQueryVariables>, "query">
) {
  return Urql.useQuery<FooterQueryQuery, FooterQueryQueryVariables>({
    query: FooterQueryDocument,
    ...options,
  });
}
