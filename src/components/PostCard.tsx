import { HashnodePost } from "@types";
import Link from "next/link";
import React from "react";

export interface PostCardProps {
  post: HashnodePost;
}
const PostCard = ({ post }: PostCardProps) => {
  return (
    <>
      <Link
        key={post.slug}
        className="mb-10px cursor-pointer"
        href={`/blogs/${post.slug}`}
      >
        <h3 className="mb-1 text-xl font-bold">{post.title}</h3>
        <p className="font-light">{post.brief}</p>
      </Link>
    </>
  );
};

export default PostCard;
