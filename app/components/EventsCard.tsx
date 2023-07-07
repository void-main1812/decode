'use client';

import React, {useEffect, useRef} from 'react';
import {Inter} from 'next/font/google'
import {motion, useAnimation, useInView} from "framer-motion";

interface EventsCardProps {
    title: string;
    description: string;
    show: string;
    background: string;
    onClick?: () => void;
    delay: number;
}

const inter = Inter({
    subsets: ['latin']
})

const EventsCard: React.FC<EventsCardProps> = ({title, delay, onClick, description, show, background}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "-20% 0% -20% 0%", once: true})

    const mainControls = useAnimation();

    useEffect(() => {
        //     Fire animation
        if (isInView) {
            mainControls.start("visible").then(() => console.log("Animation completed"))
        }
    }, [isInView])

    return (
        <motion.div variants={{
            hidden: {
                opacity: 0,
                y: '-10%'
            },
            visible: {
                opacity: 1,
                y: '0%'
            }
        }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{duration: 0.25, delay: delay}}
                    ref={ref}
                    onClick={onClick}
             className={`bg-gradient-to-br cursor-pointer w-[40vw] p-4 flex flex-col rounded-md font-semibold gap-2 justify-start items-start ${background} `}>
            <motion.h1 variants={{
                hidden: {
                    opacity: 0,
                    y: '10%'
                },
                visible: {
                    opacity: 1,
                    y: '0%'
                }
            }}
                       initial='hidden'
                       animate='visible'
                       transition={{duration: 0.25, delay: 0.2}}
                       className={`text-2xl text-gray-100 ${inter.className}`}>{title}</motion.h1>
            <motion.p variants={{
                hidden: {
                    opacity: 0,
                    height: 0
                },
                visible: {
                    opacity: 1,
                    height: 'auto'
                },
                exit: {
                    opacity: 0,
                    height: 0,
                    transition: {
                        duration: 1.5
                    }
                }
            }}
                      initial='hidden'
                      animate={show === 'hidden' ? 'hidden' : 'visible'}
                      transition={{duration: 0.25}}
                      exit='exit'
                      className={`text-lg font-normal text-gray-500 leading-8 ${inter.className} ${show} `}>{description}</motion.p>
        </motion.div>
    );
};

export default EventsCard;