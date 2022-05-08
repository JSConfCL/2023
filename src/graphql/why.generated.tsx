import * as Types from '../types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type WhyBlockCollectionQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type WhyBlockCollectionQuery = { __typename?: 'Query', whyBlockCollection?: { __typename?: 'WhyBlockCollection', items: Array<{ __typename?: 'WhyBlock', title?: string | null, description?: { __typename?: 'WhyBlockDescription', json: any } | null, icon?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null };


export const WhyBlockCollectionDocument = gql`
    query WhyBlockCollection {
  whyBlockCollection {
    items {
      title
      description {
        json
      }
      icon {
        url
      }
    }
  }
}
    `;

export function useWhyBlockCollectionQuery(options?: Omit<Urql.UseQueryArgs<WhyBlockCollectionQueryVariables>, 'query'>) {
  return Urql.useQuery<WhyBlockCollectionQuery>({ query: WhyBlockCollectionDocument, ...options });
};