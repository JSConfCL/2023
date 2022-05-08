import { GlobalStyles } from "../styles/globalStyles";
import { createClient, Provider } from "urql";
import type { AppProps } from "next/app";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { jsconfTheme } from "../styles/theme";
import createCache from "@emotion/cache";
import { urlQlient } from "../src/graphql/urql";

const cache = createCache({ key: "next" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Provider value={urlQlient}>
        <ThemeProvider theme={jsconfTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
