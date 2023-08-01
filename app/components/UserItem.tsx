"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, useAnimation, useInView } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface userItemProps {
  name: string;
  image: string;
  role: string;
  onClick?: any;
  active?: boolean;
}

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const UserItem: React.FC<userItemProps> = ({
  name,
  onClick,
  image,
  role,
  active,
}) => {
  const { ref, mainControls } = useScrollAnimation();

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.75,
        },
        visible: {
          opacity: 1,
          scale: 1,
        },
      }}
      initial="hidden"
      animate={mainControls}
      ref={ref}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={onClick}
      className={`flex justify-start hover:cursor-pointer hover:bg-gray-500/10 p-4 items-center border-b-[1px] border-gray-100/10 h-[10vh] ${
        active ? "bg-gray-200/10 hover:bg-gray-200/10" : ""
      } ${inter.className} `}
    >
      <Image
        src={image}
        alt={"image"}
        height={50}
        width={50}
        className="rounded-full mr-4"
      />
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-gray-200">{name}</h1>
        <p
          className={`text-sm text-gray-500 ${
            active ? "text-purple-500" : " "
          } `}
        >
          {role}
        </p>
      </div>
    </motion.div>
  );
};

export default UserItem;
