"use client";

import { useState, useEffect } from "react";

import data from "../src/data.json";

import { Comment, Reply, Root } from "../src/types";
import CommentBlock from "@/src/components/CommentBlock";
import ReplyBlock from "@/src/components/ReplyBlock";
import { Post } from "@/src/components/Post";
import { ReplyPost } from "@/src/components/ReplyPost";

export default function Home() {
  const { currentUser, comments }: Root = data;
  const [idPost, setidPost] = useState<number | null>(0);
  const [commentsArray, setCommentsArray] = useState<Comment[]>(comments);

  // Essa função atualiza o Post primeiro procurando em qual posição do array ele está e depois trocando de lugar pelo Post atualizado
  function updatePost(
    postToUpdate: Comment | Reply,
    updatedPost: Comment | Reply
  ) {
    let index: number = -1;
    let commentFound: Comment;

    comments.forEach((comment) => {
      if (comment.replies.includes(postToUpdate as Reply)) {
        index = comment.replies.indexOf(postToUpdate as Reply);
        commentFound = comment;
      }
    });

    if (index === -1 && !commentFound) {
      console.log("não achou!");
      index = comments.indexOf(postToUpdate as Comment);
      comments[index] = updatedPost as Comment;
    } else {
      commentFound.replies[index] = updatedPost as Reply;
    }

    setCommentsArray([...comments]);
  }

  // Essa função adiciona uma nova resposta a um comentário ou resposta no array
  function addReply(newReply: Reply) {
    let postFound: Comment;
    let replyFather: Reply;

    comments.forEach((comment) => {
      if (comment.id === idPost) {
        postFound = comment;
      }
    });

    if (!postFound) {
      comments.forEach((comment) => {
        comment.replies.forEach((reply) => {
          if (reply.id === idPost) {
            replyFather = reply as Reply;
          }
        });
      });

      comments.forEach((comment) => {
        if (comment.replies.includes(replyFather)) {
          postFound = comment;
        }
      });
    }

    postFound.replies.push(newReply);
    setCommentsArray([...comments]);
    setidPost(null);
  }

  // Essa função remove o comentário ou resposta do array
  function removePost(oldPost: Reply | Comment) {
    let index: number = -1;
    let commentFound: Comment;

    comments.forEach((comment) => {
      if (comment.replies.includes(oldPost as Reply)) {
        index = comment.replies.indexOf(oldPost as Reply);
        commentFound = comment;
      }
    });

    if (index === -1) {
      console.log("não achou!");
      index = comments.indexOf(oldPost as Comment);
      comments.splice(index, 1);
    } else {
      commentFound.replies.splice(index, 1);
    }

    console.log(comments);
    console.log(index);
    setCommentsArray([...comments]);
  }

  // Adiciona um novo comentário ao array
  function addPost(newPost: Comment) {
    console.log("addreply do componente pai!");
    comments.push(newPost);
    setCommentsArray([...comments]);
    setidPost(null);
  }

  return (
    <div className="flex lg:w-1/2 w-11/12 flex-col gap-4 mx-auto">
      {commentsArray.map((comment) => {
        return (
          <>
            <CommentBlock
              key={comment.id}
              comment={comment}
              currentUser={currentUser}
              onClick={() => setidPost(comment.id)}
              removePost={removePost}
              updatePost={updatePost}
            />
            {idPost === comment.id && (
              <ReplyPost
                post={comment}
                currentUser={currentUser}
                addReply={addReply}
              />
            )}
            <div className="border-l-[3px] lg:ml-12 pl-4 lg:pl-12 gap-4 border-solid border-lightgray flex flex-col items-center">
              {comment.replies.length !== 0 &&
                comment.replies.map((reply) => {
                  return (
                    <>
                      <ReplyBlock
                        key={reply.id}
                        reply={reply}
                        currentUser={currentUser}
                        onClick={() => setidPost(reply.id)}
                        removePost={removePost}
                        updatePost={updatePost}
                      />
                      {idPost === reply.id && (
                        <ReplyPost
                          post={reply}
                          currentUser={currentUser}
                          addReply={addReply}
                        />
                      )}
                    </>
                  );
                })}
            </div>
          </>
        );
      })}
      <Post currentUser={currentUser} addPost={addPost} />
    </div>
  );
}
