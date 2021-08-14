import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: any) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
