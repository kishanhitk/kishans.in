import type { HashnodePost } from "../../types/hashnode";
import React from "react";
import Paragraph from "../shared/Paragraph";

export interface PostCardProps {
  post: HashnodePost;
}
const PostCard = ({ post }: PostCardProps) => {
  return (
    <a key={post.slug} className="cursor-pointer" href={`/blogs/${post.slug}`}>
      <h3 className="mb-1 text-2xl font-semibold">{post.title}</h3>
      <p className="text-sm text-black/50 my-2">
        {/* In the format of 23rd October 2024 */}
        Published on{" "}
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <Paragraph className="mb-5">{post.brief.slice(0, 100)}...</Paragraph>
    </a>
  );
};

export default PostCard;
