export interface HashnodePost {
  title: string;
  slug: string;
  brief: string;
  url: string;
}
export interface HashnodePostFull extends HashnodePost {
  contentMarkdown: string;
  dateAdded: string;
  replyCount: number;
  coverImage: string;
  responseCount: number;
  reactions: {
    reaction: {
      name: string;
    };
    count: number;
  }[];
}

export type HashnodePosts = HashnodePost[];
