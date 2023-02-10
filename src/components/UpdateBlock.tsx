import { useState } from "react";
import { Reply, Comment } from "../types";

interface UpdateBlockProps {
  post: Comment | Reply;
  updatePost: (
    postToUpdate: Comment | Reply,
    updatedPost: Comment | Reply
  ) => void;
  toggleVisibility: () => void;
}

export function UpdateBlock({
  post,
  updatePost,
  toggleVisibility,
}: UpdateBlockProps) {
  const [text, setText] = useState<string>();
  function handleUpdatePost() {
    const newPost: Comment | Reply = JSON.parse(JSON.stringify(post));
    newPost.content = text as string;
    updatePost(post, newPost);
    toggleVisibility();
  }
  return (
    <div className="mt-4 flex flex-col gap-4">
      <textarea
        className="w-full border rounded-lg border-lightgray resize-none 
                    h-24 px-4 py-2"
        placeholder="Add a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className="bg-moderateblue text-white px-7 py-3 rounded-lg self-start 
                      hover:bg-lightgrayishblue ease-in duration-300
                      placeholder:text-grayishblue ml-auto"
        onClick={handleUpdatePost}
      >
        UPDATE
      </button>
    </div>
  );
}
