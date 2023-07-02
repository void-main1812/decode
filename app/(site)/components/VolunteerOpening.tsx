'use client'

import React from 'react';
import {Inter} from 'next/font/google'
import Button from "@/app/components/Button";

const inter = Inter({
    subsets: ['latin']
})

interface VolunteerOpeningProps {
    onClick?: () => void;
}

const VolunteerOpening: React.FC<VolunteerOpeningProps> = ({onClick}) => {
    return (
        <div className={`flex w-[95vw] p-[5vh] justify-start z-10 mb-20 mt-10 bg-gradient-to-br from-purple-700 to-purple-900 rounded-lg border-[1px] border-purple-100/20 items-start`}>
            <div className='flex flex-col justify-between w-full items-start'>
                <h1 className={`text-4xl text-gray-100 font-semibold tracking-wider ${inter.className}`}>
                    We are looking for volunteers!
                </h1>
                <p className={`text-lg text-purple-400 mt-6 font-normal w-[60vw] tracking-wide ${inter.className}`}>
                    The process to set-up a community is not as easy as it seems to you while we have a great team of
                    talented leaders we still need some volunteers to help us to operate fluently. And you will also get
                    vast benefits by working with us. So, what are you waiting for? Join us now!
                </p>
            </div>
            <div className='flex flex-col justify-start items-start ml-10'>
                <Button onClick={onClick} className='mt-10 w-[15vw]' secondary >Apply Now</Button>
                <Button onClick={onClick} className='mt-10 w-[15vw]' ghost >Learn More</Button>
            </div>

        </div>
    );
};

export default VolunteerOpening;