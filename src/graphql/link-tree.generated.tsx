import gql from "graphql-tag";
import * as Urql from "urql";

import * as Types from "../types";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type LinkTreeQueryVariables = Types.Exact<{
  locale: Types.Scalars["String"];
  isPreview?: Types.InputMaybe<Types.Scalars["Boolean"]>;
}>;

export type LinkTreeQuery = {
  __typename?: "Query";
  page?: {
    __typename?: "Page";
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
    } | null;
    navBar?: {
      __typename?: "NavigationBar";
      description?: {
        __typename?: "NavigationBarDescription";
        json: any;
      } | null;
      linksCollection?: {
        __typename?: "NavigationBarLinksCollection";
        items: Array<{
          __typename?: "LinkItem";
          contenido?: string | null;
          link?: string | null;
          isBlank?: boolean | null;
          iconName?: string | null;
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
    } | null;
  } | null;
};

export const LinkTreeDocument = gql`
  query LinkTree($locale: String!, $isPreview: Boolean = false) {
    page(id: "3yNee3jJ5xkHkCPyszAiOp", locale: $locale, preview: $isPreview) {
      seo {
        title
        description
        metadata
      }
      heroBlock {
        tile
        firstSubtitle
        secondSubtitle
      }
      navBar {
        description {
          json
        }
        linksCollection(limit: 20) {
          items {
            sys {
              id
            }
            contenido
            link
            isBlank
            iconName
          }
        }
        buttonsCollection(limit: 20) {
          items {
            contenido
            link
          }
        }
      }
    }
  }
`;

export function useLinkTreeQuery(
  options: Omit<Urql.UseQueryArgs<LinkTreeQueryVariables>, "query">
) {
  return Urql.useQuery<LinkTreeQuery, LinkTreeQueryVariables>({
    query: LinkTreeDocument,
    ...options,
  });
}
