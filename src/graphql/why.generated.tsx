import * as Types from "../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type WhyQueryQueryVariables = Types.Exact<{ [key: string]: never }>;

export type WhyQueryQuery = {
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
          sys: { __typename?: "Sys"; id: string };
        } | null>;
      } | null;
    } | null;
    heroBlock?: {
      __typename?: "HeroBlock";
      tile?: string | null;
      firstSubtitle?: string | null;
      secondSubtitle?: string | null;
      date?: string | null;
      ctaUrl?: string | null;
      ctaText?: string | null;
      background?: {
        __typename?: "Asset";
        title?: string | null;
        url?: string | null;
      } | null;
    } | null;
    whyBlockCollection?: {
      __typename?: "PageWhyBlockCollection";
      items: Array<{
        __typename?: "WhyBlock";
        title?: string | null;
        description?: { __typename?: "WhyBlockDescription"; json: any } | null;
        icon?: {
          __typename?: "Asset";
          url?: string | null;
          description?: string | null;
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
};

export const WhyQueryDocument = gql`
  query WhyQuery {
    page(id: "7rT5EZIWOXMxoy8151P9WL", locale: "es-CL") {
      navBar {
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
      heroBlock {
        tile
        firstSubtitle
        secondSubtitle
        date
        ctaUrl
        ctaText
        background {
          title
          url
        }
      }
      whyBlockCollection {
        items {
          title
          description {
            json
          }
          icon {
            url
            description
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

export function useWhyQueryQuery(
  options?: Omit<Urql.UseQueryArgs<WhyQueryQueryVariables>, "query">
) {
  return Urql.useQuery<WhyQueryQuery>({ query: WhyQueryDocument, ...options });
}
