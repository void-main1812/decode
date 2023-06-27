"use client";

import React from "react";
import { Play } from "next/font/google";
import { Rowdies } from "next/font/google";
import Button from "@/app/components/Button";
import Image from "next/image";

const play = Play({
  subsets: ["latin"],
  weight: "400",
});

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});

const Body = () => {
  return (
    <div className=" mt-[25vh] z-0 flex flex-col items-center ">
      <div className="h-[60vh] w-[80vw] bg-purple-800 blur-[50vh] rounded-full absolute top-[-30vh]" />
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
      <div className={rowdies.className}>
        <Button className="mt-8" type="button" onClick={() => {}}>
          JOIN NOW
        </Button>
      </div>
      <Image
        src={"/images/code.png"}
        alt="coding preview"
        height={619}
        width={991}
        className="mt-16 border-8 border-gray-50/20 rounded-3xl "
      />
    </div>
  );
};

export default Body;
