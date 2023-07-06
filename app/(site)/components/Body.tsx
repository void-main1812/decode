"use client";

import React, {useState} from "react";
import {Rowdies} from "next/font/google";
import {Inter} from "next/font/google";
import Button from "@/app/components/Button";
import Image from "next/image";
import {a} from "react-spring";
import AdvantagesCard from "@/app/components/AdvantagesCard";
import {Player} from "@lottiefiles/react-lottie-player";
import UserItem from "@/app/components/UserItem";
import MemberDetails from "@/app/components/MemberDetails";
import EventsCard from "@/app/components/EventsCard";
import VolunteerOpening from "@/app/(site)/components/VolunteerOpening";
import HeroSection from "@/app/(site)/components/HeroSection";
import Sponsors from "@/app/(site)/components/Sponsors";
import AboutSection from "@/app/(site)/components/AboutSection";

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
            <Sponsors/>
            {/* --------------------------------------Advantages of Decode------------------------------------- */}
            <AboutSection/>


            {/* ------------------------------------Core Team Section------------------------------------------ */}

            <div className='container flex flex-col gap-8 justify-center items-center mt-20 mb-10 ' id='members'>
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
            <div className='container flex flex-col gap-8 justify-center items-center relative mt-10 mb-10' id='events'>
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
                <h1 className={`text-6xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100/80 to-gray-600/80 uppercase font-black z-10 text-center ${inter.className} `}>Then
                    what are you<br/>waiting for?</h1>
                <p className={`text-gray-100 font-extralight text-lg w-[50vw] text-center z-10 ${inter.className} `}>Join
                    Decode now and start your journey to success.</p>
                <Button className='z-10 mt-10' height={"20"} onClick={() => {
                }}>Join Now</Button>
                <p className={`text-gray-100 font-extralight text-lg w-[50vw] text-center z-10 ${inter.className} `}>In
                    case of any Query you can <a href='mailto:sourabhsinghredmi@gmail.com'
                                                 className='text-white font-semibold cursor-pointer hover:underline'>Mail
                        Us</a></p>
            </div>
        </div>
    );
};

export default Body;
