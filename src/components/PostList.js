import React from "react";
import PostListItem from "../components/PostListItem";
import { useAppState } from "../app-context";

const PostList = () => {
  const { state: { data } } = useAppState();

  return (
    <div className="post-list">
      {data &&
        data.map((post, index) => (
          <PostListItem key={post.objectID} index={index} post={post} />
        ))}
    </div>
  );
};

export default PostList;