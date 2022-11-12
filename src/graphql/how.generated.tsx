import * as Types from "../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type HowQueryQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
  locale: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export interface HowQueryQuery {
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
    seo?: {
      __typename?: "Seo";
      title?: string | null;
      description?: string | null;
      metadata?: any | null;
    } | null;
    howBlockCollection?: {
      __typename?: "PageHowBlockCollection";
      items: Array<{
        __typename?: "HowBlock";
        title?: string | null;
        description?: { __typename?: "HowBlockDescription"; json: any } | null;
        image?: {
          __typename?: "Asset";
          url?: string | null;
          description?: string | null;
        } | null;
        sectionsCollection?: {
          __typename?: "HowBlockSectionsCollection";
          items: Array<{
            __typename?: "LineBlock";
            title?: string | null;
            subtext?: string | null;
            url?: string | null;
            description?: {
              __typename?: "LineBlockDescription";
              json: any;
            } | null;
            button?: {
              __typename?: "LinkItem";
              link?: string | null;
              contenido?: string | null;
            } | null;
            mapa?: {
              __typename?: "Location";
              lat?: number | null;
              lon?: number | null;
            } | null;
            image?: {
              __typename?: "Asset";
              url?: string | null;
              title?: string | null;
            } | null;
          } | null>;
        } | null;
      } | null>;
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
          sys: { __typename?: "Sys"; id: string };
        } | null>;
      } | null;
    } | null;
  } | null;
}

export const HowQueryDocument = gql`
  query HowQuery($id: String!, $locale: String!, $isPreview: Boolean = false) {
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
      seo {
        title
        description
        metadata
      }
      howBlockCollection(limit: 10) {
        items {
          title
          description {
            json
          }
          image {
            url
            description
          }
          sectionsCollection(limit: 20) {
            items {
              title
              subtext
              description {
                json
              }
              button {
                link
                contenido
              }
              mapa {
                lat
                lon
              }
              url
              image {
                url
                title
              }
              mapa {
                lat
                lon
              }
            }
          }
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
          }
        }
      }
    }
  }
`;

export function useHowQueryQuery(
  options: Omit<Urql.UseQueryArgs<HowQueryQueryVariables>, "query">
) {
  return Urql.useQuery<HowQueryQuery, HowQueryQueryVariables>({
    query: HowQueryDocument,
    ...options,
  });
}
