import { HashnodePost } from "@types";
import Link from "next/link";
import React from "react";
import Paragraph from "./Paragraph";

export interface PostCardProps {
  post: HashnodePost;
}
const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link
      key={post.slug}
      className="cursor-pointer"
      href={`/blogs/${post.slug}`}
    >
      <h3 className="mb-1 text-xl font-semibold">{post.title}</h3>
      <Paragraph className="mb-5 font-thin">{post.brief}</Paragraph>
    </Link>
  );
};

export default PostCard;
