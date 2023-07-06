import React from 'react';
import AdvantagesCard from "@/app/components/AdvantagesCard";
import {Player} from "@lottiefiles/react-lottie-player";
import {Inter, Rowdies} from "next/font/google";
import TextSection from "@/app/(site)/components/TextSection";

const inter = Inter({
    subsets: ["latin"],
});

const rowdies = Rowdies({
    subsets: ["latin"],
    weight: "400",
});

const AboutSection = () => {
    return (
        <div className='container flex flex-col justify-center items-center' id='about'>
            <TextSection delay={0.1}>
            <p className={`text-6xl text-transparent font-light bg-clip-text bg-gradient-to-b from-gray-100/80 to-gray-600/80 tracking-wider text-center leading-[12vh] ${rowdies.className}`}>WHY
                SHOULD YOU<br/>JOIN DECODE</p>
            </TextSection>
            <TextSection delay={0.25}>
            <p className={`w-[60vw] text-center text-gray-400 mt-4 font-extralight ${inter.className}`}>Because here
                you&apos;ll learn the real stuff with fun</p>
            </TextSection>
            <div className='grid grid-cols-3 w-[85vw] grid-flow-row gap-12 mt-16 items-center'>

                {/*Card 1  Industry Level Skills*/}

                <AdvantagesCard delay={0.25} className='text-center flex flex-col col-span-2 justify-center p-8 items-center'>
                    <Player src={'/animations/react_gray.json'} className='player' loop autoplay
                            style={{height: '30vh', width: '30vh', opacity: '0.5'}}/>
                    <h1 className={`text-2xl px-8 text-gray-200 font-semibold ${inter.className} `}>All
                        Modern and Industry level skills</h1>
                    <p className='text-gray-500 text-lg w-[35vw] mt-8'>Learn all new & industry level skills like
                        react js, next js, android development etc. By working on real life projects</p>
                </AdvantagesCard>

                {/*Card 2  Learn, Innovate and Grow*/}

                <AdvantagesCard delay={0.5} className='text-center flex flex-col justify-center p-8 items-center'>
                    <Player src={'/animations/brain_gray.json'} className='player' loop autoplay
                            style={{height: '25vh', width: '25vh', opacity: '0.5'}}/>
                    <h1 className={`text-2xl w-[25vw] px-8 text-gray-200 font-semibold ${inter.className} `}>Learn
                        innovate
                        and grow together</h1>
                    <p className='text-gray-500 text-lg w-[20vw] mt-8'>Learn together with like-minded ones to grow
                        faster</p>
                </AdvantagesCard>

                {/*Card 3  Powered by GFG*/}

                <AdvantagesCard delay={0.25} className='text-center flex flex-col justify-center p-8 items-center'>
                    <Player src={'/animations/bolt.json'} className='player' loop autoplay
                            style={{height: '25vh', width: '25vh', opacity: '0.5'}}/>
                    <h1 className={`text-2xl w-[25vw] px-8 text-gray-200 font-semibold ${inter.className} `}>Powered
                        by GeeksforGeeks</h1>
                    <p className='text-gray-500 text-lg w-[20vw] mt-8'>The community is powered by GeeksforGeeks</p>
                </AdvantagesCard>

                {/*Card 4  AI Collaboration*/}

                <AdvantagesCard delay={0.5} className='text-center flex col-span-2 flex-col justify-center p-8 items-center'>
                    <Player src={'/animations/ai_gray.json'} className='player' loop autoplay
                            style={{height: '25vh', width: '25vh', opacity: '0.5'}}/>
                    <h1 className={`text-2xl w-[35vw] px-8 text-gray-200 font-semibold ${inter.className} `}>Get
                        together with AI collaboration and assistent tools</h1>
                    <p className='text-gray-500 text-lg w-[35vw] mt-8'>Learn how to use modern AI tools like
                        Chat-GPT, GitHub Copilot and other Ai tools more efficiently</p>
                </AdvantagesCard>
            </div>
        </div>
    );
};

export default AboutSection;