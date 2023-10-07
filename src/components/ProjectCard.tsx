import { Project } from "@types";
import Image from "next/image";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import { IconButton } from "./IconButton";
import { MDXRemote } from "next-mdx-remote/rsc";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, sourceUrl, liveUrl, summary, tags, img } = project;
  return (
    <div className="rounded-xl bg-gray-100 dark:border-none dark:bg-gray-800">
      <a className="w-full" href={liveUrl} target="_blank" rel="noreferrer">
        <Image
          className="mx-auto w-full rounded-xl  rounded-b-none  object-cover"
          src={img}
          alt={title}
          placeholder="blur"
        ></Image>
      </a>
      <div className="flex flex-col items-start gap-3 p-8 pt-2 ">
        <div className="-mb-3 flex items-center gap-2 ">
          <h3 className="text-2xl font-semibold">{title}</h3>
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
        <MDXRemote source={summary} />
        {/* <Paragraph>{summary}</Paragraph> */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="rounded-md bg-gray-300 px-3 py-1 font-light dark:bg-gray-700 "
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
