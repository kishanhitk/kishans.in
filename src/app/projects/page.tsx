import PageWrapper from "@components/PageWrapper";
import { ProjectCard } from "@components/ProjectCard";
import { ProjectList } from "@data/project";
import { MainLayout } from "@layout";
import { NextSeo } from "next-seo";
import React from "react";

const ProjectsPage = () => {
  return (
    <PageWrapper>
      <NextSeo
        useAppDir={true}
        title="Projects | Kishan Kumar - Full Stack Developer"
        description="Cool stuffs built by Kishan"
        canonical="https://kishans.in/projects"
        openGraph={{
          url: "https://kishans.in/projects",
          title: "Projects - Kishan",
          description: "Cool stuffs built by Kishan",
          images: [
            {
              url: "https://kishans.in/assets/kishanlogo.png",
              alt: "Og Image Alt",
            },
          ],
        }}
      />
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
