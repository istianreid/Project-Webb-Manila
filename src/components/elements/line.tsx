import classNames from "classnames";
import React from "react";

type LineVariant = "vertical" | "horizontal";

interface LineVariantProps {
  variant: LineVariant;
  className?: string;
}

const LineVariantClasses: Record<LineVariant, string> = {
  vertical: classNames("w-[2px] h-full"),
  horizontal: classNames("w-full h-[2px]"),
};

const Line: React.FC<LineVariantProps> = ({ variant, className }) => {
  const LineVariantClassName = LineVariantClasses[variant];

  return <div className={classNames(classNames("bg-white"), className, LineVariantClassName)}></div>;
};

export default Line;
