import createCache from "@emotion/cache";
import { FlagsmithProvider } from "flagsmith/react";
import flagsmith from "flagsmith/isomorphic";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { lazy, ReactElement, ReactNode, Suspense } from "react";
import { Provider } from "urql";
import { urlQlient } from "../src/graphql/urql";
import { queryClient } from "../src/helpers/API";
import { GlobalStyles } from "../styles/globalStyles";
import { jsconfTheme } from "../styles/theme";

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

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <FlagsmithProvider
      options={{
        environmentID: process.env.NEXT_PUBLIC_FLAGSMITH_KEY,
      }}
      flagsmith={flagsmith}
    >
      <JotaiProvider>
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
      </JotaiProvider>
    </FlagsmithProvider>
  );
}

export default MyApp;
