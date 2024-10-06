import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  sourceUrl?: string;
  liveUrl: string;
  tags: string[];
  img: StaticImageData;
  imgSrc?: string;
  priority: number;
};

export type Projects = Project[];
