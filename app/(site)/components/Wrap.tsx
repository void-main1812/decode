import React from 'react';
import Image from "next/image";
import Button from "@/app/components/Button";
import {Inter} from "next/font/google";
import TextSection from "@/app/(site)/components/TextSection";
import AnimatedImage from "@/app/(site)/components/AnimatedImage";

const inter = Inter({
    subsets: ["latin"],
});

const Wrap = () => {
    return (
        <div className='container relative flex flex-col gap-8 justify-center items-center mt-10 mb-20'>
            <div
                className='absolute h-[30vh] w-[60vw] top-1/2 bg-gradient-to-br from-violet-500 to-indigo-500 blur-[30vh] left-0 opacity-80 z-0'/>
            <AnimatedImage delay={0.1} >
            <Image src={'/images/Decode_logo.png'} alt={"logo"} height={100} width={100} className=' z-10 mt-20 '/>
            </AnimatedImage>
            <TextSection delay={0.3}>
                <h1 className={`text-6xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100/80 to-gray-600/80 uppercase font-black z-10 text-center ${inter.className} `}>Then
                    what are you<br/>waiting for?</h1>
            </TextSection>
            <TextSection delay={0.5}>
                <p className={`text-gray-100 font-extralight text-lg w-[50vw] text-center z-10 ${inter.className} `}>Join
                    Decode now and start your journey to success.</p>
            </TextSection>
            <Button className='z-10 mt-10' delay={0.7} height={"20"} onClick={() => {
            }}>Join Now</Button>
            <TextSection delay={0.9}>
                <p className={`text-gray-100 font-extralight text-lg w-[50vw] text-center z-10 ${inter.className} `}>In
                    case of any Query you can <a href='mailto:sourabhsinghredmi@gmail.com'
                                                 className='text-white font-semibold cursor-pointer hover:underline'>Mail
                        Us</a></p>
            </TextSection>
        </div>
    );
};

export default Wrap;