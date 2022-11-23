import * as Types from "../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type VolunteerQueryQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
  locale: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type VolunteerQueryQuery = {
  __typename?: "Query";
  page?: {
    __typename?: "Page";
    heroBlock?: {
      __typename?: "HeroBlock";
      tile?: string | null;
      firstSubtitle?: string | null;
      secondSubtitle?: string | null;
      date?: string | null;
      ctaUrl?: string | null;
      ctaText?: string | null;
      description?: { __typename?: "HeroBlockDescription"; json: any } | null;
      background?: {
        __typename?: "Asset";
        title?: string | null;
        url?: string | null;
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
          sys: { __typename?: "Sys"; id: string };
        } | null>;
      } | null;
    } | null;
    seo?: {
      __typename?: "Seo";
      title?: string | null;
      description?: string | null;
      metadata?: any | null;
    } | null;
  } | null;
};

export const VolunteerQueryDocument = gql`
  query VolunteerQuery(
    $id: String!
    $locale: String!
    $isPreview: Boolean = false
  ) {
    page(id: $id, locale: $locale, preview: $isPreview) {
      heroBlock {
        tile
        firstSubtitle
        secondSubtitle
        description {
          json
        }
        date
        ctaUrl
        ctaText
        background {
          title
          url
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
      seo {
        title
        description
        metadata
      }
    }
  }
`;

export function useVolunteerQueryQuery(
  options: Omit<Urql.UseQueryArgs<VolunteerQueryQueryVariables>, "query">
) {
  return Urql.useQuery<VolunteerQueryQuery, VolunteerQueryQueryVariables>({
    query: VolunteerQueryDocument,
    ...options,
  });
}
