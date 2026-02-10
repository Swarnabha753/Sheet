import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useSheetStore } from "../store/useSheetStore";
import leetcodeLogo from "../assets/leetcode.png";

export default function Topic({ topic }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: topic.id });

    const { toggleTopic, solvedMap, toggleSolved } = useSheetStore();

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <section
            ref={setNodeRef}
            style={style}
            className="bg-[#111827] border border-gray-700 rounded-xl"
        >
            {/* ===== TOPIC HEADER ===== */}
            <div
                className="flex items-center justify-between px-8 py-5 cursor-pointer"
                onClick={() => toggleTopic(topic.id)}
            >
                <div className="flex items-center gap-4">
                    <span
                        {...attributes}
                        {...listeners}
                        className="cursor-grab text-gray-400 text-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        ☰
                    </span>

                    <h2 className="text-xl font-semibold">
                        {topic.title}
                    </h2>
                </div>

                <span className="text-gray-400">
                    {topic.open ? "▾" : "▸"}
                </span>
            </div>

            {/* ===== CONTENT ===== */}
            {topic.open && (
                <div className="px-10 pb-8 space-y-8">
                    {topic.subTopics.map((sub) => (
                        <div key={sub.id}>

                            {sub.title && (
                                <h3 className="text-sm uppercase text-gray-400 mb-4">
                                    {sub.title}
                                </h3>
                            )}

                            <div className="space-y-4">
                                {sub.questions.map((q) => {
                                    const problemUrl =
                                        q.questionId?.problemUrl;

                                    const difficulty =
                                        q.questionId?.difficulty || "Easy";

                                    return (
                                        <div
                                            key={q.id}
                                            className="flex justify-between items-center
                                 bg-[#020617]
                                 border border-gray-600
                                 rounded-xl
                                 px-6 py-4
                                 hover:border-indigo-500
                                 transition"
                                        >
                                            {/* LEFT SIDE */}
                                            <div className="flex items-center gap-4">
                                                <input
                                                    type="checkbox"
                                                    className="accent-indigo-500"
                                                    checked={!!solvedMap[q.id]}
                                                    onChange={() => toggleSolved(q.id)}
                                                />

                                                {/* LeetCode Logo */}
                                                <img
                                                    src={leetcodeLogo}
                                                    alt="LeetCode"
                                                    className="w-4 h-4 object-contain shrink-0"
                                                />

                                                {/* Question Title */}
                                                <a
  href={q.problemUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:underline"
>


  <span>{q.title}</span>
</a>
                                            </div>
                                            {/* RIGHT SIDE – Difficulty */}
                                            <span
                                                className={`text-xs px-3 py-1 rounded-full font-medium
                          ${difficulty === "Easy"
                                                        ? "bg-green-700/20 text-green-300"
                                                        : difficulty === "Medium"
                                                            ? "bg-yellow-600/20 text-yellow-300"
                                                            : "bg-red-700/20 text-red-300"
                                                    }`}
                                            >
                                                {difficulty}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}