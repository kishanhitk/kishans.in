import PageWrapper from "@components/PageWrapper";
import { ProjectCard } from "@components/ProjectCard";
import { ProjectList } from "@data/project";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Kishan, a self-taught developer from India. He loves building cool stuff for web and mobile using Javascript/Typescript, ReactJS, NodeJS, Flutter, and AWS.",
  openGraph: {
    locale: "en_IE",
    url: "https://www.kishans.in/projects",
    images: [
      {
        url: "https://www.kishans.in/assets/kishanlogo.webp",
        width: 1200,
        height: 630,
        alt: "Kishan Kumar | Full Stack Developer",
      },
    ],
  },
};

export const revalidate = 86400;

const ProjectsPage = () => {
  return (
    <PageWrapper>
      <div className="mb-4 flex max-w-[700px] flex-col items-start justify-center gap-5">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p>
          I love learning new things everyday, and this list is a proof of work
          for the same.
        </p>
        <div className="item-start flex flex-col gap-6">
          {ProjectList.sort((prev, next) => prev.priority - next.priority).map(
            (project) => (
              <ProjectCard key={project.slug} project={project} />
            )
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProjectsPage;
