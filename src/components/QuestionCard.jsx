import React from "react";
import leetcodeLogo from "../assets/leetcode.png";

const difficultyColors = {
  Easy: "bg-green-500 text-white",
  Medium: "bg-yellow-500 text-black",
  Hard: "bg-red-500 text-white",
};

const QuestionCard = ({ question }) => {
  const { name, difficulty, problemUrl } = question.questionId;

  return (
    <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between hover:bg-gray-700 transition">
      
      {/* Left side */}
      <div>
        <h3 className="text-lg font-semibold text-white">
          {name}
        </h3>

        <span
          className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${
            difficultyColors[difficulty]
          }`}
        >
          {difficulty}
        </span>
      </div>

      {/* Right side */}
      <a
        href={problemUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2"
      >
        <img
          src={leetcodeLogo}
          alt="LeetCode"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

export default QuestionCard;