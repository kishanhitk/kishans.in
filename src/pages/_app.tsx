import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "@fontsource/inter/400.css";
import theme from "@style/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
