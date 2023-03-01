import { MainLayout } from "@layout";
import "../styles/globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Metadata } from "next";
import NProgressBar from "@components/NProgressBar";

export const metadata: Metadata = {
  title: {
    default: "Kishan",
    template: "%s | Kishan Kumar",
  },
};

const inter = Inter({
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
    <html lang="en" className={inter.className}>
      <head>
        <Script
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
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script
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
          <NProgressBar />
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
