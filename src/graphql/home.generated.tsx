import * as Types from "../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type HomeQueryQueryVariables = Types.Exact<{ [key: string]: never }>;

export type HomeQueryQuery = {
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
        fullImage?: {
          __typename?: "Asset";
          url?: string | null;
          description?: string | null;
        } | null;
      } | null>;
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
    speakersBlock?: {
      __typename?: "SpeakerBlock";
      title?: string | null;
      description?: {
        __typename?: "SpeakerBlockDescription";
        json: any;
      } | null;
      speakersCollection?: {
        __typename?: "SpeakerBlockSpeakersCollection";
        items: Array<{
          __typename?: "Speaker";
          name?: string | null;
          position?: string | null;
          cardType?: string | null;
          type?: string | null;
          photo?: {
            __typename?: "Asset";
            url?: string | null;
            description?: string | null;
          } | null;
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
    subscribeBlock?: {
      __typename?: "SubscribeBlock";
      title?: string | null;
    } | null;
  } | null;
};

export const HomeQueryDocument = gql`
  query HomeQuery {
    page(id: "FTZMMTIKuOMTvkVv0DGzs", locale: "es-CL") {
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
          fullImage {
            url
            description
          }
        }
      }
      howBlockCollection {
        items {
          title
          description {
            json
          }
          image {
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
      speakersBlock {
        title
        description {
          json
        }
        speakersCollection {
          items {
            name
            position
            photo {
              url
              description
            }
            cardType
            type
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
      subscribeBlock {
        title
      }
    }
  }
`;

export function useHomeQueryQuery(
  options?: Omit<Urql.UseQueryArgs<HomeQueryQueryVariables>, "query">
) {
  return Urql.useQuery<HomeQueryQuery>({
    query: HomeQueryDocument,
    ...options,
  });
}
