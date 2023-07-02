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
    className?: string;
    secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
                                           type,
                                           children,
                                           onClick,
                                           danger,
                                           disabled,
                                           ghost,
                                           className,
                                           secondary
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
    font-extralight 
    focus-visible:outline 
    focus-visible:outline-2 
    focus-visible:outline-offset-2
    text-white
    `,
                disabled && "opacity-50 cursor-default",
                secondary && "bg-white text-purple-500 text-xl font-semibold hover:scale-95 transition duration-400",
                ghost && "bg-transparent px-3 text-xl hover:bg-gray-100/30 ",
                danger &&
                "bg-rose-500 hover:bg-rose-700 focus-visible:outline-rose-900",
                !ghost &&
                !danger &&
                !secondary &&
                "bg-purple-600 text-sm px-8 hover:shadow-xl hover:shadow-purple-700/40 hover:scale-110 duration-200 transition",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
