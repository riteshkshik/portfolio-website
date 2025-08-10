import React from "react";

export function Button({
  children,
  variant = "default",
  className = "",
  asChild,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl text-sm font-medium " +
    "h-10 px-4 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400/50 " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default:
      "bg-indigo-600 text-white hover:bg-indigo-500 active:scale-[0.98] shadow-sm",
    outline:
      "border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60",
    ghost: "hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60",
  };

  const Comp = asChild ? "a" : "button";
  return (
    <Comp className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  );
}
