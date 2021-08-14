import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/500.css";
import theme from "@style/theme";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";

const TopProgressBar = dynamic(
  () => {
    return import("./../components/TopProgressBar");
  },
  { ssr: false }
);
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <TopProgressBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
