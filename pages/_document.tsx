import React from "react";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/hk-grotesk.min.css"
          />
          <script
            async
            defer
            data-domain="kishans.in"
            src="https://plausible.io/js/plausible.js"
          ></script>
        </Head>

        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
