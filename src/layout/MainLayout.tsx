import React, { ReactNode } from "react";
import { Header } from "./Header";
type MainLayoutProps = {
  children: ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <div className="mx-auto mb-20 w-[650px] max-w-[90%]">{children}</div>
    </div>
  );
};
