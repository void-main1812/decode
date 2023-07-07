"use client";

import React, {useEffect, useRef} from "react";
import clsx from "clsx";
import {motion, useAnimation, useInView} from 'framer-motion'
import {TailSpin} from "react-loader-spinner";

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
    isLoading?: boolean;
    height: string;
    delay?: number;
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
                                           isLoading,
                                           height,
                                           delay
                                       }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "0% 0% -20% 0%", once: true})

    const mainControls = useAnimation();

    useEffect(() => {
        //     Fire animation
        if (isInView) {
            mainControls.start("visible").then(() => console.log("Animation completed"))
        }
    }, [isInView])

    return (
        < motion.button
            variants={{
                hidden: {
                    opacity: 0,
                    scale: 0.9
                },
                visible: {
                    opacity: 1,
                    scale: 1
                }
            }}
            initial='hidden'
            animate={mainControls}
            transition={{duration: 0.25 , delay: delay}}
            ref={ref}
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
                    secondary && "bg-white text-purple-700 text-xl font-semibold",
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
            {isLoading ? <TailSpin
                height={height}
                width={height}
                color="#f0f0f0"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperClass=""
                visible={true}
            /> : children}
        </motion.button>
    );
};

export default Button;
