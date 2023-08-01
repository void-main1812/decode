"use client";

import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { AuthForm } from "@/app/(auth)/components/AuthForm";
import TextSection from "@/app/(site)/components/TextSection";
import { useDragAnimation } from "@/hooks/useDragAnimation";
import { a } from "react-spring";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowBack } from "react-ionicons";
import Button from "@/app/components/Button";

const inter = Inter({
  subsets: ["latin"],
});

const Page = () => {
  const { calc, handleMouseLeave, handleMouseMove, props, trans } =
    useDragAnimation();

  const router = useRouter();

  return (
    <div
      className={`h-[100vh] flex justify-center sm:justify-between items-center w-full p-10 relative ${inter.className}`}
    >
      <div className="h-[40vw] w-[40vw] bg-[#CC00FF]/30 blur-[10vh] sm:blur-[30vh] fixed left-[-5vw] z-0 hidden sm:block top-[-5vh] sm:top-[-20vh]" />
      <div className="h-[40vw] w-[40vw] bg-[#6100FF]/30 blur-[10vh] sm:blur-[20vh] fixed right-[-5vw] z-0 bottom-[-5vh]" />
      <Button
        height="10vh"
        ghost
        className="p-8 top-8 left-8 z-10 cursor-pointer hidden sm:absolute "
        onClick={() => router.push("/")}
      >
        <ArrowBack color={"#fff"} />
      </Button>
      <div className="flex flex-col justify-center h-full items-center w-[80vw] sm:w-[35vw] z-10">
        <div className="flex flex-col justify-start w-full items-start">
          <TextSection delay={0.2}>
            <h1 className="text-4xl font-semibold text-gray-100">
              Get Started Now
            </h1>
          </TextSection>
          <TextSection delay={0.5}>
            <p className="text-lg text-white font-extralight tracking-wider">
              Enter Your credentials to access your account
            </p>
          </TextSection>
        </div>
        <AuthForm />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="h-[90vh] w-[55vw] bg-gradient-to-br from-[#A400CD] to-[#57006D] hidden sm:flex gap-8 py-16 rounded-xl z-10 p-10 flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center w-full items-start">
          <TextSection delay={0.7}>
            <h1 className="text-3xl text-white font-normal mb-2">
              Get Updates on Our every new Project!
            </h1>
          </TextSection>
          <TextSection delay={1}>
            <p className="text-xl text-gray-300/80 font-normal tracking-wider">
              Follow us on GitHub also
            </p>
          </TextSection>
        </div>
        <a.div
          onMouseMove={({ clientX, clientY }) =>
            handleMouseMove(clientX, clientY)
          }
          onMouseLeave={handleMouseLeave}
          style={{ transform: props.xys.to(trans) }}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src={"/images/Decode_follow.png"}
            className="rounded-md hover:scale-110 transition duration-200 shadow-[0_50px_100px] shadow-[#000]/60"
            alt={"Github"}
            height={336}
            width={365}
          />
        </a.div>
      </motion.div>
    </div>
  );
};

export default Page;
