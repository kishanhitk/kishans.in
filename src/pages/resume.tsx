import { NextSeo } from "next-seo";
import React from "react";

function ResumePage() {
  return (
    <>
      <NextSeo
        title="Résumé – Kishan Kumar"
        description="Latest Résumé of Kishan Kumar"
        canonical="https://kishans.in/resume"
        openGraph={{
          url: "https://kishans.in/resume",
          title: "Résumé – Kishan Kumar",
          description: "Latest Résumé of Kishan Kumar",
        }}
      />
      <div style={{ height: "100vh" }}>
        <iframe
          src="https://kishans.in/public/assets/Kishan_Kumar_FullStack_Resume.pdf"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default ResumePage;
