"use client";

import React from "react";
import { Play } from "next/font/google";
import { Rowdies } from "next/font/google";
import Button from "@/app/components/Button";
import Image from "next/image";
import { useSpring, a } from "react-spring";

const play = Play({
  subsets: ["latin"],
  weight: "400",
});

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});

const Body = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 500, friction: 40 },
  }));

  const calc = (x: number, y: number) => [
    (y - window.innerHeight / 2) / 50,
    (x - window.innerWidth / 2) / 50,
    1,
  ];

  const handleMouseMove = (x: number, y: number) => {
    const data = calc(x, y);
    set({ xys: data });
  };

  const handleMouseLeave = () => {
    set({ xys: [0, 0, 1] });
  };

  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

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
      <a.div
        className="group relative"
        onMouseMove={({ clientX, clientY }) =>
          handleMouseMove(clientX, clientY)
        }
        onMouseLeave={handleMouseLeave}
        style={{ transform: props.xys.to(trans) }}
      >
        <div className="h-[80vh] opacity-0 transition-opacity duration-500 group-hover:opacity-100 w-[40vh] bg-purple-600 blur-[30vh] rounded-full absolute -left-8 top-10" />
        <div className="h-[80vh] opacity-0 transition-opacity duration-500 group-hover:opacity-100 w-[60vh] bg-indigo-700 blur-[40vh] rounded-full -right-8 absolute -bottom-10" />
        <Image
          src={"/images/code.png"}
          alt="coding preview"
          height={619}
          width={991}
          className="mt-16 border-[1px] relative border-purple-900 rounded-xl "
        />
      </a.div>
    </div>
  );
};

export default Body;
