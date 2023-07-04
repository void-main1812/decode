'use client';

import React from 'react';
import Image from "next/image";
import {Inter} from 'next/font/google'
import Link from "next/link";
import {AuthForm} from "@/app/(auth)/components/AuthForm";

const inter = Inter({
    subsets: ["latin"],
});

const Page = () => {
    return (
        <div className={`h-[100vh] flex justify-between items-center w-full p-10 relative ${inter.className}`}>
            <div className='h-[40vw] w-[40vw] bg-[#CC00FF]/30 blur-[30vh] fixed left-[-5vw] z-0 top-[-20vh]'/>
            <div className='h-[40vw] w-[40vw] bg-[#6100FF]/30 blur-[20vh] fixed right-[-5vw] z-0 bottom-[-5vh]'/>
            <Link href={'/'}>
                <Image src={'/images/Decode_logo.png'} alt={"Logo"} width={40} height={40}
                       className='z-10 absolute top-8 left-8'/>
            </Link>
            <div className='flex flex-col justify-center h-full items-center w-[35vw] z-10'>
                <div className='flex flex-col justify-start w-full items-start'>
                    <h1 className='text-4xl font-semibold text-gray-100'>Get Started Now</h1>
                    <p className='text-lg text-white font-extralight tracking-wider'>Enter Your credentials to access
                        your account</p>
                </div>
                <AuthForm/>
            </div>
            <div
                className='h-[90vh] w-[55vw] bg-gradient-to-br from-[#A400CD] to-[#57006D] gap-8 py-16 rounded-xl flex z-10 p-10 flex-col justify-center items-center'>
                <div className='flex flex-col justify-center w-full items-start'>
                    <h1 className='text-3xl text-white font-normal mb-2'>Get Updates on Our every new
                        Project!</h1>
                    <p className='text-xl text-gray-300/80 font-normal tracking-wider'>Follow us on GitHub also</p>
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                    <Image src={'/images/Decode_follow.png'}
                           className='rounded-md shadow-[0_50px_100px] shadow-[#000]/60' alt={"Github"} height={336}
                           width={365}/>
                </div>
            </div>
        </div>
    );
};

export default Page;