import classNames from "classnames";
import type { ButtonHTMLAttributes, FC } from "react";
import React from "react";
import Typography from "./Typography";

type ButtonVariant = "primary" | "secondary";

type ButtonState = "default" | "hover" | "focus" | "disabled";

const ButtonVariantClasses: Record<ButtonVariant, Record<ButtonState, string>> = {
  primary: {
    default: classNames("bg-malachite-500 text-white"),
    hover: classNames("hover:bg-transparent hover:text-malachite-500 border-2 border-malachite-500"),
    focus: classNames("focus:bg-malachite-500 focus:text-white  "),
    disabled: classNames("bg-malachite-100 text-white"),
  },
  secondary: {
    default: classNames(" text-malachite-500 border-2 border-malachite-500"),
    hover: classNames("hover:bg-malachite-500 hover:text-white"),
    focus: classNames("hover:bg-malachite-500 hover:text-white"),
    disabled: classNames("bg-white text-malachite-100"),
  },
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | React.ReactElement | React.ReactNode;
  className?: string;
  variant: ButtonVariant;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, className, variant, disabled, ...buttonProps }) => {
  const ButtonVariantClassName = ButtonVariantClasses[variant];

  return (
    <button
      {...buttonProps}
      className={classNames(
        "h-9 select-none items-center whitespace-nowrap  px-6 duration-300 focus:outline-none md:h-10 md:px-8 lg:h-11",
        className,
        {
          [classNames(ButtonVariantClassName.default, ButtonVariantClassName.hover, ButtonVariantClassName.focus)]:
            !disabled,
          [classNames(ButtonVariantClassName.disabled, "cursor-not-allowed")]: disabled,
        }
      )}
    >
      <Typography variant="lg" className="flex items-center justify-center " customWeight="bold">
        {children}
      </Typography>
    </button>
  );
};
