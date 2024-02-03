import type { ReactNode } from "react";
import React from "react";

export type SectionContainerProps = {
  className?: string;
  children?: ReactNode;
};

const SectionContainer = ({ className, children }: SectionContainerProps) => {
  return (
    <section>
      <div className={`item-center flex justify-center p-5 py-10 md:py-10 lg:py-14 xl:px-10 xl:py-20 ${className}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
