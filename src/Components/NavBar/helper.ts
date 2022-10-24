/* eslint-disable @next/next/no-img-element */

import { HomeQueryQuery } from "../../graphql/home.generated";
import { ParseQuery } from "../../helpers/types";

type Page = ParseQuery<HomeQueryQuery["page"]>;

export const parseNavBarData = (props: Page["navBar"]): NavBarProps => {
  const buttonsCollection = props.buttonsCollection.items.map((item) => ({
    link: item.link,
    contenido: item.contenido,
  }));
  const items = props.linksCollection.items.map((item) => ({
    link: item.link,
    contenido: item.contenido,
    id: item.sys.id,
    isBlank: Boolean(item.isBlank),
  }));
  return {
    buttonsCollection,
    items,
    description: props.description.json,
  };
};
