"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import AccordionItem from "./AccordionItem";
import { FaLock, FaRegFile } from "react-icons/fa";
const ExamPopup = dynamic(() => import("./ExamPopup"), {
  ssr: false,
});
const PdfPopup = dynamic(() => import("./PdfPopup"), {
  ssr: false,
});

const Topics = () => {
  const [showPDF, setShowPDF] = useState(false);
  const [showExam, setShowExam] = useState(false);

  const renderExtraContent = (questions, minutes) => (
    <span className="uppercase">
      <span className="bg-[#00ff0020] text-green-600 px-2 py-[2px] rounded block">
        {questions} Question
      </span>
      <span className="bg-[#ff000020] text-red-600 px-2 py-[2px] rounded block mt-2">
        {minutes} Minutes
      </span>
    </span>
  );

  const renderTopicItem = (
    title,
    isButton = false,
    onClick = null,
    extraContent = null
  ) => (
    <div className="flex-between border-b border-gray-300 py-2 px-4">
      {isButton ? (
        <button
          onClick={onClick}
          className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-all duration-300"
        >
          <FaRegFile /> {title}
        </button>
      ) : (
        <span className="flex items-center gap-2">
          <FaRegFile /> {title}
        </span>
      )}
      <span>{extraContent || <FaLock />}</span>
    </div>
  );

  const sections = [
    {
      title: "Course Introduction",
      items: [
        { title: "Introduction" },
        {
          title: "Course Overview",
          isButton: true,
          onClick: () => setShowPDF(true),
          extraContent: renderExtraContent(0, 10),
        },
        { title: "Course Exercise / Referance Files" },
        { title: "Code Editor Installation (Optional if you have one)" },
        {
          title: "Empadding PHP in HTML",
          isButton: true,
          onClick: () => setShowExam(true),
        },
      ],
    },
    {
      title: "Javascript Language Basics",
      items: [
        { title: "Introduction" },
        { title: "Course Overview" },
        { title: "Course Overview", extraContent: renderExtraContent(0, 10) },
        { title: "Course Exercise / Referance Files" },
        { title: "Code Editor Installation (Optional if you have one)" },
        { title: "Empadding PHP in HTML" },
      ],
    },
    {
      title: "Components & Databinding",
      items: [
        { title: "Introduction" },
        { title: "Course Overview" },
        { title: "Course Overview", extraContent: renderExtraContent(0, 10) },
        { title: "Course Exercise / Referance Files" },
        { title: "Code Editor Installation (Optional if you have one)" },
        { title: "Empadding PHP in HTML" },
      ],
    },
  ];

  return (
    <section
      id="curriculm"
      className="md:absolute md:right-0 md:top-0 md:w-[35%] md:ps-6 md:pt-5"
    >
      <h2 className="text-2xl my-10 md:mt-0">Topics for this course</h2>
      <ProgressBar />
      {sections.map((section, index) => (
        <AccordionItem key={index} title={section.title}>
          <div className="space-y-2 font-[300]">
            {section.items.map((item, idx) => (
              <div key={idx}>
                {renderTopicItem(
                  item.title,
                  item.isButton,
                  item.onClick,
                  item.extraContent
                )}
              </div>
            ))}
          </div>
        </AccordionItem>
      ))}
      {showPDF && <PdfPopup handlePdfVisibility={setShowPDF} />}
      {showExam && <ExamPopup handleExamVisibility={setShowExam} />}
    </section>
  );
};

export default Topics;
