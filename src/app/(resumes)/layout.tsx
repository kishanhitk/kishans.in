import React from "react";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        margin: "0px",
        padding: "0px",
        boxSizing: "border-box",
      }}
    >
      Hello
      {children}
    </div>
  );
}
