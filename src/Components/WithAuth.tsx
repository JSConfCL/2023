import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { TicketsLayout } from "./Layouts/TicketsLayout";

import { getValidToken } from "../helpers/auth";

const withAuth = (WrappedComponent: any) => {
  const Component = (props: any) => {
    const Router = useRouter();
    const [state, setState] = useState<{
      loaded?: boolean;
      accessToken?: string | null;
    }>({});

    useEffect(() => {
      const accessToken = getValidToken();
      setState({ loaded: true, accessToken });
    }, []);

    if (state.loaded && state.accessToken) {
      return <WrappedComponent {...props} />;
    } else if (state.loaded) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      Router.replace("/tickets");
    }
  };

  Component.displayName = "WithAuth";
  Component.getLayout = TicketsLayout;

  return Component;
};

export default withAuth;
