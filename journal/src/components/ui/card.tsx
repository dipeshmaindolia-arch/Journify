import * as React from "react";
import clsx from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div className={clsx("rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950", className)} {...props} />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={clsx("p-6", className)} {...props} />;
}
