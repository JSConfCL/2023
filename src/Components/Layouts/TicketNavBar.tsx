import { useFlags } from "flagsmith/react";
import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useTimeout } from "usehooks-ts";

import { accessTokenAtom, isAuthenticatedAtom } from "../../helpers/auth";

import NavBar, { NavBarProps } from "../NavBar/NavBar";

const TicketNavBar = ({ navData }: { navData: NavBarProps }) => {
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);
  const { replace } = useRouter();
  const setAccessToken = useSetAtom(accessTokenAtom);
  const flags = useFlags(["ticket-page-enabled"]);
  const ticketPageEnabled = flags["ticket-page-enabled"].value;

  const items = useMemo(() => {
    const items = [...(navData?.items || [])];

    if (isLoggedIn) {
      items.push({
        contenido: "Configuracion",
        id: "Settings",
        isBlank: false,
        link: "/settings",
        onClick: undefined,
      });

      items.push({
        contenido: "Salir",
        id: "Log Out",
        onClick: () => {
          setAccessToken(null);
        },
      });
    }

    return items;
  }, [isLoggedIn, navData, navData?.items, setAccessToken]);

  useTimeout(() => {
    // Le damos 2 segundos a las feature-flags para poder conectarse (Es para
    // problar nosotros, asi que es más que suficiente IMO). :)
    // Post 2 segundos, si no se ha conectado, o si no esta habilitado,
    // redireccionamos a "/"
    if (!ticketPageEnabled) {
      replace("/").catch((e) => console.error(e));
    }
  }, 2000);
  if (ticketPageEnabled) {
    return <NavBar items={items} />;
  }
  return null;
};

export default TicketNavBar;
