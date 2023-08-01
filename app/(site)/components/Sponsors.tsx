import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedImage from "@/app/(site)/components/AnimatedImage";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Sponsors = () => {
  const { ref, mainControls } = useScrollAnimation();

  const windowWidth = globalThis.window?.innerWidth > 500 ? true : false;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.25, delay: 0.1 }}
      ref={ref}
      className=" flex flex-col justify-center items-center container mt-[15vh]"
    >
      <p className="text-2xl text-gray-400/50 tracking-wider">
        OUR COMMUNITY IS POWERED BY
      </p>
      <div className="flex justify-around items-center gap-[8vw] mt-8">
        <AnimatedImage delay={0.3}>
          <Image
            src={"/images/gfg_logo.png"}
            alt="gfg logo"
            height={windowWidth ? 70 : 35}
            width={windowWidth ? 280 : 140}
          />
        </AnimatedImage>
        <AnimatedImage delay={0.5}>
          <Image
            src={"/images/opju_logo.png"}
            alt="opju logo"
            height={windowWidth ? 70 : 35}
            width={windowWidth ? 140 : 70}
          />
        </AnimatedImage>
      </div>
      <div className="relative flex justify-center items-center mt-[10vh] ">
        <div className="w-[50vw] h-[5vh] -top-[6vh] absolute bg-gradient-to-b z-0 rounded-[100%] from-indigo-500 to-indigo-950/10 blur-[10vh] " />
        <div className="w-[75vw] h-[20vh] absolute z-10 rounded-[100%] bg-gradient-to-r from-gray-600/50 to-gray-800/50 -top-[0.25rem]" />
        <div className="w-[80vw] h-[20vh] rounded-[100%] z-20 bg-black " />
      </div>
    </motion.div>
  );
};

export default Sponsors;
