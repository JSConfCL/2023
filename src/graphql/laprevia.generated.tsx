import * as Types from "../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type LaPreviaQueryVariables = Types.Exact<{
  locale: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type LaPreviaQuery = {
  __typename?: "Query";
  page?: {
    __typename?: "Page";
    seo?: {
      __typename?: "Seo";
      title?: string | null;
      description?: string | null;
      metadata?: any | null;
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
        sys: { __typename?: "Sys"; id: string };
        speaker?: {
          __typename?: "Speaker";
          name?: string | null;
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
            sys: { __typename?: "Sys"; id: string };
            title?: { __typename?: "SponsorBlockTitle"; json: any } | null;
            image?: { __typename?: "Asset"; url?: string | null } | null;
          } | null>;
        } | null;
      } | null>;
    } | null;
  } | null;
};

export const LaPreviaDocument = gql`
  query LaPrevia($locale: String!, $isPreview: Boolean = false) {
    page(id: "2wAn9UxGwc1bgUTOOT4SPW", locale: $locale, preview: $isPreview) {
      seo {
        title
        description
        metadata
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
          speaker {
            name
            photo {
              url
            }
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
            }
          }
        }
      }
    }
  }
`;

export function useLaPreviaQuery(
  options: Omit<Urql.UseQueryArgs<LaPreviaQueryVariables>, "query">
) {
  return Urql.useQuery<LaPreviaQuery, LaPreviaQueryVariables>({
    query: LaPreviaDocument,
    ...options,
  });
}
