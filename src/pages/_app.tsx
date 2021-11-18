import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/500.css";
import theme from "@style/theme";
import { AnimatePresence, LazyMotion } from "framer-motion";
import { useRouter } from "next/router";
import * as ga from "../utils/analytics";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const url = `https://kishans.in${router.route}`;
  const loadFeatures = () =>
    import("../utils/features").then((res) => res.default);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme} cssVarsRoot={undefined}>
      <LazyMotion features={loadFeatures}>
        <AnimatePresence
          exitBeforeEnter={true}
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={url} />
        </AnimatePresence>
      </LazyMotion>
    </ChakraProvider>
  );
}

export default MyApp;
