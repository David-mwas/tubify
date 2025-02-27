import React from "react";

type Size = "small" | "medium" | "large";
type Color = "blue" | "green" | "purple";

function AgentPulse({
  size = "medium",
  color = "blue",
}: {
  size: Size;
  color: Color;
}) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-12 h-12",
    large: "w-14 h-14",
  };
  const colorClasses = {
    blue: "bg-blue-500 shadow-[0_0_8px_4px_rgba(59,130,246,0.5)]",
    green: "bg-[#9ae9e9] shadow-[0_0_8px_4px_rgba(34,197,94,0.5)]",
    purple: "bg-indigo-500 shadow-[0_0_8px_4px_rgba(158,85,247,0.5)]",
  };
  return (
    <div
      className={`rounded-full flex items-center justify-center ${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse z-[99]`}
    ></div>
  );
}

export default AgentPulse;
