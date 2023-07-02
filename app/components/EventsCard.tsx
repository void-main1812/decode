'use client';

import React from 'react';
import {Inter} from 'next/font/google'

interface EventsCardProps {
    title: string;
    description: string;
    show: string;
    background: string;
    onClick?: () => void;
}

const inter = Inter({
    subsets: ['latin']
})

const EventsCard: React.FC<EventsCardProps> = ({title, onClick, description, show, background}) => {
    return (
        <div onClick={onClick}
             className={`bg-gradient-to-br cursor-pointer w-[40vw] p-4 flex flex-col rounded-md font-semibold gap-2 justify-start items-start ${background} `}>
            <h1 className={`text-2xl text-gray-100 ${inter.className}`}>{title}</h1>
            <p className={`text-lg font-normal text-gray-500 leading-8 ${inter.className} ${show} `}>{description}</p>
        </div>
    );
};

export default EventsCard;