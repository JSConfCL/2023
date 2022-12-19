import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type FaqQueryVariables = Types.Exact<{
  locale: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
  id: Types.Scalars["String"];
}>;

export type FaqQuery = {
  __typename?: "Query";
  page?: {
    __typename?: "Page";
    seo?: {
      __typename?: "Seo";
      title?: string | null;
      description?: string | null;
      metadata?: any | null;
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

export const FaqDocument = gql`
  query FAQ($locale: String!, $isPreview: Boolean = false, $id: String!) {
    page(id: $id, locale: $locale, preview: $isPreview) {
      seo {
        title
        description
        metadata
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

export function useFaqQuery(
  options: Omit<Urql.UseQueryArgs<FaqQueryVariables>, "query">
) {
  return Urql.useQuery<FaqQuery, FaqQueryVariables>({
    query: FaqDocument,
    ...options,
  });
}
