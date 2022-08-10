import { lazy, Suspense } from "react";
import dynamic from "next/dynamic";
import { GlobalStyles } from "../styles/globalStyles";
import { Provider } from "urql";
import type { AppProps } from "next/app";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { jsconfTheme } from "../styles/theme";
import createCache from "@emotion/cache";
import { urlQlient } from "../src/graphql/urql";

const WebSchema = dynamic(() => import("../src/Components/schema/webpage"), {
  ssr: false,
});

const ExtendedFooter = lazy(() => import("../src/Components/ExtendedFooter"));

const cache = createCache({ key: "next" });

function MyApp(appProps: AppProps) {
  const { Component, pageProps } = appProps;

  return (
    <CacheProvider value={cache}>
      <Provider value={urlQlient}>
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
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
