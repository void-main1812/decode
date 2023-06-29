import React from 'react';
import Image from "next/image";
import {Inter} from "next/font/google";
import {BiLogoGithub, BiLogoLinkedin} from "react-icons/bi";

interface memberDetailsProps {
    name: string;
    image: string;
    role: string;
    description: string;
}

const inter = Inter({
    subsets: ["latin"],
    weight: "400",
})

const MemberDetails: React.FC<memberDetailsProps> = ({name, image, role, description}) => {
    return (
        <div className='flex h-[80vh] flex-col justify-center items-start p-[10vh] gap-8'>
            <div className={`flex justify-start items-center gap-10 ${inter.className}`}>
                <Image src={image} alt={'image'} height={120} width={120} className='rounded-full'/>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-semibold text-gray-200'>{name}</h1>
                    <p className='text-2xl text-gray-500'>{role}</p>
                </div>
            </div>
            <p className='text-2xl tracking-wider text-gray-400 w-[50vw]' >{description}</p>
            <div className='flex gap-4 mt-6' >
                <BiLogoGithub size={35} className='text-gray-200/50 cursor-pointer transition hover:text-white' />
                <BiLogoLinkedin size={35} className='text-gray-200/50 cursor-pointer transition hover:text-white' />
            </div>
        </div>
    );
};

export default MemberDetails;