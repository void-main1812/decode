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
import UserItem from "@/app/components/UserItem";
import MemberDetails from "@/app/components/MemberDetails";
import EventsCard from "@/app/components/EventsCard";
import VolunteerOpening from "@/app/(site)/components/VolunteerOpening";
import HeroSection from "@/app/(site)/components/HeroSection";

const inter = Inter({
    subsets: ["latin"],
});

const rowdies = Rowdies({
    subsets: ["latin"],
    weight: "400",
});

const Body = () => {

    const [presentIndex, setPresentIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(0);

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

    // -------------------------------------Details of Events

    const events = [
        {
            index: 0,
            name: "Codifiers",
            details: "A weekly coding competition where you can test your coding skills and compete with other coders.",
            image: '/images/coding.jpg'
        },
        {
            index: 1,
            name: "Ux-Athon",
            details: "A UI/UX design competition where you can test your designing skills and compete with other designers.",
            image: '/images/ui.jpg'
        },
        {
            index: 2,
            name: "Decode OCC",
            details: "A semi-annual contribution competition where you can contribute to open source projects and win exciting prizes.",
            image: '/images/github.jpg'
        },
        {
            index: 3,
            name: "Code Camp",
            details: "A coding bootcamp where you can learn new technologies and build projects with the help of mentors.",
            image: '/images/camp-night.jpg'
        },
        {
            index: 4,
            name: "Hacktivate",
            details: "A annual hackathon where you can build projects and win exciting prizes.",
            image: '/images/hackathon.jpg'
        }
    ]

    // -------------------------------------Switch between Core Team Members

    const handleClick = (index: number) => {
        setPresentIndex(index);
        console.log(presentIndex);
    }


    // ---------------------------------Main Body Starts Here

    return (
        <div className=" mt-[25vh] z-0 flex flex-col items-center ">

            {/* ----------------------------------Hero Section----------------------------------------- */}
            <HeroSection/>
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

            <div className='container flex flex-col justify-center items-center' id='about' >
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
            </div>

            {/* ------------------------------------Core Team Section------------------------------------------ */}

            <div className='container flex flex-col gap-8 justify-center items-center mt-20 mb-10 ' id='members' >
                <h1 className={`text-6xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100/80 to-gray-600/80 uppercase font-bold ${rowdies.className} `}>Core
                    Members</h1>
                <p className={`text-gray-500 font-extralight text-lg w-[50vw] text-center ${inter.className} `}>These
                    efforts
                    can&apos;t be successful without the help of our core team members so let&apos;s
                    appreciate their efforts by supporting them on various platforms. </p>
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

            {/*  -----------------------------------------Registration for Volunteers----------------------------------  */}
            <VolunteerOpening/>

            {/* --------------------------------------------Events & Activities-----------------------------------  */}
            <div className='container flex flex-col gap-8 justify-center items-center relative mt-10 mb-10' id='events' >
                <h1 className={`text-6xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100/80 to-gray-600/80 uppercase font-bold ${rowdies.className} `}>Events
                    & Activities</h1>
                <p className={`text-gray-500 font-extralight text-lg w-[50vw] text-center ${inter.className} `}>There
                    will be
                    various Events and activities under the Community which will enhance your skills and motivate you to
                    excel in your career.</p>
                <div className='flex justify-center items-center z-10 relative w-[95vw]'>
                    <div className='flex flex-col justify-start items-start w-[50vw] '>
                        {
                            events.map((item, index) => {
                                return (
                                    <EventsCard
                                        key={index}
                                        title={item.name}
                                        description={item.details}
                                        background={index === showDetails ? 'from-gray-500/20 to-gray-800/20' : 'bg-transparent'}
                                        onClick={() => setShowDetails(index)}
                                        show={index === showDetails ? 'block' : 'hidden'}
                                    />
                                );
                            })
                        }
                    </div>
                    <Image src={events[showDetails].image} alt={"image"} className='object-cover rounded-lg'
                           height={500}
                           width={700}/>
                </div>
                <div
                    className='absolute bottom-0 h-[50vh] w-[80vh] bg-gradient-to-r from-pink-600/30 to-purple-500/30 left-[10vh] blur-[30vh] z-0'/>
            </div>

            {/*  ---------------------------------------------Wrap Up--------------------------------------------------  */}
            <div className='container relative flex flex-col gap-8 justify-center items-center mt-10 mb-20'>
                <div
                    className='absolute h-[30vh] w-[60vw] top-1/2 bg-gradient-to-br from-violet-500 to-indigo-500 blur-[30vh] left-0 opacity-80 z-0'/>
                <Image src={'/images/Decode_logo.png'} alt={"logo"} height={100} width={100} className=' z-10 mt-20 '/>
                <h1 className={`text-6xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100/80 to-gray-600/80 uppercase font-black z-10 text-center ${inter.className} `}>Then what are you<br/>waiting for?</h1>
                <p className={`text-gray-100 font-extralight text-lg w-[50vw] text-center z-10 ${inter.className} `}>Join Decode now and start your journey to success.</p>
                <Button className='z-10 mt-10' onClick={() => {}}>Join Now</Button>
                <p className={`text-gray-100 font-extralight text-lg w-[50vw] text-center z-10 ${inter.className} `}>In case of any Query you can <a href='mailto:sourabhsinghredmi@gmail.com' className='text-white font-semibold cursor-pointer hover:underline'>Mail Us</a></p>
            </div>
        </div>
    );
};

export default Body;
