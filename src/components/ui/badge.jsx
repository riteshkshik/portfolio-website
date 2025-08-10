import React from "react";

export function Badge({ children, variant = "default", className = "" }) {
  const styles =
    variant === "secondary"
      ? "bg-gray-100 text-gray-800"
      : "bg-black text-white";
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${styles} ${className}`}>
      {children}
    </span>
  );
}
