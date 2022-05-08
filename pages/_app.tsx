import { GlobalStyles } from "../styles/globalStyles";
import type { AppProps } from "next/app";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { jsconfTheme } from "../styles/theme";
import createCache from "@emotion/cache";

const cache = createCache({ key: "next" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={jsconfTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
