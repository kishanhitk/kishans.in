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
    <div className="p-8 rounded-xl bg-gray-100">
      <div className="flex flex-col gap-3 items-start">
        <a href={liveUrl} target="_blank" rel="noreferrer">
          <Image
            className="rounded-xl"
            src={img}
            layout="intrinsic"
            alt={title}
            placeholder="blur"
          ></Image>
        </a>
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-xl">{title}</h3>
          <IconButton
            href={liveUrl}
            ariaLabel={title}
            icon={<IoOpenOutline />}
          />
          <IconButton
            href={sourceUrl}
            ariaLabel={`${title} Source Code`}
            icon={<FiGithub />}
          />
        </div>
        <p>{summary}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div key={tag} className="rounded-md px-2 bg-blue-300">
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
