import Image from "next/image";
import replyIcon from "public/images/icon-reply.svg";

interface onClickProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function ButtonReply({ onClick }: onClickProps) {
  return (
    <button className="flex items-center gap-2 ml-auto" onClick={onClick}>
      <Image
        src={replyIcon}
        alt="reply Icon"
        width={32}
        height={32}
        className="h-3 w-3"
      />
      <h4 className="font-bold text-moderateblue ">Reply</h4>
    </button>
  );
}
