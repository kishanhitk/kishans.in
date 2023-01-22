"use client";
import PageWrapper from "@components/PageWrapper";
import { NextSeo } from "next-seo";
import React from "react";

function ResumePage() {
  return (
    <PageWrapper>
      <NextSeo
        useAppDir={true}
        title="Résumé | Kishan Kumar - Full Stack Developer"
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
          src="https://kishanhitk.github.io/resume/KishanKumar-Frontend-Resume.pdf"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </PageWrapper>
  );
}

export default ResumePage;
