import type { HTMLAttributes } from "react";

export function Container({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`site-shell px-4 sm:px-6 ${className}`}
      {...props}
    />
  );
}
