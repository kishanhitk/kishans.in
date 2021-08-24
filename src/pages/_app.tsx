import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/500.css";
import theme from "@style/theme";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {/* <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      > */}
        <Component {...pageProps} />
      {/* </AnimatePresence> */}
    </ChakraProvider>
  );
}

export default MyApp;
