import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { accessTokenAtom, isAuthenticatedAtom } from "../../helpers/auth";
import { flagsAtom } from "../../helpers/featureFlags";
import NavBar from "../NavBar/NavBar";

const TicketNavBar = () => {
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);
  const { replace } = useRouter();
  const setAccessToken = useSetAtom(accessTokenAtom);
  const { "ticket-page-enabled": ticketPageEnabled } = useAtomValue(flagsAtom);
  const items = useMemo(() => {
    if (isLoggedIn) {
      return [
        {
          contenido: "Settings",
          id: "Settings",
          isBlank: false,
          link: "/settings",
          onClick: undefined,
        },
        {
          contenido: "Log Out",
          id: "Log Out",
          onClick: () => {
            setAccessToken(null);
          },
        },
      ];
    }
    return [];
  }, [isLoggedIn, setAccessToken]);
  useEffect(() => {
    if (ticketPageEnabled === false) {
      replace("/").catch((e) => console.error(e));
    }
  }, [replace, ticketPageEnabled]);

  if (!ticketPageEnabled) {
    return null;
  }
  return <NavBar items={items} />;
};

export default TicketNavBar;
