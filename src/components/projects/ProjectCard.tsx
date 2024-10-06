import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import type { Project } from "../../types";
import { IconButton } from "../shared/IconButton";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, sourceUrl, liveUrl, summary, tags, img, imgSrc } = project;
  return (
    <div className="rounded-xl bg-gray-100 dark:border-none dark:bg-gray-800">
      <a className="w-full" href={liveUrl} target="_blank" rel="noreferrer">
        <img
          className="mx-auto w-full rounded-xl  rounded-b-none  object-cover"
          src={imgSrc}
          alt={title}
        />
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
        <div dangerouslySetInnerHTML={{ __html: summary }} />
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
