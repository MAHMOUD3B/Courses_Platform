"use client";

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const encouragements = [
  {
    minScore: 90,
    message: "🔥 أسطورة حقيقية! أنت ضمن الـ10٪ الأعلى في الدورة! استمر كده 💪",
  },
  {
    minScore: 75,
    message: "ممتاز! أداؤك رائع، أنت في طريقك للقمة 🚀",
  },
  {
    minScore: 50,
    message: "أداء جيد! كمل كده وإن شاء الله تبقى من الأوائل 💡",
  },
  {
    minScore: 0,
    message: "شد حيلك شوية! 💪 لسه في فرص كتير تتقدم فيها ✨",
  },
];

export default function LeadboardModal({ score, handleVisibility, visibility }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const selected = encouragements.find((e) => score >= e.minScore);
    setMessage(selected?.message || "واصل المجهود!");
  }, [score]);

  if (!visibility) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-md z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-md rounded-xl shadow-xl p-6 relative">
        <button
          onClick={() => handleVisibility(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-xl transition-all duration-300 cursor-pointer"
        >
          <FaTimes />
        </button>

        <h2 className="text-lg font-bold text-center text-gray-800 mb-2">
          Course Name Shown Here
        </h2>
        <h3 className="text-indigo-700 text-center font-semibold text-lg mb-4">
          Leaderboard
        </h3>

        <div className="bg-indigo-50 p-4 rounded-lg text-center text-gray-800 text-sm">
          {message}
        </div>

        <ul className="mt-6 space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <li
              key={i}
              className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md"
            >
              الطالب رقم {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
