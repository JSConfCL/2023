import { useAtomValue, useSetAtom } from "jotai";
import { useMemo } from "react";
import { useFlags } from "flagsmith/react";

import { accessTokenAtom, isAuthenticatedAtom } from "../../helpers/auth";
import { parseNavBarData } from "./helper";
import { InternalNavBar } from "./InternalNavBar";
import { useNavBarQueryQuery } from "./navBar.generated";

const NavBar = () => {
  const [{ data }] = useNavBarQueryQuery({
    variables: {
      isPreview: Boolean(process.env.NEXT_PUBLIC_CONTENTFUL_IS_PREVIEW),
    },
  });
  // navData: parseNavBarData(page?.navBar as Page["navBar"]),

  const isLoggedIn = useAtomValue(isAuthenticatedAtom);
  const setAccessToken = useSetAtom(accessTokenAtom);
  const { "ticket-sale-enabled": ticketSaleEnabled } = useFlags([
    "ticket-sale-enabled",
  ]);

  const navBarItems = useMemo(() => {
    if (!data) {
      return [];
    }
    const newItems = [...parseNavBarData(data.navigationBar).items];

    if (isLoggedIn) {
      if (
        ticketSaleEnabled?.value ??
        window.localStorage.getItem("ENABLED_SALES")
      ) {
        newItems.push({
          contenido: "Mis Tickets",
          id: "OwnTickets",
          isBlank: false,
          link: "/mytickets",
          onClick: undefined,
        });
      }

      newItems.push(
        ...[
          {
            contenido: "Configuracion",
            id: "Settings",
            isBlank: false,
            link: "/settings",
            onClick: undefined,
          },
          {
            contenido: "Salir",
            id: "Log Out",
            onClick: () => {
              setAccessToken(null);
            },
          },
        ]
      );
    }

    return newItems;
  }, [data, isLoggedIn, setAccessToken, ticketSaleEnabled]);

  return <InternalNavBar items={navBarItems} />;
};

export default NavBar;
