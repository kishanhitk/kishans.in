export interface HashnodePost {
  title: string;
  slug: string;
  brief: string;
  url: string;
}
export interface HashnodePostFull extends HashnodePost {
  dateAdded: string;
  content: string;
  replyCount?: number;
  coverImage: string;
  responseCount?: number;
  reactions?: HashnodeReactionFull[];
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
