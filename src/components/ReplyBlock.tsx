import Image from "next/image";

import { Reply, User, Comment } from "../types";
import { Rate } from "../components/Rate";
import { ButtonReply } from "./ButtonReply";
import { ButtonDelete } from "./ButtonDelete";
import { ButtonEdit } from "./ButtonEdit";
import { useState } from "react";
import { UpdateBlock } from "./UpdateBlock";

interface ReplyProps {
  reply: Reply;
  currentUser: User;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  removePost: (oldPost: Reply | Comment) => void;
  updatePost: (
    postToUpdate: Comment | Reply,
    updatedPost: Comment | Reply
  ) => void;
}

export default function ReplyBlock({
  reply,
  currentUser,
  onClick,
  removePost,
  updatePost,
}: ReplyProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div
      className={
        isVisible
          ? "flex lg:flex-row flex-col-reverse bg-white w-full gap-6 p-6 rounded-lg shadow-sm"
          : "flex lg:flex-row flex-col-reverse bg-white w-full items-center gap-6 p-6 rounded-lg shadow-sm"
      }
    >
      <div className="flex w-full lg:w-auto justify-between lg:justify-stretch">
        <Rate rateScore={reply.score} />
        {currentUser.username === reply.user.username ? (
          <div className="flex lg:hidden gap-6">
            <ButtonDelete post={reply} removePost={removePost} />
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
            src={reply.user.image.png}
            alt={reply.user.image.webp}
            width={64}
            height={64}
            className="h-8 w-8"
          />
          <h2 className="text-darkblue font-bold">{reply.user.username}</h2>
          {currentUser.username === reply.user.username && (
            <span className="bg-moderateblue text-white font-medium text-sm rounded-sm px-1">
              you
            </span>
          )}
          <h3>{reply.createdAt}</h3>
          {currentUser.username === reply.user.username ? (
            <div className="lg:flex ml-auto gap-6 hidden">
              <ButtonDelete post={reply} removePost={removePost} />
              <ButtonEdit toggleVisibility={toggleVisibility} />
            </div>
          ) : (
            <div className="lg:flex hidden lg:ml-auto">
              <ButtonReply onClick={onClick} />
            </div>
          )}
        </div>
        {isVisible ? (
          <UpdateBlock
            post={reply}
            updatePost={updatePost}
            toggleVisibility={toggleVisibility}
          />
        ) : (
          <p className="mt-4">
            <span className="font-bold text-moderateblue">
              @{reply.replyingTo}
            </span>{" "}
            {reply.content}
          </p>
        )}
      </div>
    </div>
  );
}
