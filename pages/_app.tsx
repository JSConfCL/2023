import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";
import { Provider } from "urql";
import { urlQlient } from "../src/graphql/urql";
import { queryClient } from "../src/helpers/API";
import { GlobalStyles } from "../styles/globalStyles";
import { jsconfTheme } from "../styles/theme";

const WebSchema = dynamic(() => import("../src/Components/schema/webpage"), {
  ssr: false,
});

const ExtendedFooter = lazy(() => import("../src/Components/ExtendedFooter"));

const cache = createCache({ key: "next" });

const value = {
  fetcher: (resource: RequestInfo | URL, init?: RequestInit | undefined) =>
    fetch(resource, init).then((res) => res.json()),
};

function MyApp(appProps: AppProps) {
  const { Component, pageProps } = appProps;

  return (
    <JotaiProvider>
      <CacheProvider value={cache}>
        <Provider value={urlQlient}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={jsconfTheme}>
              <GlobalStyles />
              <Suspense fallback={null}>
                <WebSchema />
              </Suspense>
              <Component {...pageProps} />
              <Suspense fallback={null}>
                <ExtendedFooter />
              </Suspense>
            </ThemeProvider>
          </QueryClientProvider>
        </Provider>
      </CacheProvider>
    </JotaiProvider>
  );
}

export default MyApp;
