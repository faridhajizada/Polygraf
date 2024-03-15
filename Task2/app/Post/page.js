"use client";

import { useState } from "react";

export default function PostComponent({ data, action }) {
  const [post, setPost] = useState(data);
  const [postId, setPostId] = useState(1);

  async function updatePost(id) {
    const newPost = await action(id);
    setPost(newPost);
    setPostId(id);
  }

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <button disabled={postId === 1} onClick={() => updatePost(postId - 1)}>
        prev
      </button>
      <button onClick={() => updatePost(postId + 1)}>next</button>
    </div>
  );
}
