import Image from "next/image";
import { useState } from "react";

import { Reply, User, Comment } from "../types";

interface ReplyProps {
  post: Reply | Comment;
  currentUser: User;
  addReply: (newReply: Reply) => void;
}

export function ReplyPost({ post, currentUser, addReply }: ReplyProps) {
  const [text, setText] = useState(`@${post.user.username}`);
  // Essa função cria um novo objeto de Reply e chama a função de adicioná-la no array
  function handleAddReply() {
    const newReply: Reply = {
      id: Math.random() * 100,
      content: text.replace(/^\s*\S+\s*/, ""),
      createdAt: "Right now",
      score: 0,
      replyingTo: post.user.username,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
    };
    console.log(newReply);
    addReply(newReply);
  }
  return (
    <div className="flex flex-col lg:flex-row bg-white w-full mt-4 gap-6 p-6 rounded-lg shadow-sm">
      <Image
        src={currentUser.image.png}
        alt=""
        width={64}
        height={64}
        className="h-10 w-10 lg:block hidden"
      />
      <textarea
        className="w-full border rounded-lg border-lightgray resize-none 
                    h-24 px-4 py-2 "
        placeholder="Add a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className="bg-moderateblue text-white px-7 py-3 rounded-lg self-start 
                        hover:bg-lightgrayishblue ease-in duration-300
                        placeholder:text-grayishblue lg:block hidden"
        onClick={handleAddReply}
      >
        REPLY
      </button>
      <div className="flex w-full justify-between lg:hidden">
        <Image
          src={currentUser.image.png}
          alt=""
          width={64}
          height={64}
          className="h-10 w-10"
        />
        <button
          className="bg-moderateblue text-white px-7 py-3 rounded-lg self-start 
                        hover:bg-lightgrayishblue ease-in duration-300
                        placeholder:text-grayishblue"
          onClick={handleAddReply}
        >
          REPLY
        </button>
      </div>
    </div>
  );
}
