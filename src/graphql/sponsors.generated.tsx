import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SponsorsQueryVariables = Types.Exact<{
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type SponsorsQuery = {
  __typename?: "Query";
  sponsorBlockCollection?: {
    __typename?: "SponsorBlockCollection";
    items: Array<{
      __typename?: "SponsorBlock";
      slug?: string | null;
      name?: string | null;
    } | null>;
  } | null;
};

export const SponsorsDocument = gql`
  query Sponsors($isPreview: Boolean = false) {
    sponsorBlockCollection(preview: $isPreview) {
      items {
        slug
        name
      }
    }
  }
`;

export function useSponsorsQuery(
  options?: Omit<Urql.UseQueryArgs<SponsorsQueryVariables>, "query">
) {
  return Urql.useQuery<SponsorsQuery, SponsorsQueryVariables>({
    query: SponsorsDocument,
    ...options,
  });
}
