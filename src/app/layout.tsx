import { MainLayout } from "@layout";
import "../styles/globals.css";
import { Providers } from "../utils/providers";
import { Quicksand } from "next/font/google";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://kishans.in'),
  title: {
    default: "Kishan",
    template: "%s | Kishan Kumar",
  },
};

const font = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const NEXT_PUBLIC_GOOGLE_ANALYTICS_ID =
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  return (
    <html lang="en" className={font.className}>
      <head>
        <Script
        defer
          id="microsoft-clarity"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "g0b6ywg8xx");
          `,
          }}
        />
        <Script
        defer
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script
        defer
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}',{
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </head>
      <body className="bg-white text-black dark:bg-[#1A1F2E] dark:text-white">
        <Providers>
          <MainLayout>
            {children}
            </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
