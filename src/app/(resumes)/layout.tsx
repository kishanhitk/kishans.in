import React from "react";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}
