import { useMemo } from "react";

import { PREVIA_LINK } from "../../helpers/config";

import { InternalNavBar } from "./InternalNavBar";
import { StyledWrapperSuspense } from "./components";
import { parseNavBarData } from "./helper";
import { useNavBarQueryQuery } from "./navBar.generated";

const NavBar = ({
  id = "22KytadLhMxFZMtvlUYCbl",
  isPreviaSpeakers = false,
}: {
  id?: string;
  isPreviaSpeakers?: boolean;
}) => {
  const [{ data }] = useNavBarQueryQuery({
    variables: {
      id,
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    },
  });

  const navBarItems = useMemo(() => {
    if (!data) {
      return [];
    }

    const items = [...parseNavBarData(data.navigationBar).items];
    if (isPreviaSpeakers) {
      items.forEach((item) => {
        if (item.link) {
          item.link = `${PREVIA_LINK}/${item.link}`;
        }
      });
    }

    return items;
  }, [data, isPreviaSpeakers]);

  if (!navBarItems.length) {
    return <StyledWrapperSuspense />;
  }
  return <InternalNavBar items={navBarItems} />;
};

export default NavBar;
