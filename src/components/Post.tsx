import Image from "next/image";
import { useState } from "react";

import { Comment, User } from "../types";

interface PostProps {
  currentUser: User;
  addPost: (newPost: Comment) => void;
}

export function Post({ currentUser, addPost }: PostProps) {
  const [text, setText] = useState("");
  // Essa função cria um novo objeto de Comment e chama a função de adicionar o comentário no array
  function handleAddPost() {
    const newComment: Comment = {
      id: Math.random() * 100,
      content: text,
      createdAt: "Right now",
      score: 0,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
      replies: [],
    };
    console.log(newComment);
    addPost(newComment);
  }
  return (
    <div className="flex flex-col lg:flex-row bg-white w-full gap-6 p-6 rounded-lg shadow-sm">
      <Image
        src={currentUser.image.png}
        alt=""
        width={64}
        height={64}
        className="h-10 w-10 lg:block hidden"
      />
      <textarea
        className="w-full border rounded-lg border-lightgray resize-none 
                    h-24 px-4 py-2"
        placeholder="Add a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={handleAddPost}
        className="bg-moderateblue text-white px-7 py-3 rounded-lg self-start 
                        hover:bg-lightgrayishblue ease-in duration-300
                        placeholder:text-grayishblue lg:block hidden"
      >
        SEND
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
          onClick={handleAddPost}
          className="bg-moderateblue text-white px-7 py-3 rounded-lg self-start 
                        hover:bg-lightgrayishblue ease-in duration-300
                        placeholder:text-grayishblue"
        >
          SEND
        </button>
      </div>
    </div>
  );
}
