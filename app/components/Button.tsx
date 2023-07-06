"use client";

import React from "react";
import clsx from "clsx";
import {motion} from 'framer-motion'

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    children?: React.ReactNode;
    onClick?: () => void;
    danger?: boolean;
    disabled?: boolean;
    ghost?: boolean;
    className?: string;
    secondary?: boolean;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
                                           type,
                                           children,
                                           onClick,
                                           danger,
                                           disabled,
                                           ghost,
                                           className,
                                           secondary,
                                           fullWidth,
                                       }) => {
    return (
        < motion.button
            whileHover={
                {
                    scale: 1.1,
                    transition: {type: "spring", stiffness: 400, damping: 17, delay: 0}
                }
            }

            whileTap={
                {
                    scale: 0.9,
                    transition: {type: "spring", stiffness: 400, damping: 17}
                }
            }
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={
                clsx(
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
                    secondary && "bg-white text-purple-600 text-xl font-semibold",
                    ghost && "bg-transparent px-3 text-xl hover:bg-gray-100/30 ",
                    danger &&
                    "bg-rose-500 hover:bg-rose-700 focus-visible:outline-rose-900",
                    fullWidth && "w-full",
                    !ghost &&
                    !danger &&
                    !secondary &&
                    "bg-purple-600 text-sm px-8 hover:shadow-xl hover:shadow-purple-700/40 ",
                    className
                )
            }
        >
            {
                children
            }
        </motion.button>
    )
        ;
};

export default Button;
