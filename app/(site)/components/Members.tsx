import React, {useEffect, useRef, useState} from 'react';
import UserItem from "@/app/components/UserItem";
import MemberDetails from "@/app/components/MemberDetails";
import {Inter, Rowdies} from "next/font/google";
import TextSection from "@/app/(site)/components/TextSection";
import {motion, useAnimation, useInView} from "framer-motion";

const inter = Inter({
    subsets: ["latin"],
});

const rowdies = Rowdies({
    subsets: ["latin"],
    weight: "400",
});

const Members = () => {

    const [presentIndex, setPresentIndex] = useState(0);

    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "-20% 0% -20% 0%", once: true})

    const mainControls = useAnimation();

    useEffect(() => {
        //     Fire animation
        if (isInView) {
            mainControls.start("visible").then(() => console.log("Animation completed"))
        }
    }, [isInView])

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

    // -------------------------------------Switch between Core Team Members

    const handleClick = (index: number) => {
        setPresentIndex(index);
        console.log(presentIndex);
    }

    return (
        <div className='container flex flex-col gap-8 justify-center items-center mt-20 mb-10 ' id='members'>
            <TextSection delay={0.1}>
                <h1 className={`text-6xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100/80 to-gray-600/80 uppercase font-bold ${rowdies.className} `}>Core
                    Members</h1>
            </TextSection>
            <TextSection delay={0.3}>
            <p className={`text-gray-500 font-extralight text-lg w-[50vw] text-center ${inter.className} `}>These
                efforts
                can&apos;t be successful without the help of our core team members so let&apos;s
                appreciate their efforts by supporting them on various platforms. </p>
            </TextSection>
            <div className='flex relative justify-center w-[95vw] items-center'>

                {/*List of Members*/}

                <motion.div variants={{
                    hidden: {
                        opacity: 0,
                        y: "-30%"
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                    }
                }}
                            initial="hidden"
                            animate={mainControls}
                            ref={ref}
                            transition={{duration: 0.75, delay: 0.3}}
                    className='h-[60vh] w-[25vw] rounded-xl z-10 mr-16 border-[1px] overflow-y-scroll border-gray-100/20 bg-gradient-to-br from-gray-100/20 to-gray-600/10'>
                    {members.map((item) => (
                        <UserItem name={item.name} image={item.image} role={item.role}
                                  onClick={() => handleClick(item.index)}
                                  key={item.index}/>
                    ))}
                </motion.div>

                {/*Member Details*/}

                <MemberDetails name={members[presentIndex].name} image={members[presentIndex].image}
                               role={members[presentIndex].role} description={members[presentIndex].desc}/>
                <div
                    className='h-[50vh] w-[50vh] bg-purple-600 rounded-full blur-[30vh] absolute -left-[10vw] z-0'/>
            </div>
        </div>
    );
};

export default Members;