import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SponsorDetailsQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type SponsorDetailsQuery = {
  __typename?: "Query";
  sponsorBlockCollection?: {
    __typename?: "SponsorBlockCollection";
    items: Array<{
      __typename?: "SponsorBlock";
      slug?: string | null;
      name?: string | null;
      externalLink?: string | null;
      textColor?: string | null;
      bgColor?: string | null;
      navColor?: string | null;
      effectColors?: Array<string | null> | null;
      description?: {
        __typename?: "SponsorBlockDescription";
        json: any;
      } | null;
      image?: { __typename?: "Asset"; url?: string | null } | null;
    } | null>;
  } | null;
};

export const SponsorDetailsDocument = gql`
  query SponsorDetails($id: String!, $isPreview: Boolean = false) {
    sponsorBlockCollection(where: { slug: $id }, preview: $isPreview) {
      items {
        slug
        name
        description {
          json
        }
        image {
          url
        }
        externalLink
        textColor
        bgColor
        navColor
        effectColors
      }
    }
  }
`;

export function useSponsorDetailsQuery(
  options: Omit<Urql.UseQueryArgs<SponsorDetailsQueryVariables>, "query">
) {
  return Urql.useQuery<SponsorDetailsQuery, SponsorDetailsQueryVariables>({
    query: SponsorDetailsDocument,
    ...options,
  });
}
