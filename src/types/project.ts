export type Project = {
  title: string;
  slug: string;
  summary: string;
  sourceUrl?: string;
  liveUrl: string;
  tags: string[];
  // @ts-ignore
  img: any;
  imgSrc?: string;
  priority: number;
};

export type Projects = Project[];
