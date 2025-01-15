import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface BasePill extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const BasePill = ({ children, className, ...props }: BasePill) => {
  return (
    <>
      <div
        className={cn(
          "flex gap-x-3 bg-thertiary p-3 rounded-pattern",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export const BasePillFirstCol = ({ children }: BasePill) => {
  return <div className="flex gap-x-2">{children}</div>;
};

export const BasePillSecondCol = ({ children }: BasePill) => {
  return <div className="flex gap-x-2">{children}</div>;
};

export const BasePillThidCol = ({ children }: BasePill) => {
  return <div className="flex gap-x-2">{children}</div>;
};
