export default function ProgressBar({ value }) {
  return (
    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-indigo-500 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}