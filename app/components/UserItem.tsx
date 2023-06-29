'use client'

import React from 'react';
import Image from "next/image";
import {Inter} from "next/font/google";

interface userItemProps {
    name: string;
    image: string;
    role: string;
    onClick?: any;
}

const inter = Inter({
    subsets: ["latin"],
    weight: "400",
});

const UserItem: React.FC<userItemProps> = ({name, onClick, image, role}) => {
    return (
        <div onClick={onClick} className={`flex user-item justify-start hover:cursor-pointer hover:bg-gray-200/10 p-4 items-center border-b-[1px] border-gray-100/10 h-[10vh] ${inter.className} `} >
            <Image src={image} alt={"image"} height={50} width={50} className='rounded-full mr-4'/>
            <div className='flex flex-col'>
                <h1 className='text-lg font-semibold text-gray-200'>{name}</h1>
                <p className='text-sm text-gray-500'>{role}</p>
            </div>
        </div>
    );
};

export default UserItem;