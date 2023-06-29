'use client'

import React from 'react';
import clsx from "clsx";
import {useSpring, a} from "react-spring";

interface cardProps {
    children?: React.ReactNode;
    className?: string;
}

const AdvantagesCard: React.FC<cardProps> = ({children, className}) => {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: {mass: 20, tension: 350, friction: 40},
    }));

    const calc = (x: number, y: number) => [
        (y - window.innerHeight / 2) / 80,
        (x - window.innerWidth / 2) / 80,
        1.01,
    ];

    const handleMouseMove = (x: number, y: number) => {
        const data = calc(x, y);
        set({xys: data});
    };

    const handleMouseLeave = () => {
        set({xys: [0, 0, 1]});
    };

    const trans = (x: number, y: number, s: number) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const transBlob = (x: number, y: number, s: number) => ` perspective(600px) translate3d(${x / 10}px,${y / 10}px,0) scale(${s})`;


    return (
        <a.div className={clsx(`
        bg-gradient-to-b
        rounded-lg
        border-[1px]
        border-gray-100/20
        from-gray-800/20
        to-gray-600/30
        group
        relative
        `, className)}
               onMouseMove={({clientX, clientY}) =>
                   handleMouseMove(clientX, clientY)
               }
               onMouseLeave={handleMouseLeave}
               style={{transform: props.xys.to(trans)}}>
            <div
                className='h-[40vh] w-[40vh] bg-indigo-500 blur-[25vh] transition-opacity duration-500 rounded-full absolute z-0 opacity-0 group-hover:opacity-100'/>
            {children}
        </a.div>
    );
};

export default AdvantagesCard;