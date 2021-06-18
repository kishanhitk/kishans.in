import React from "react";
import NextDocument, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <body>
          <Head />
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
