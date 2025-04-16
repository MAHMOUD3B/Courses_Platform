import React from "react";
import Comment from "./Comment";
import { FaArrowRight } from "react-icons/fa";

const commentsData = [
  {
    img: "/images/per1.jpg",
    name: "Mahmoud",
    date: "Oct 15 2021",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos iure",
  },
  {
    img: "/images/per3.jpg",
    name: "Ali",
    date: "Dec 8 2024",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos iure",
  },
  {
    img: "/images/per2.jpg",
    name: "Khaled",
    date: "Jan 10 2023",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos iure",
  },
];
const Comments = () => {
  return (
    <section className="mt-5 md:w-[65%] md:pe-7" id="comments">
      <h2 className="text-2xl mb-5">Comments</h2>
      <ul className="comments">
        {commentsData.map((comment, index) => (
          <Comment
            key={index}
            img={comment.img}
            name={comment.name}
            date={comment.date}
            message={comment.message}
          />
        ))}
      </ul>
      <textarea
        name="comment"
        placeholder="Write a comment"
        className="w-full h-[150px] resize-none border-0 outline-0 font-[300] rounded-md shadow-[0_0_30px_8px_rgba(0,0,0,0.1)] my-5 p-5 placeholder:font-[300]"
      />
      <button className="cursor-pointer flex-center gap-[10px] text-sm bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded transition-all duration-300">
        Submit Review <FaArrowRight />
      </button>
    </section>
  );
};

export default Comments;
