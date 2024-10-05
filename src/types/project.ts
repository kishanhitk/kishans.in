import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  sourceUrl?: string;
  liveUrl: string;
  tags: string[];
  img: StaticImageData;
  priority: number;
};

export type Projects = Project[];
