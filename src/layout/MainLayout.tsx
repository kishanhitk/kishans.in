import React, { ReactNode } from "react";
import { Header } from "./Header";
type MainLayoutProps = {
  children: ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header useAppDir />
      <div className="w-[650px] max-w-[90%] mx-auto mb-20">{children}</div>
    </div>
  );
};
