const HomeProjects = () => {
  return (
    <div className="my-10" id="projects">
      <div className="container">
        <h3 className="text-2xl font-semibold">Personal Projects</h3>
        <h4 className="text-xl text-black/70 mt-4">
          Some of my personal projects.
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;

const projects = [
  {
    title: "MyPRs",
    description: "One link to highlight your Open-Source Contributions.",
    image: "/assets/myprs-banner.png",
    link: "https://myprs.xyz",
  },
  {
    title: "Gita GPT",
    description: "Find Solace in the wisdom of Shree Krishna 🦚",
    image: "/assets/gita-gpt.png",
    link: "https://gita.kishans.in",
  },
  {
    title: "JUMS Reboot",
    description: "All in-one app for Jadavpur University Students.",
    image: "/assets/jumsbanner.webp",
    link: "https://play.google.com/store/apps/details?id=com.kishans.jumsRebootFlutter&hl=en_IN",
  },
  {
    title: "Stroll - The Dev Extension",
    description:
      "A browser extension that automatically scrolls your browser to the most relevant answer while browsing Stack-Overflow.",
    image: "/assets/stroll.webp",
    link: "https://stroll-land.vercel.app",
  },
];

const ProjectCard = ({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <a
      href={link}
      className="rounded-xl overflow-hidden p-10 bg-gray-100"
      target="_blank"
      rel="noreferrer"
    >
      <img src={image} alt="" className="rounded-xl" />
      <div className="mt-4">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="text-black/70 mt-1">{description}</p>
      </div>
    </a>
  );
};
