import React from "react";

export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={
        "rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 " +
        "bg-white/70 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 " +
        "shadow-sm hover:shadow-lg transition-all duration-300 " +
        "hover:-translate-y-0.5 " +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
}
export function CardHeader({ className = "", children }) {
  return <div className={"p-5 md:p-6 " + className}>{children}</div>;
}
export function CardTitle({ className = "", children }) {
  return (
    <h3 className={"font-semibold leading-none tracking-tight text-lg " + className}>
      {children}
    </h3>
  );
}
export function CardContent({ className = "", children }) {
  return <div className={"px-5 pb-5 md:px-6 md:pb-6 " + className}>{children}</div>;
}
