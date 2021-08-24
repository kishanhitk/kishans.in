import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/500.css";
import theme from "@style/theme";
import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const url = `https://kishans.in${router.route}`;
  return (
    <ChakraProvider theme={theme}>
      <LazyMotion features={domAnimation} strict>
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
