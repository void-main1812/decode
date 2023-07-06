import React, {useEffect, useRef} from 'react';
import Button from "@/app/components/Button";
import {a} from "react-spring";
import Image from "next/image";
import {motion, useAnimation, useInView} from "framer-motion";
import {Inter, Play, Rowdies} from "next/font/google";
import {useDragAnimation} from "@/hooks/useDragAnimation";
import {useRouter} from "next/navigation";

const inter = Inter({
    subsets: ["latin"],
});

const rowdies = Rowdies({
    subsets: ["latin"],
    weight: "400",
});

const play = Play({
    subsets: ["latin"],
    weight: "400",
});

const TextAnimation = {
    hidden: {
        opacity: 0, y: "-50%"
    },
    visible: {
        opacity: 1, y: "0"
    },
}

interface Props {
    width?: "fit-content" | "100%"
}

const HeroSection = ({width = "fit-content"}: Props) => {

    const router = useRouter();
    const ref = useRef(null);
    const isInView = useInView(ref, {margin: "-20% 0% -20% 0%", once: true})

    const mainControls = useAnimation();

    useEffect(() => {
        //     Fire animation
        if (isInView) {
            mainControls.start("visible").then(() => console.log("Animation completed"))
        }
    }, [isInView])

    const {handleMouseLeave, handleMouseMove, props, trans} = useDragAnimation();

    return (
        <>
            <div className="h-[60vh] w-[80vw] bg-purple-800 blur-[50vh] rounded-full absolute top-[-30vh]"/>
            <div className="flex flex-col gap-5 justify-center items-center">
                <motion.p variants={TextAnimation} initial="hidden" animate="visible"
                          transition={{duration: 0.75, delay: 0.1}}
                          className="uppercase text-3xl text-white font-normal tracking-[5px]">
                    Welcome to
                </motion.p>
                <motion.div className={rowdies.className} variants={TextAnimation} initial="hidden" animate="visible"
                            transition={{duration: 1, delay: 0.5}}>
                    <h1 className="text-8xl text-transparent mb-4 bg-clip-text bg-gradient-to-b relative from-gray-50 to-gray-600/20 font-bold tracking-[8px]">
                        DECODE
                        <p className={`text-white text-xl tracking-wide uppercase absolute px-4 py-1 rounded-full backdrop-blur-sm -right-10 bottom-0 bg-gray-50/10 ${play.className}`}>
                            beta
                        </p>
                    </h1>
                </motion.div>
                <motion.p variants={TextAnimation} initial="hidden" animate="visible"
                          transition={{duration: 0.75, delay: 1.2}}
                          className="uppercase text-3xl text-gray-100/40 font-normal tracking-[5px]">
                    Innovate, Collaborate & Code
                </motion.p>
            </div>
            <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale: 1}} transition={{duration: 0.5, delay:1.5}} >
            <Button className="mt-8" type="button" onClick={() => router.push('/Auth')}>
                GET STARTED WITH DECODE
            </Button>
            </motion.div>
            <motion.div variants={{
                hidden: {
                    opacity:0, rotateX: -50, y: "10%"
                },
                visible: {
                    opacity:1, rotateX: 0, y: "0"
                }
            }} initial="hidden" animate={mainControls}
                        transition={{duration: 1.5}}
            style={{width}}
            ref={ref}
            >
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
            </motion.div>
        </>
    );
};

export default HeroSection;