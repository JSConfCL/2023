/* eslint-disable @next/next/no-img-element */

import { NavBarQueryQuery } from "./navBar.generated";
import { NavBarProps } from "./types";

export const parseNavBarData = (
  props: NavBarQueryQuery["navigationBar"]
): NavBarProps => {
  const buttonsCollection =
    props?.buttonsCollection?.items?.filter(Boolean).map((item) => ({
      link: item?.link!,
      contenido: item?.contenido!,
    })) ?? [];
  const items =
    props?.linksCollection?.items?.map((item) => ({
      link: item?.link!,
      contenido: item?.contenido!,
      id: item?.sys?.id!,
      isBlank: Boolean(item?.isBlank),
    })) ?? [];
  return {
    buttonsCollection,
    items,
    description: props?.description?.json ?? null,
  };
};
