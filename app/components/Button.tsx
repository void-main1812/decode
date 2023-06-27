"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  danger,
  disabled,
  ghost,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
    flex 
    justify-center 
    rounded-md
    py-2
    text-md 
    font-semibold 
    focus-visible:outline 
    focus-visible:outline-2 
    focus-visible:outline-offset-2
    text-white
    `,
        disabled && "opacity-50 cursor-default",
        ghost && "bg-transparent px-3 text-xl",
        danger &&
          "bg-rose-500 hover:bg-rose-700 focus-visible:outline-rose-900",
        !ghost &&
          !danger &&
          "bg-purple-600 text-sm shadow-xl px-8 shadow-purple-800/50 hover:shadow-none transition"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
