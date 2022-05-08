import { GlobalStyles } from "../styles/globalStyles";
import { createClient, Provider } from "urql";
import type { AppProps } from "next/app";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { jsconfTheme } from "../styles/theme";
import createCache from "@emotion/cache";

const cache = createCache({ key: "next" });

const client = createClient({
  url: process.env.NEXT_PUBLIC_CONTENTFUL_API_GRAPHQL!,
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY}`,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Provider value={client}>
        <ThemeProvider theme={jsconfTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
