import { useMemo } from "react";

import { InternalNavBar } from "./InternalNavBar";
import { StyledWrapperSuspense } from "./components";
import { parseNavBarData } from "./helper";
import { useNavBarQueryQuery } from "./navBar.generated";

const NavBar = ({ id = "22KytadLhMxFZMtvlUYCbl" }: { id?: string }) => {
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
    return [...parseNavBarData(data.navigationBar).items];
  }, [data]);

  if (!navBarItems.length) {
    return <StyledWrapperSuspense />;
  }
  return <InternalNavBar items={navBarItems} />;
};

export default NavBar;
