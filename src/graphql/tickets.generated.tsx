import * as Types from "../types.js";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type TicketsQueryQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
  locale: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type TicketsQueryQuery = {
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
        extendedDescription?: {
          __typename?: "WhyBlockExtendedDescription";
          json: any;
        } | null;
        icon?: {
          __typename?: "Asset";
          url?: string | null;
          description?: string | null;
        } | null;
        fullImage?: {
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

export const TicketsQueryDocument = gql`
  query TicketsQuery(
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
      seo {
        title
        description
        metadata
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
          extendedDescription {
            json
          }
          icon {
            url
            description
          }
          fullImage {
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

export function useTicketsQueryQuery(
  options: Omit<Urql.UseQueryArgs<TicketsQueryQueryVariables>, "query">
) {
  return Urql.useQuery<TicketsQueryQuery, TicketsQueryQueryVariables>({
    query: TicketsQueryDocument,
    ...options,
  });
}
