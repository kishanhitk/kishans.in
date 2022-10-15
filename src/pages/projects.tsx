import { ProjectCard } from "@components/ProjectCard";
import { ProjectList } from "@data/project";
import { MainLayout } from "@layout";
import { NextSeo } from "next-seo";
import React from "react";

const ProjectsPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="Projects – Kishan"
        description="Cool stuffs built by Kishan"
        canonical="https://kishans.in/projects"
        openGraph={{
          url: "https://kishans.in/projects",
          title: "Projects - Kishan",
          description: "Cool stuffs built by Kishan",
          images: [
            {
              url: "https://kishans.in/assets/kishanlogo.webp",
              alt: "Og Image Alt",
            },
          ],
        }}
      />
      <div className="flex flex-col gap-5 justify-center items-start max-w-[700px] mb-4">
        <h1 className="font-bold text-3xl">Projects</h1>
        <p>
          I love learning new things everyday, and this list is a proof of work
          for the same.
        </p>
        <div className="flex flex-col item-start gap-6">
          {ProjectList.sort((prev, next) => prev.priority - next.priority).map(
            (project) => (
              <ProjectCard key={project.slug} project={project} />
            )
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
