import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import theme from "@style/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
