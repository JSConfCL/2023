import * as Types from "../../types";

import gql from "graphql-tag";
import * as Urql from "urql";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type AssetCollectionQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type AssetCollectionQuery = {
  __typename?: "Query";
  assetCollection?: {
    __typename?: "AssetCollection";
    total: number;
    skip: number;
    limit: number;
    items: Array<{
      __typename?: "Asset";
      contentfulMetadata: {
        __typename?: "ContentfulMetadata";
        tags: Array<{
          __typename?: "ContentfulTag";
          id?: string | null;
          name?: string | null;
        } | null>;
      };
    } | null>;
  } | null;
};

export const AssetCollectionDocument = gql`
  query AssetCollection {
    assetCollection {
      total
      skip
      limit
      items {
        contentfulMetadata {
          tags {
            id
            name
          }
        }
      }
    }
  }
`;

export function useAssetCollectionQuery(
  options?: Omit<Urql.UseQueryArgs<AssetCollectionQueryVariables>, "query">
) {
  return Urql.useQuery<AssetCollectionQuery>({
    query: AssetCollectionDocument,
    ...options,
  });
}
