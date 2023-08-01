"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { motion, useAnimation, useInView } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { a } from "react-spring";

interface memberDetailsProps {
  name: string;
  image: string;
  role: string;
  description: string;
  Github?: string;
  LinkedIn?: string;
}

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const MemberDetails: React.FC<memberDetailsProps> = ({
  name,
  image,
  role,
  description,
  Github,
  LinkedIn,
}) => {
  const windowWidth = globalThis.window?.innerWidth > 500 ? true : false;
  const { ref, mainControls } = useScrollAnimation();

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: "-25%",
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      initial="hidden"
      animate={mainControls}
      ref={ref}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="sm:h-[80vh] flex-col justify-center items-center sm:items-start p-[10vh] gap-8 flex"
    >
      <div
        className={`flex justify-center sm:justify-start items-center gap-10 ${inter.className}`}
      >
        <Image
          src={image}
          alt={"image"}
          height={windowWidth ? 120 : 100}
          width={windowWidth ? 120 : 100}
          className="rounded-lg"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-4xl font-semibold text-gray-200">
            {name}
          </h1>
          <p className="text-2xl hidden sm:block text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-xl sm:text-2xl tracking-wider text-gray-400 m-4 sm:m-0 w-[80vw] sm:w-[50vw]">
        {description}
      </p>
      <div className="flex gap-4 mt-6">
        {Github ? (
          <a href={Github} target="_blank">
            <BiLogoGithub
              size={35}
              className="text-gray-200/50 cursor-pointer transition hover:text-white"
            />
          </a>
        ) : (
          ""
        )}
        {LinkedIn ? (
          <a href={LinkedIn} target="_blank">
            <BiLogoLinkedin
              size={35}
              className="text-gray-200/50 cursor-pointer transition hover:text-white"
            />
          </a>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
};

export default MemberDetails;
