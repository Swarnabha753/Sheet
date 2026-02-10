const colors = {
  Easy: "bg-green-600/20 text-green-400",
  Medium: "bg-yellow-600/20 text-yellow-400",
  Hard: "bg-red-600/20 text-red-400",
};

export default function Badge({ level }) {
  return (
    <span
      className={`px-3 py-1 text-xs rounded-full font-semibold ${
        colors[level] || "bg-gray-600/20 text-gray-300"
      }`}
    >
      {level}
    </span>
  );
}