export interface HashnodePost {
  title: string;
  slug: string;
  brief: string;
  url: string;
  publishedAt: string;
}
export interface HashnodePostFull extends HashnodePost {
  content: HashnodeContent;
  replyCount?: number;
  coverImage: HashnodeImage;
  responseCount?: number;
  reactions?: HashnodeReactionFull[];
}

export interface HashnodeImage {
  url: string;
}

export interface HashnodeContent {
  markdown: string;
  html: string;
}
export interface HashnodeReaction {
  name: string;
  image: string;
}

export interface HashnodeReactionFull {
  reaction: HashnodeReaction;
  count: number;
}

export type HashnodePosts = HashnodePost[];
