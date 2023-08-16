import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Résumé – Kishan Kumar",
  description: "Latest Resume of Kishan Kumar - Full Stack Developer",
  openGraph: {
    locale: "en_IE",
    url: "https://www.kishans.in/resume",
    images: [
      {
        url: "https://www.kishans.in/assets/kishans-og-banner.png",
        width: 1200,
        height: 630,
        alt: "Kishan Kumar | Full Stack Developer",
      },
    ],
  },
};
function ResumePage() {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src="https://kishans.in/assets/Kishan_Kumar_FullStack_Resume.pdf"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}

export default ResumePage;
