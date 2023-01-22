import { Header } from "@layout/Header";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white dark:bg-[#1A1F2E] text-black dark:text-white">
        <Providers>
          <Header useAppDir />
          <div className="w-[650px] max-w-[90%] mx-auto mb-20">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
