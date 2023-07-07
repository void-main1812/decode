'use client'

import React, {useEffect, useRef} from 'react';
import clsx from "clsx";
import {motion, useAnimation, useInView} from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface cardProps {
    children?: React.ReactNode;
    className?: string;
    delay?: number;
}

const AdvantagesCard: React.FC<cardProps> = ({children, className, delay}) => {

    const {ref, mainControls} = useScrollAnimation();

    return (
        <motion.div variants={{
            hidden: {
                opacity: 0,
                scale: 0.8
            },
            visible: {
                opacity: 1,
                scale: 1
            }
        }}

                    initial="hidden"
                    animate={mainControls}
                    transition={{duration: 0.5, delay: delay}}
                    ref={ref}
                    className={clsx(`
        bg-gradient-to-b
        rounded-lg
        border-[1px]
        border-gray-100/20
        from-gray-800/20
        to-gray-600/30
        group
        relative
        `, className)}
        >
            <div
                className='h-[40vh] w-[40vh] bg-indigo-500 blur-[25vh] transition-opacity duration-500 rounded-full absolute z-0 opacity-0 group-hover:opacity-100'/>
            {children}
        </motion.div>
    );
};

export default AdvantagesCard;