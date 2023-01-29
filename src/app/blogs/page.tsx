import PostCard from "@components/PostCard";
import { getAllPostByUsername } from "@functions/hashnode";
import { HashnodePost } from "@types";
import React from "react";

export const revalidate = 86400; // revalidate every day

const page = async () => {
  const posts = await getAllPostByUsername("kishanhitk");
  return (
    <>
      <h2 className="mb-10 text-3xl font-bold">Recent Posts</h2>
      {posts?.map((post: HashnodePost) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </>
  );
};

export default page;
