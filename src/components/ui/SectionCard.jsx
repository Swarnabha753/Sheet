import { useState } from "react";
import ProgressBar from "./ProgressBar";
import ProblemItem from "./ProblemItem";

export default function SectionCard({ section, onToggle }) {
  const [open, setOpen] = useState(true);

  const completed = section.problems.filter(p => p.completed).length;
  const total = section.problems.length;
  const progress = Math.round((completed / total) * 100);

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-xl font-semibold">
          {section.title}
        </h2>
        <span className="text-slate-400">
          {completed}/{total}
        </span>
      </div>

      <div className="mt-3">
        <ProgressBar value={progress} />
      </div>

      {open && (
        <div className="mt-4 space-y-3">
          {section.problems.map(problem => (
            <ProblemItem
              key={problem.id}
              problem={problem}
              onToggle={() => onToggle(section.id, problem.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}