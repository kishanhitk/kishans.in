import type { HashnodePost } from "../../types/hashnode";
import React from "react";
import Paragraph from "../shared/Paragraph";

export interface PostCardProps {
  post: HashnodePost;
}
const PostCard = ({ post }: PostCardProps) => {
  return (
    <a
      key={post.slug}
      className="cursor-pointer"
      href={`/blogs/${post.slug}`}
    >
      <h3 className="mb-1 text-xl font-semibold">{post.title}</h3>
      <Paragraph className="mb-5 font-thin">{post.brief}</Paragraph>
    </a>
  );
};

export default PostCard;
