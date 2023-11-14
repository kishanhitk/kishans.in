import { HashnodePost } from '@types'
import React from 'react'
import PostCard from './PostCard'
import { getAllPostByUsername } from '@functions/hashnode';

const RecentPosts = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h2 className="mb-5 mt-3 text-3xl font-semibold">Recent posts</h2>
      {posts?.map((post: HashnodePost) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}

export default RecentPosts

const getPosts = async () => {
  return getAllPostByUsername("blog.kishans.in");
};