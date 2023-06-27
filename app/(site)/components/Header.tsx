"use client";

import React from "react";
import { Play } from "next/font/google";
import Button from "@/app/components/Button";

const play = Play({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <div className="z-30 fixed top-0 w-full py-2 flex justify-between px-8 items-center ">
      <div className="text-xl text-gray-400 font-bold hover:cursor-pointer ">
        Decode
      </div>
      <div className={play.className}>
        <div className="flex gap-3 text-gray-400 text-base justify-center items-center">
          <span className="hover:text-white hover:cursor-pointer transition">
            About
          </span>
          <span className="hover:text-white hover:cursor-pointer transition">
            Contact Us
          </span>
          <span className="hover:text-white hover:cursor-pointer transition">
            Social
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center">
        <Button ghost type="button" onClick={() => {}}>
          LOGIN
        </Button>
        <Button type="button" onClick={() => {}}>
          JOIN NOW
        </Button>
      </div>
    </div>
  );
};

export default Header;
