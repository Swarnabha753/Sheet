import Badge from "./Badge";

export default function ProblemItem({ problem, onToggle }) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg transition 
      ${
        problem.completed
          ? "bg-slate-800/40 text-slate-400"
          : "bg-slate-800 hover:bg-slate-700"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={problem.completed}
          onChange={onToggle}
          className="accent-indigo-500 w-4 h-4"
        />
        <span
          className={`${
            problem.completed ? "line-through" : ""
          }`}
        >
          {problem.title}
        </span>
      </div>

      <Badge level={problem.difficulty} />
    </div>
  );
}