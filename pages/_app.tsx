import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider as TanstackQueryProvider,
} from "@tanstack/react-query";
import flagsmith from "flagsmith/isomorphic";
import { FlagsmithProvider } from "flagsmith/react";
import { Provider as JotaiProvider, useAtomValue } from "jotai";
import { any } from "micromatch";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  lazy,
  ReactElement,
  ReactNode,
  Suspense,
  useEffect,
  useState,
} from "react";
import { Provider } from "urql";
import { urlQlient } from "../src/graphql/urql";
import { isAuthenticatedAtom } from "../src/helpers/auth";
import { GlobalStyles } from "../styles/globalStyles";
import { jsconfTheme, previaTheme } from "../styles/theme";
// import { PublicTicketPageMetaTags } from "../src/Components/PublicTicketMetatag";

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
  const { pathname, push, isReady } = useRouter();
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  useEffect(() => {
    if (!isReady) {
      return;
    }
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
  }, [isAuthenticated, isReady, pathname, push]);
};

const LayoutAndContent = ({
  Component,
  pageProps,
}: {
  Component: NextPageWithLayout;
  pageProps: AppProps["pageProps"];
}) => {
  useAuthenticatedGating();
  const getLayout = Component.getLayout ?? ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
};

const AppWithQueryClients = ({
  Component,
  pageProps,
}: {
  Component: NextPageWithLayout;
  pageProps: AppProps["pageProps"];
}) => {
  const { pathname } = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <CacheProvider value={cache}>
      <Provider value={urlQlient}>
        <TanstackQueryProvider client={queryClient}>
          <Hydrate state={(pageProps as any).dehydratedState}>
            <ThemeProvider
              theme={pathname === "/laprevia" ? previaTheme : jsconfTheme}
            >
              <GlobalStyles />
              <Suspense fallback={null}>
                <WebSchema />
              </Suspense>
              <LayoutAndContent Component={Component} pageProps={pageProps} />
              <Suspense fallback={null}>
                <ExtendedFooter />
              </Suspense>
            </ThemeProvider>
          </Hydrate>
        </TanstackQueryProvider>
      </Provider>
    </CacheProvider>
  );
};

// const ticketApiUrl = process.env.NEXT_PUBLIC_WORKER_IMAGE_API!;

function AppWithDataStorage({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  // const ticketId = router.query.id as string;
  // const isPublicTicketPage =
  //   router.pathname.startsWith("/p/ticket/") && ticketId;
  return (
    <>
      {/* {isPublicTicketPage && (
        // En Facebook, los meta-tags tienen que poder verse dentro de los
        // primero 50kb del HTML descargado. Considerando la cantidad de
        // componentes q tenemos, facebook no lee los metatags creados en `/pages/p/ticket/[id]`.
        // Por eso, los generamos acá como un 'Best Effort'
        <PublicTicketPageMetaTags
          ticketApiUrl={ticketApiUrl}
          ticketId={ticketId}
        />
      )} */}
      <JotaiProvider>
        <FlagsmithProvider
          options={{
            environmentID: process.env.NEXT_PUBLIC_FLAGSMITH_KEY,
            cacheFlags: true,
          }}
          flagsmith={flagsmith}
        >
          <AppWithQueryClients Component={Component} pageProps={pageProps} />
        </FlagsmithProvider>
      </JotaiProvider>
    </>
  );
}

export default AppWithDataStorage;
