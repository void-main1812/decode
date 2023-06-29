"use client";

import React, {useState} from "react";
import {Play} from "next/font/google";
import {Rowdies} from "next/font/google";
import {Inter} from "next/font/google";
import Button from "@/app/components/Button";
import Image from "next/image";
import {useSpring, a} from "react-spring";
import AdvantagesCard from "@/app/components/AdvantagesCard";
import {Player} from "@lottiefiles/react-lottie-player";
import Input from "@/app/components/Input";
import InputArea from "@/app/components/InputArea";
import UserItem from "@/app/components/UserItem";
import MemberDetails from "@/app/components/MemberDetails";

const play = Play({
    subsets: ["latin"],
    weight: "400",
});

const inter = Inter({
    subsets: ["latin"],
    weight: "400",
});

const rowdies = Rowdies({
    subsets: ["latin"],
    weight: "400",
});

const Body = () => {

    const [presentIndex, setPresentIndex] = useState(0);

    // -------------------------------------Details of Core Team Members

    const members = [
        {
            index: 0,
            name: "Sourabh Singh",
            role: "Chairperson",
            image: '/images/user.png',
            desc: ' Talented JavaScript developer and UI/UX designer, creating innovative digital experiences with skill and passion.'
        },
        {
            index: 1,
            name: "Sourabh Singh",
            role: "Chairperson",
            image: '/images/user.png',
            desc: 'a hardworking girl'
        },
        {
            index: 2,
            name: "Sourabh Singh",
            role: "Chairperson",
            image: '/images/user.png',
            desc: 'a hardworking boy'
        },
        {
            index: 3,
            name: "Sourabh Singh",
            role: "Chairperson",
            image: '/images/user.png',
            desc: 'a hardworking boy'
        },
        {
            index: 4,
            name: "Sourabh Singh",
            role: "Chairperson",
            image: '/images/user.png',
            desc: 'a hardworking boy'
        },
        {
            index: 5,
            name: "Sourabh Singh",
            role: "Chairperson",
            image: '/images/user.png',
            desc: 'a hardworking boy'
        },
        {
            index: 6,
            name: "Sourabh Singh",
            role: "Chairperson",
            image: '/images/user.png',
            desc: 'a hardworking boy'
        },
        {
            index: 7,
            name: "Sourabh Singh",
            role: "Chairperson",
            image: '/images/user.png',
            desc: 'a hardworking boy'
        },
        {
            index: 8,
            name: "Sourabh Singh",
            role: "Chairperson",
            image: '/images/user.png',
            desc: 'a hardworking boy'
        },
        {
            index: 9,
            name: "Sourabh Singh",
            role: "Chairperson",
            image: '/images/user.png',
            desc: 'a hardworking boy'
        },
    ]

    // ---------------------------------Handling the image or card hover animations

    const handleClick = (index: number) => {
        setPresentIndex(index);
        console.log(presentIndex);
    }

    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: {mass: 10, tension: 500, friction: 40},
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

    // ---------------------------------Main Body Starts Here

    return (
        <div className=" mt-[25vh] z-0 flex flex-col items-center ">

            {/* ----------------------------------Hero Section----------------------------------------- */}

            <div className="h-[60vh] w-[80vw] bg-purple-800 blur-[50vh] rounded-full absolute top-[-30vh]"/>
            <div className="flex flex-col gap-5 justify-center items-center">
                <p className="uppercase text-3xl text-white font-normal tracking-[5px]">
                    Welcome to
                </p>
                <div className={rowdies.className}>
                    <h1 className="text-8xl text-transparent mb-4 bg-clip-text bg-gradient-to-b relative from-gray-50 to-gray-600/20 font-bold tracking-[8px]">
                        DECODE
                        <div className={play.className}>
                            <p className="text-white text-xl tracking-wide uppercase absolute px-4 py-1 rounded-full backdrop-blur-sm -right-10 bottom-0 bg-gray-50/10">
                                beta
                            </p>
                        </div>
                    </h1>
                </div>
                <p className="uppercase text-3xl text-gray-100/40 font-normal tracking-[5px]">
                    Innovate, Collaborate & Code
                </p>
            </div>
            <Button className="mt-8" type="button" onClick={() => {
            }}>
                JOIN NOW
            </Button>
            <a.div
                className="group relative"
                onMouseMove={({clientX, clientY}) =>
                    handleMouseMove(clientX, clientY)
                }
                onMouseLeave={handleMouseLeave}
                style={{transform: props.xys.to(trans)}}
            >
                <div
                    className="h-[80vh] opacity-0 transition-opacity duration-500 group-hover:opacity-100 w-[40vh] bg-purple-600 blur-[30vh] rounded-full absolute -left-8 top-10"/>
                <div
                    className="h-[80vh] opacity-0 transition-opacity duration-500 group-hover:opacity-100 w-[60vh] bg-indigo-700 blur-[40vh] rounded-full -right-8 absolute -bottom-10"/>
                <Image
                    src={"/images/code.png"}
                    alt="coding preview"
                    height={619}
                    width={991}
                    className="mt-16 border-[1px] relative border-purple-900 rounded-xl "
                />
            </a.div>

            {/* -------------------------------------Sponsors Section---------------------------------------- */}

            <div className=' flex flex-col justify-center items-center container mt-[15vh]'>
                <p className='text-2xl text-gray-400/50 tracking-wider'>OUR COMMUNITY IS POWERED BY</p>
                <div className='flex justify-around items-center gap-[8vw] mt-8'>
                    <Image src={'/images/gfg_logo.png'} alt="gfg logo" height={70} width={280}/>
                    <Image src={'/images/opju_logo.png'} alt="opju logo" height={70} width={140}/>
                </div>
                <div className='relative flex justify-center items-center mt-[10vh] '>
                    <div
                        className='w-[50vw] h-[5vh] -top-[6vh] absolute bg-gradient-to-b z-0 rounded-[100%] from-indigo-500 to-indigo-950/10 blur-[10vh] '/>
                    <div
                        className='w-[75vw] h-[20vh] absolute z-10 rounded-[100%] bg-gradient-to-r from-gray-600/50 to-gray-800/50 -top-[0.25rem]'/>
                    <div className='w-[80vw] h-[20vh] rounded-[100%] z-20 bg-black '/>
                </div>
            </div>

            {/* --------------------------------------Advantages of Decode------------------------------------- */}

            <div className='container flex flex-col justify-center items-center'>
                <p className={`text-6xl text-transparent font-light bg-clip-text bg-gradient-to-b from-gray-100/80 to-gray-600/80 tracking-wider text-center leading-[12vh] ${rowdies.className}`}>WHY
                    SHOULD YOU<br/>JOIN DECODE</p>
                <p className={`w-[60vw] text-center text-gray-400 mt-4 font-extralight ${inter.className}`}>Because here
                    you&apos;ll learn the real stuff with fun</p>
                <div className='grid grid-cols-3 w-[85vw] grid-flow-row gap-12 mt-16 items-center'>

                    {/*Card 1  Industry Level Skills*/}

                    <AdvantagesCard className='text-center flex flex-col col-span-2 justify-center p-8 items-center'>
                        <Player src={'/animations/react_gray.json'} className='player' loop autoplay
                                style={{height: '30vh', width: '30vh', opacity: '0.5'}}/>
                        <h1 className={`text-2xl px-8 text-gray-200 font-semibold ${inter.className} `}>All
                            Modern and Industry level skills</h1>
                        <p className='text-gray-500 text-lg w-[35vw] mt-8'>Learn all new & industry level skills like
                            react js, next js, android development etc. By working on real life projects</p>
                    </AdvantagesCard>

                    {/*Card 2  Learn, Innovate and Grow*/}

                    <AdvantagesCard className='text-center flex flex-col justify-center p-8 items-center'>
                        <Player src={'/animations/brain_gray.json'} className='player' loop autoplay
                                style={{height: '25vh', width: '25vh', opacity: '0.5'}}/>
                        <h1 className={`text-2xl w-[25vw] px-8 text-gray-200 font-semibold ${inter.className} `}>Learn
                            innovate
                            and grow together</h1>
                        <p className='text-gray-500 text-lg w-[20vw] mt-8'>Learn together with like-minded ones to grow
                            faster</p>
                    </AdvantagesCard>

                    {/*Card 3  Powered by GFG*/}

                    <AdvantagesCard className='text-center flex flex-col justify-center p-8 items-center'>
                        <Player src={'/animations/bolt.json'} className='player' loop autoplay
                                style={{height: '25vh', width: '25vh', opacity: '0.5'}}/>
                        <h1 className={`text-2xl w-[25vw] px-8 text-gray-200 font-semibold ${inter.className} `}>Powered
                            by GeeksforGeeks</h1>
                        <p className='text-gray-500 text-lg w-[20vw] mt-8'>The community is powered by GeeksforGeeks</p>
                    </AdvantagesCard>

                    {/*Card 4  AI Collaboration*/}

                    <AdvantagesCard className='text-center flex col-span-2 flex-col justify-center p-8 items-center'>
                        <Player src={'/animations/ai_gray.json'} className='player' loop autoplay
                                style={{height: '25vh', width: '25vh', opacity: '0.5'}}/>
                        <h1 className={`text-2xl w-[35vw] px-8 text-gray-200 font-semibold ${inter.className} `}>Get
                            together with AI collaboration and assistent tools</h1>
                        <p className='text-gray-500 text-lg w-[35vw] mt-8'>Learn how to use modern AI tools like
                            Chat-GPT, GitHub Copilot and other Ai tools more efficiently</p>
                    </AdvantagesCard>
                </div>
                <Button onClick={() => {
                }} className='mt-12 p-6'> Get Started Now </Button>
            </div>

            {/* ------------------------------------Core Team Section------------------------------------------ */}

            <div className='container flex flex-col gap-8 justify-center items-center mt-20 mb-10 '>
                <h1 className={`text-6xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100/80 to-gray-600/80 uppercase font-bold ${rowdies.className} `}>Core
                    Members</h1>
                <div className='flex relative justify-center w-[95vw] items-center'>

                    {/*List of Members*/}

                    <div
                        className='h-[60vh] w-[25vw] rounded-xl z-10 mr-16 border-[1px] overflow-y-scroll border-gray-100/20 bg-gradient-to-br from-gray-100/20 to-gray-600/10'>
                        {members.map((item) => (
                            <UserItem name={item.name} image={item.image} role={item.role}
                                      onClick={() => handleClick(item.index)}
                                      key={item.index}/>
                        ))}
                    </div>

                    {/*Member Details*/}

                    <MemberDetails name={members[presentIndex].name} image={members[presentIndex].image}
                                   role={members[presentIndex].role} description={members[presentIndex].desc}/>
                    <div
                        className='h-[50vh] w-[50vh] bg-purple-600 rounded-full blur-[30vh] absolute -left-[10vw] z-0'/>
                </div>
            </div>

        </div>
    );
};

export default Body;
