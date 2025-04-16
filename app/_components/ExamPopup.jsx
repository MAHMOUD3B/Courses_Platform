"use client";

import { useState, useEffect } from "react";
import { FaClock, FaTimes } from "react-icons/fa";

// Array of questions with options and correct answers
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: "4",
  },
  {
    id: 3,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: "Jupiter",
  },
  {
    id: 4,
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    correct: "William Shakespeare",
  },
  {
    id: 5,
    question: "What is the boiling point of water in Celsius?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correct: "100°C",
  },
];

export default function ExamPopup({ handleExamVisibility }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  // Load saved state from localStorage
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("examState"));
    if (savedState) {
      setSelectedAnswers(savedState.selectedAnswers || {});
      setCurrentQuestion(savedState.currentQuestion || 0);
      setTimeLeft(savedState.timeLeft || 300);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    const examState = {
      selectedAnswers,
      currentQuestion,
      timeLeft,
    };
    localStorage.setItem("examState", JSON.stringify(examState));
  }, [selectedAnswers, currentQuestion, timeLeft]);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          // Move to the next question when the timer reaches 0
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            return 300; // Reset timer for the next question
          }
          return 0; // Stop timer if it's the last question
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")} : ${String(secs).padStart(2, "0")}`;
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestion(index);
    setTimeLeft(300); // Reset timer when switching questions manually
  };

  const handleSubmitExam = () => {
    alert("Exam submitted!");
    localStorage.removeItem("examState"); // Clear saved state after submission
    handleExamVisibility(false); // Close the exam popup
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-md"
        onClick={() => handleExamVisibility(false)}
      ></div>

      {/* Popup Content */}
      <div className="relative w-full max-w-md bg-indigo-600 rounded-lg shadow-md overflow-hidden flex flex-col">
        <button
          onClick={() => handleExamVisibility(false)}
          className="absolute right-5 top-5 text-red-500 hover:text-red-600 transition-colors duration-300 cursor-pointer p-2 rounded bg-white"
          title="إغلاق"
        >
          <FaTimes />
        </button>
        <div className="mt-5">
          <div className="flex-center gap-3 mx-auto px-2 py-1 w-fit rounded shadow-[0_0_10px_3px_rgba(250,250,0,0.3)] mb-5 bg-amber-300 text-white">
            <FaClock />
            <span>{formatTime(timeLeft)}</span>
          </div>
          <div className="flex-center gap-5">
            {questions.map((q, index) => (
              <span
                key={q.id}
                className={`flex-center cursor-pointer w-[40px] h-[40px] rounded-full border-2 ${
                  currentQuestion === index
                    ? "bg-white text-indigo-600"
                    : "border-white text-white hover:bg-white hover:text-indigo-600"
                } font-bold`}
                onClick={() => handleQuestionSelect(index)}
              >
                {q.id}
              </span>
            ))}
          </div>

          {/* Exam Content */}
          <div className="p-6 overflow-y-auto flex-grow ">
            <div className="bg-slate-200 px-5 py-8 rounded-lg">
              <h3 className="text-base font-medium mb-4">
                {currentQuestion + 1}. {questions[currentQuestion].question}
              </h3>

              <div className="space-y-5">
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={` border rounded-md cursor-pointer transition-colors ${
                      selectedAnswers[currentQuestion] === option
                        ? "border-white bg-indigo-600 text-white"
                        : "border-gray-300 hover:border-gray-400 shadow-[0_0_10px_rgba(20,0,200,.2)]"
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    <div className="flex items-center">
                      <div className="border-r p-3 border-slate-400 mr-3">
                        <div
                          className={`w-4 h-4 rounded border flex-center ${
                            selectedAnswers[currentQuestion] === option
                              ? "bg-indigo-600 border-white"
                              : "border-indigo-600"
                          }`}
                        >
                          {selectedAnswers[currentQuestion] === option && (
                            <div className="w-[6px] h-[6px] rounded-full bg-white"></div>
                          )}
                        </div>
                      </div>
                      <span className="text-sm">{option}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          {currentQuestion === questions.length - 1 && (
            <div className="p-4">
              <button
                onClick={handleSubmitExam}
                className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all duration-300"
              >
                Submit Exam
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
