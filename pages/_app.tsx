import createCache from "@emotion/cache";
import { FlagsmithProvider } from "flagsmith/react";
import flagsmith from "flagsmith/isomorphic";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider, useAtomValue } from "jotai";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { lazy, ReactElement, ReactNode, Suspense, useEffect } from "react";
import { Provider } from "urql";
import { urlQlient } from "../src/graphql/urql";
import { useQueryClient } from "../src/helpers/API";
import { GlobalStyles } from "../styles/globalStyles";
import { jsconfTheme } from "../styles/theme";
import { useRouter } from "next/router";
import { isAuthenticatedAtom } from "../src/helpers/auth";
import { any } from "micromatch";

const WebSchema = dynamic(
  async () => await import("../src/Components/schema/webpage"),
  {
    ssr: false,
  }
);

const ExtendedFooter = lazy(
  async () => await import("../src/Components/ExtendedFooter")
);

const cache = createCache({ key: "next" });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// Routes that MUST HAVE authentication
const mustBeAuthenticatedRoutes: string[] = [
  "/tickets/*",
  "/settings*",
  "/logout*",
];
// Routes that MUST HAVE authentication
const mustBeAnonymousRoutes: string[] = [];

const useAuthenticatedGating = () => {
  const { pathname, push } = useRouter();
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  useEffect(() => {
    if (isAuthenticated) {
      if (any(pathname, mustBeAnonymousRoutes)) {
        console.info("Authenticated Users should not be in", pathname);
        push("/").catch((e) => console.error(e));
      }
    } else {
      if (any(pathname, mustBeAuthenticatedRoutes)) {
        console.info("Anonymous Users should not be in", pathname);
        push("/tickets").catch((e) => console.error(e));
      }
    }
  }, [isAuthenticated, pathname, push]);
};

const Content = ({
  Component,
  pageProps,
}: {
  Component: NextPageWithLayout;
  pageProps: AppProps["pageProps"];
}) => {
  useAuthenticatedGating();
  const queryClient = useQueryClient();
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={cache}>
      <Provider value={urlQlient}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={jsconfTheme}>
            <GlobalStyles />
            <Suspense fallback={null}>
              <WebSchema />
            </Suspense>
            {getLayout(<Component {...pageProps} />)}
            <Suspense fallback={null}>
              <ExtendedFooter />
            </Suspense>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </CacheProvider>
  );
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <JotaiProvider>
      <FlagsmithProvider
        options={{
          environmentID: process.env.NEXT_PUBLIC_FLAGSMITH_KEY,
          cacheFlags: true,
        }}
        flagsmith={flagsmith}
      >
        <Content Component={Component} pageProps={pageProps} />
      </FlagsmithProvider>
    </JotaiProvider>
  );
}

export default MyApp;
