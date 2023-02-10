import Image from "next/image";
import { useState } from "react";

import { Reply, Comment } from "../types";
import deleteIcon from "public/images/icon-delete.svg";
import { ModalDelete } from "./ModalDelete";

interface ButtonDeleteProps {
  post: Reply | Comment;
  removePost: (oldPost: Reply | Comment) => void;
}
export function ButtonDelete({ post, removePost }: ButtonDeleteProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function handleDelete() {
    console.log("clicou!");
    removePost(post);
    toggleVisibility();
  }
  return (
    <>
      <button className="flex items-center gap-2" onClick={toggleVisibility}>
        <Image
          src={deleteIcon}
          alt="delete Icon"
          width={32}
          height={32}
          className="h-3 w-3"
        />
        <h4 className="font-bold text-softred ">Delete</h4>
      </button>
      {isVisible && (
        <ModalDelete
          handleDelete={handleDelete}
          toggleVisibility={toggleVisibility}
        />
      )}
    </>
  );
}
