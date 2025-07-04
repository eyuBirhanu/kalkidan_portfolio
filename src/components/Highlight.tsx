
interface HighlightProps {
  children: React.ReactNode;
  color?: "green" | "blue" | "yellow";
}

export default function Highlight({
  children,
  color = "green",
}: HighlightProps) {
  const colorClasses = {
    green: "text-green-200 border-green-300/50 bg-green-400/10",
    blue: "text-blue-300 border-blue-300/50 bg-blue-500/10",
    yellow: "text-white/80 border-white/50 bg-white/5",
  };

  const baseClasses =
    "text-nowrap font-medium border rounded-[6px] py-[.2px] px-[10px] mx-1";

  return (
    <span className={`${baseClasses} ${colorClasses[color]}`}>{children}</span>
  );
}
