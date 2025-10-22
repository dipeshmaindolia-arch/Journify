import * as React from "react";
import clsx from "clsx";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx(
          "flex min-h-[80px] w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
