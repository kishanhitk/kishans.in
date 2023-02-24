import { Project } from "@types";
import Image from "next/image";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import { IconButton } from "./IconButton";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, sourceUrl, liveUrl, summary, tags, img } = project;
  return (
    <div className="rounded-xl bg-gray-100 p-8 dark:bg-gray-800">
      <div className="flex flex-col items-start gap-3">
        <a className="w-full" href={liveUrl} target="_blank" rel="noreferrer">
          <Image className="mx-auto rounded-xl" src={img} alt={title}></Image>
        </a>
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <IconButton
            href={liveUrl}
            ariaLabel={title}
            icon={<IoOpenOutline />}
          />
          {sourceUrl && (
            <IconButton
              href={sourceUrl}
              ariaLabel={`${title} Source Code`}
              icon={<FiGithub />}
            />
          )}
        </div>
        <p>{summary}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="rounded-md bg-blue-300 px-2 dark:bg-gray-700 "
            >
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
