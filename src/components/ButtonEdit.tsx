import Image from "next/image";
import editIcon from "public/images/icon-edit.svg";

interface ButtonEditProps {
  toggleVisibility: () => void;
}

export function ButtonEdit({ toggleVisibility }: ButtonEditProps) {
  return (
    <button className="flex items-center gap-2" onClick={toggleVisibility}>
      <Image
        src={editIcon}
        alt="edit Icon"
        width={32}
        height={32}
        className="h-3 w-3"
      />
      <h4 className="font-bold text-moderateblue ">Edit</h4>
    </button>
  );
}
