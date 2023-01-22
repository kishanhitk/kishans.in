import { MainLayout } from "@layout";
import { Header } from "@layout/Header";
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
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
