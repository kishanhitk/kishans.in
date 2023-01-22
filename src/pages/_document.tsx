import React from "react";
import NextDocument, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from "next/document";

class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        {/* <script
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
        /> */}
        <Head />
        <body className="bg-white text-black dark:bg-[#1A1F2E] dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
