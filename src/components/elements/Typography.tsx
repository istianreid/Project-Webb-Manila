import classNames from "classnames";
import type { FC } from "react";
import React from "react";

import { Inter, Poppins, DM_Serif_Display } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dm_serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

type ElementVariant = "h1" | "h2" | "h3" | "p";

type TypographySize =
  // Text
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"
  | "custom1";

type TypographyWeightOption =
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

type TypographyWeightValue =
  | "font-light"
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold"
  | "font-extrabold"
  | "font-black";

type TypographyFontFamily = "poppins" | "dmserif";

const TypographySizeClasses: Record<TypographySize, string> = {
  xs: classNames("text-[8px] md:text-xs"),
  sm: classNames("text-xs md:text-sm"),
  md: classNames("text-sm lg:text-md"),
  lg: classNames("text-sm md:text-md lg:text-lg"),
  xl: classNames("text-sm md:text-md lg:text-lg xl:text-xl"),
  "2xl": classNames("text-md md:text-lg lg:text-xl xl:text-2xl"),
  "3xl": classNames("text-lg md:text-xl lg:text-2xl xl:text-3xl"),
  "4xl": classNames("text-xl md:text-2xl lg:text-3xl xl:text-4xl"),
  "5xl": classNames("text-2xl md:text-3xl lg:text-4xl xl:text-5xl"),
  "6xl": classNames("text-3xl md:text-4xl lg:text-5xl xl:text-6xl"),
  "7xl": classNames("text-4xl md:text-5xl lg:text-6xl xl:text-7xl"),
  "8xl": classNames("text-5xl md:text-6xl lg:text-7xl xl:text-8xl"),
  "9xl": classNames("text-6xl md:text-7xl lg:text-8xl xl:text-9xl"),
  custom1: classNames(
    "text-[56px] md:text-[70px] lg:text-[70px] xl:text-[96px] 2xl:text-[135px] leading-[90%]",
  ),
};

const TypographyWeightClasses: Record<
  TypographyWeightOption,
  TypographyWeightValue
> = {
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

const TypographyFontFamilyClasses: Record<TypographyFontFamily, string> = {
  poppins: poppins.className,
  dmserif: dm_serif.className,
};

export interface TypographyProps {
  as?: "label";
  size: TypographySize;
  color?: string;
  weight?: TypographyWeightOption;
  className?: string;
  children: string | React.ReactNode;
  fontFamily?: TypographyFontFamily;
  element?: ElementVariant;
}

const Typography: FC<TypographyProps> = ({
  as,
  size,
  color = "text-white",
  weight = "regular",
  className,
  children,
  fontFamily = "poppins",
  element = "p",
}) => {
  const TypographyVariantClassName = TypographySizeClasses[size];
  const TypographyWeightClassName = TypographyWeightClasses[weight];
  const TypographyFontFamilyClassName = TypographyFontFamilyClasses[fontFamily];

  const Component = as || (element as keyof JSX.IntrinsicElements);

  return (
    <Component
      className={classNames(
        TypographyVariantClassName,
        TypographyWeightClassName,
        TypographyFontFamilyClassName,
        className,
        color,
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;
