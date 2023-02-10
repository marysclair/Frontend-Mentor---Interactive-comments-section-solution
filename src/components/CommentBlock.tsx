import Image from "next/image";
import { useState } from "react";

import { Comment, User, Reply } from "../types";

import { ButtonReply } from "./ButtonReply";
import { ButtonDelete } from "./ButtonDelete";
import { ButtonEdit } from "./ButtonEdit";
import { Rate } from "../components/Rate";
import { UpdateBlock } from "./UpdateBlock";

interface CommentProps {
  comment: Comment;
  currentUser: User;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  removePost: (oldPost: Reply | Comment) => void;
  updatePost: (
    postToUpdate: Comment | Reply,
    updatedPost: Comment | Reply
  ) => void;
}

export default function CommentBlock({
  comment,
  onClick,
  currentUser,
  removePost,
  updatePost,
}: CommentProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex lg:flex-row flex-col-reverse bg-white items-center w-full gap-6 p-6 rounded-lg shadow-sm">
      <div className="flex w-full lg:w-auto justify-between lg:justify-stretch">
        <Rate rateScore={comment.score} />
        {currentUser.username === comment.user.username ? (
          <div className="flex lg:hidden ml-auto gap-6">
            <ButtonDelete post={comment} removePost={removePost} />
            <ButtonEdit toggleVisibility={toggleVisibility} />
          </div>
        ) : (
          <div className="flex lg:hidden">
            <ButtonReply onClick={onClick} />
          </div>
        )}
      </div>

      <div className="w-full">
        <div className="flex gap-4 items-center">
          <Image
            src={comment.user.image.png}
            alt={comment.user.image.webp}
            width={64}
            height={64}
            className="h-8 w-8"
          />
          <h2 className="text-darkblue font-bold">{comment.user.username}</h2>
          {currentUser.username === comment.user.username && (
            <span className="bg-moderateblue text-white font-medium text-sm rounded-sm px-1">
              you
            </span>
          )}
          <h3>{comment.createdAt}</h3>
          {currentUser.username === comment.user.username ? (
            <div className="lg:flex ml-auto gap-6 hidden">
              <ButtonDelete post={comment} removePost={removePost} />
              <ButtonEdit toggleVisibility={toggleVisibility} />
            </div>
          ) : (
            <div className="lg:flex lg:ml-auto hidden">
              <ButtonReply onClick={onClick} />
            </div>
          )}
        </div>
        {isVisible ? (
          <UpdateBlock
            post={comment}
            updatePost={updatePost}
            toggleVisibility={toggleVisibility}
          />
        ) : (
          <p className="mt-4">{comment.content}</p>
        )}
      </div>
    </div>
  );
}
