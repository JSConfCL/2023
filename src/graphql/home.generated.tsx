import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type HomeQueryQueryVariables = Types.Exact<{
  locale: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type HomeQueryQuery = {
  __typename?: "Query";
  page?: {
    __typename?: "Page";
    flags?: any | null;
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
      secondButton?: {
        __typename?: "LinkItem";
        link?: string | null;
        contenido?: string | null;
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
          companyName?: string | null;
          slug?: string | null;
          sys: { __typename?: "Sys"; id: string };
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
    teamBlock?: {
      __typename?: "TeamBlock";
      title?: string | null;
      membersCollection?: {
        __typename?: "TeamBlockMembersCollection";
        items: Array<{
          __typename?: "Member";
          name?: string | null;
          type?: string | null;
          twitter?: string | null;
          photo?: { __typename?: "Asset"; url?: string | null } | null;
        } | null>;
      } | null;
      description?: { __typename?: "TeamBlockDescription"; json: any } | null;
      callToAction?: {
        __typename?: "LinkItem";
        contenido?: string | null;
        link?: string | null;
      } | null;
    } | null;
    eventsCollection?: {
      __typename?: "PageEventsCollection";
      items: Array<{
        __typename?: "Event";
        title?: string | null;
        date?: any | null;
        duration?: number | null;
        language?: string | null;
        kind?: string | null;
        sys: { __typename?: "Sys"; id: string };
        description?: { __typename?: "EventDescription"; json: any } | null;
        speaker?: {
          __typename?: "Speaker";
          name?: string | null;
          slug?: string | null;
          photo?: { __typename?: "Asset"; url?: string | null } | null;
        } | null;
      } | null>;
    } | null;
    communityFriendsCollection?: {
      __typename?: "PageCommunityFriendsCollection";
      items: Array<{
        __typename?: "FriendCommunity";
        name?: string | null;
        link?: string | null;
        image?: {
          __typename?: "Asset";
          title?: string | null;
          url?: string | null;
        } | null;
      } | null>;
    } | null;
    sponsorTypeCollection?: {
      __typename?: "PageSponsorTypeCollection";
      items: Array<{
        __typename?: "SponsorType";
        name?: string | null;
        sys: { __typename?: "Sys"; id: string };
        contributorsCollection?: {
          __typename?: "SponsorTypeContributorsCollection";
          items: Array<{
            __typename?: "SponsorBlock";
            imageParamsMobile?: string | null;
            imageParamsDesktop?: string | null;
            externalLink?: string | null;
            slug?: string | null;
            sys: { __typename?: "Sys"; id: string };
            title?: { __typename?: "SponsorBlockTitle"; json: any } | null;
            image?: { __typename?: "Asset"; url?: string | null } | null;
          } | null>;
        } | null;
      } | null>;
    } | null;
  } | null;
};

export const HomeQueryDocument = gql`
  query HomeQuery($locale: String!, $isPreview: Boolean = false) {
    page(id: "FTZMMTIKuOMTvkVv0DGzs", locale: $locale, preview: $isPreview) {
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
        secondButton {
          link
          contenido
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
      speakersBlock(preview: $isPreview) {
        title
        description {
          json
        }
        speakersCollection(preview: $isPreview) {
          items {
            sys {
              id
            }
            name
            position
            photo {
              url
              description
            }
            cardType
            type
            companyName
            slug
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
      teamBlock {
        membersCollection {
          items {
            name
            type
            twitter
            photo {
              url
            }
          }
        }
        title
        description {
          json
        }
        callToAction {
          contenido
          link
        }
      }
      eventsCollection {
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
          speaker {
            name
            photo {
              url
            }
            slug
          }
        }
      }
      communityFriendsCollection(limit: 20) {
        items {
          name
          image {
            title
            url
          }
          link
        }
      }
      sponsorTypeCollection(limit: 20) {
        items {
          sys {
            id
          }
          name
          contributorsCollection(limit: 20) {
            items {
              sys {
                id
              }
              title {
                json
              }
              image {
                url
              }
              imageParamsMobile
              imageParamsDesktop
              externalLink
              slug
            }
          }
        }
      }
      flags
    }
  }
`;

export function useHomeQueryQuery(
  options: Omit<Urql.UseQueryArgs<HomeQueryQueryVariables>, "query">
) {
  return Urql.useQuery<HomeQueryQuery, HomeQueryQueryVariables>({
    query: HomeQueryDocument,
    ...options,
  });
}
