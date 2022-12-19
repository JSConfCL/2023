import gql from 'graphql-tag';
import * as Urql from 'urql';

import * as Types from '../../types';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type NavBarQueryQueryVariables = Types.Exact<{
	id: Types.Scalars['String'];
	locale?: Types.InputMaybe<Types.Scalars['String']>;
	isPreview?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;

export type NavBarQueryQuery = {
	__typename?: 'Query';
	navigationBar?: {
		__typename?: 'NavigationBar';
		sys: { __typename?: 'Sys'; id: string };
		linksCollection?: {
			__typename?: 'NavigationBarLinksCollection';
			items: Array<{
				__typename?: 'LinkItem';
				contenido?: string | null;
				link?: string | null;
				isBlank?: boolean | null;
				sys: { __typename?: 'Sys'; id: string };
			} | null>;
		} | null;
		buttonsCollection?: {
			__typename?: 'NavigationBarButtonsCollection';
			items: Array<{
				__typename?: 'LinkItem';
				contenido?: string | null;
				link?: string | null;
			} | null>;
		} | null;
		description?: { __typename?: 'NavigationBarDescription'; json: any } | null;
	} | null;
};

export const NavBarQueryDocument = gql`
	query NavBarQuery(
		$id: String!
		$locale: String = "es-CL"
		$isPreview: Boolean = false
	) {
		navigationBar(id: $id, locale: $locale, preview: $isPreview) {
			sys {
				id
			}
			linksCollection(limit: 20) {
				items {
					sys {
						id
					}
					contenido
					link
					isBlank
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
	}
`;

export function useNavBarQueryQuery(
	options: Omit<Urql.UseQueryArgs<NavBarQueryQueryVariables>, 'query'>,
) {
	return Urql.useQuery<NavBarQueryQuery, NavBarQueryQueryVariables>({
		query: NavBarQueryDocument,
		...options,
	});
}
