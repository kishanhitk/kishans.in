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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-6P9QCW850Y`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-6P9QCW850Y', {
                                page_path: window.location.pathname,
                                });
                            `,
          }}
        />
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
