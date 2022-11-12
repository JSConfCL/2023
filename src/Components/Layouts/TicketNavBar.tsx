import { useAtomValue, useSetAtom } from "jotai";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useMemo } from "react";
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
  if (ticketPageEnabled === false) {
    replace("/");
    return null;
  }
  return <NavBar items={items} />;
};

export default TicketNavBar;
