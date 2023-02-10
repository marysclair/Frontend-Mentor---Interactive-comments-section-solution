"use client";

import { useState } from "react";
import Image from "next/image";

import plusIcon from "public/images/icon-plus.svg";
import minusIcon from "public/images/icon-minus.svg";

interface RateProps {
  rateScore: number;
}

export function Rate({ rateScore }: RateProps) {
  const [value, setValue] = useState<number>(rateScore);

  function increase() {
    setValue(value + 1);
    console.log("clicou");
  }

  function decrease() {
    setValue(value - 1);
    console.log("clicou");
  }

  return (
    <div className="bg-verylightgray p-2 justify-between lg:h-24 w-28 items-center rounded-md lg:w-10 flex flex-row lg:flex-col">
      <button onClick={increase}>
        <Image
          src={plusIcon}
          alt="plus Icon"
          width={32}
          height={32}
          className="h-3 w-3"
        />
      </button>
      <span className="font-bold text-moderateblue "> {value} </span>
      <button onClick={decrease}>
        <Image
          src={minusIcon}
          alt="minus Icon"
          width={32}
          height={32}
          className="h-1 w-3"
        />
      </button>
    </div>
  );
}
