import { ProjectList } from "../../data/project";
import { ProjectCard } from "./ProjectCard";


const ProjectsPage = () => {
  return (

      <div className="mb-4 flex flex-col items-start justify-center gap-5 container">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p>
          A cozy corner where I&apos;ve tinkered with some ideas. Feel free to
          take a peek and explore!
        </p>
        <div className="item-start flex flex-col gap-6">
          {ProjectList.sort((prev, next) => prev.priority - next.priority).map(
            (project) => (
              <ProjectCard key={project.slug} project={project} />
            )
          )}
        </div>
      </div>

  );
};

export default ProjectsPage;
