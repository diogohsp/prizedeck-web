import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BasePill {
  className?: string;
  children: ReactNode;
}

export const BasePill = ({ children, className }: BasePill) => {
  return (
    <>
      <div
        className={cn(
          "flex gap-x-3 bg-thertiary border-l-8 border-r-8 border-b-4 border-b-quaternary border-primary p-3 rounded-pattern",
          className
        )}
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
