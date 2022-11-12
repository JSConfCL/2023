import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { useFlags } from "flagsmith/react";
import { accessTokenAtom, isAuthenticatedAtom } from "../../helpers/auth";
import NavBar from "../NavBar/NavBar";

const TicketNavBar = () => {
  const isLoggedIn = useAtomValue(isAuthenticatedAtom);
  const { replace } = useRouter();
  const setAccessToken = useSetAtom(accessTokenAtom);
  const flags = useFlags(["ticket-page-enabled"]); // only causes re-render if specified flag values / traits change

  console.log({ flags });
  const ticketPageEnabled = flags["ticket-page-enabled"].value;
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
    if (!ticketPageEnabled) {
      replace("/").catch((e) => console.error(e));
    }
  }, [replace, ticketPageEnabled]);
  if (ticketPageEnabled) {
    return <NavBar items={items} />;
  }
  return null;
};

export default TicketNavBar;
