import { Header } from "@layout/Header";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white dark:bg-[#1A1F2E] text-black dark:text-white">
        <Header useAppDir />
        <div className="w-[650px] max-w-[90%] mx-auto mb-20">{children}</div>
      </body>
    </html>
  );
}
