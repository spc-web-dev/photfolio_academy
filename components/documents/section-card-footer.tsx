"use client";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoComment, GoHeartFill } from "react-icons/go";
import { FaCommentAlt } from "react-icons/fa";
import { useState } from "react";

const SectionCardFooter = () => {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);

  return (
    <ul className="my-5 px-4 font-light flex items-center gap-5 text-neutral-500">
      <li
        className={`${
          comment && "text-blue-500"
        } flex items-center cursor-pointer group w-fit`}
        onClick={() => setComment(!comment)}
      >
        <span className="w-8 h-8 group-hover:bg-blue-50 dark:group-hover:bg-[rgba(253,242,248,.1)] group-hover:text-blue-500 rounded-full grid place-items-center">
          {comment ? <FaCommentAlt /> : <GoComment />}
        </span>
        <span className="group-hover:text-blue-500">100</span>
      </li>
      <li
        className={`${
          like && "text-pink-500"
        } flex items-center cursor-pointer group w-fit`}
        onClick={() => setLike(!like)}
      >
        <span
          className={` w-8 h-8 group-hover:bg-pink-50 dark:group-hover:bg-[rgba(253,242,248,.1)] group-hover:text-pink-500 rounded-full grid place-items-center`}
        >
          {!like ? <IoIosHeartEmpty /> : <GoHeartFill />}
        </span>
        <span className="group-hover:text-pink-500">100k</span>
      </li>
    </ul>
  );
};

export default SectionCardFooter;
