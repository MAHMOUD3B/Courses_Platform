import Image from "next/image";
import React from "react";

const Comment = ({ name, img, date, message }) => {
  return (
    <li className="flex items-start gap-[20px] py-4">
      <Image
        src={img}
        alt="person image"
        width={40}
        height={40}
        className="rounded-full w-[40px] h-[40px]"
      />
      <div className="text-gray-600">
        <h5>{name}</h5>
        <p className="font-[300]">{date}</p>
        <p className="mt-2 font-[300]">{message}</p>
      </div>
    </li>
  );
};

export default Comment;
