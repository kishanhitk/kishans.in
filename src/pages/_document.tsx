import React from "react";
import NextDocument, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@style/theme";

class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
