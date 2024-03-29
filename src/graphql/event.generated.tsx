import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EventQueryVariables = Types.Exact<{
  locale: Types.Scalars["String"];
  id: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type EventQuery = {
  __typename?: "Query";
  page?: {
    __typename?: "Page";
    name?: string | null;
    subtitle?: string | null;
    flags?: any | null;
    seo?: {
      __typename?: "Seo";
      title?: string | null;
      description?: string | null;
      metadata?: any | null;
    } | null;
    heroBlock?: {
      __typename?: "HeroBlock";
      firstSubtitle?: string | null;
      secondSubtitle?: string | null;
    } | null;
    whyBlockCollection?: {
      __typename?: "PageWhyBlockCollection";
      items: Array<{
        __typename?: "WhyBlock";
        title?: string | null;
        description?: { __typename?: "WhyBlockDescription"; json: any } | null;
      } | null>;
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
        includesTranslation?: boolean | null;
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
            sys: { __typename?: "Sys"; id: string };
            title?: { __typename?: "SponsorBlockTitle"; json: any } | null;
            image?: { __typename?: "Asset"; url?: string | null } | null;
          } | null>;
        } | null;
      } | null>;
    } | null;
  } | null;
};

export const EventDocument = gql`
  query Event($locale: String!, $id: String!, $isPreview: Boolean = false) {
    page(id: $id, locale: $locale, preview: $isPreview) {
      name
      subtitle
      seo {
        title
        description
        metadata
      }
      heroBlock {
        firstSubtitle
        secondSubtitle
      }
      whyBlockCollection {
        items {
          title
          description {
            json
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
          includesTranslation
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
            }
          }
        }
      }
      flags
    }
  }
`;

export function useEventQuery(
  options: Omit<Urql.UseQueryArgs<EventQueryVariables>, "query">
) {
  return Urql.useQuery<EventQuery, EventQueryVariables>({
    query: EventDocument,
    ...options,
  });
}
