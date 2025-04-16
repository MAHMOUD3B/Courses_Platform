"use client";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBook,
  FaChartBar,
  FaComment,
  FaQuestion,
  FaTimes,
} from "react-icons/fa";
import LeadboardModal from "./LeadboardModal";

const scrollToBottomOfElement = (ele) => {
  const el = document.getElementById(ele);
  if (!el) return;

  const offsetTop = el.getBoundingClientRect().top + window.pageYOffset;
  const elementHeight = el.offsetHeight;
  const windowHeight = window.innerHeight;

  window.scrollTo({
    top: offsetTop - 30 - (windowHeight - elementHeight),
    behavior: "smooth",
  });
};

const IconsBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeaderBoardOpen, setIsLeaderBoardOpen] = useState(false);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    if (isOpen) {
      const saved = sessionStorage.getItem("ask-question");
      if (saved) setQuestion(saved);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuestion(value);
    sessionStorage.setItem("ask-question", value);
  };

  const handleSubmit = () => {
    sessionStorage.removeItem("ask-question");
    setQuestion("");
    setIsOpen(false);
  };

  const renderIcon = (Icon, onClick) => (
    <li
      onClick={onClick}
      className="w-[35px] h-[35px] p-2 rounded-full border border-gray-300 text-gray-500 flex-center cursor-pointer"
    >
      <Icon />
    </li>
  );

  return (
    <>
      <ul className="flex items-center gap-[20px] px-3 py-2 md:w-[65%] md:pe-7">
        {renderIcon(FaBook, () => scrollToBottomOfElement("curriculm"))}
        {renderIcon(FaComment, () => scrollToBottomOfElement("comments"))}
        {renderIcon(FaQuestion, () => setIsOpen(true))}
        {renderIcon(FaChartBar, () => setIsLeaderBoardOpen(true))}
      </ul>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.6)] backdrop-blur-md flex-center">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl transition-all duration-300 cursor-pointer"
            >
              <FaTimes />
            </button>

            <textarea
              value={question}
              onChange={handleChange}
              name="comment"
              placeholder="Write a comment"
              className="w-full h-[150px] resize-none border-0 mt-10 outline-0 font-[300] rounded-md shadow-[0_0_30px_8px_rgba(0,0,0,0.1)] my-5 p-5 placeholder:font-[300]"
            />
            <button
              onClick={handleSubmit}
              className="mx-auto cursor-pointer flex-center gap-[10px] text-sm bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded transition-all duration-300"
            >
              Submit Review <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      {isLeaderBoardOpen && (
        <LeadboardModal
          score={63}
          handleVisibility={setIsLeaderBoardOpen}
          visibility={isLeaderBoardOpen}
        />
      )}
    </>
  );
};

export default IconsBar;
