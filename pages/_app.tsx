import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // <MDXProvider>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    // </MDXProvider>
  );
}

export default MyApp;
