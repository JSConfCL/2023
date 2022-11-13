import { useFlags } from "flagsmith/react";
import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useTimeout } from "usehooks-ts";

import { accessTokenAtom, isAuthenticatedAtom } from "../../helpers/auth";
import { hasticketsAtom } from "../Cart/CartAtom";

import NavBar from "../NavBar/NavBar";

const TicketNavBar = () => {
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);
  const areThereTickets = useAtomValue(hasticketsAtom);
  const { replace, push } = useRouter();
  const setAccessToken = useSetAtom(accessTokenAtom);
  const flags = useFlags(["ticket-page-enabled"]);
  const ticketPageEnabled = flags["ticket-page-enabled"].value;
  const items = useMemo(() => {
    if (isLoggedIn) {
      const items = [
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
          onClick: async () => {
            setAccessToken(null);
            await push("/tickets");
          },
        },
      ];

      if (areThereTickets) {
        items.unshift({
          contenido: "Tickets",
          id: "Tickets",
          isBlank: false,
          link: "/tickets",
          onClick: undefined,
        });
      }

      return items;
    }
    return [];
  }, [isLoggedIn, setAccessToken, push, areThereTickets]);
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
