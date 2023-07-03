"use client";

import React from "react";
import {Play} from "next/font/google";
import Button from "@/app/components/Button";
import {Rowdies} from "next/font/google";
import {useRouter} from "next/navigation";

const play = Play({
    subsets: ["latin"],
    weight: "400",
});

const rowdies = Rowdies({subsets: ["latin"], weight: "400"});

const Header = () => {

    const router = useRouter()

    return (
        <div
            className="z-30 fixed top-0 w-full py-2 flex bg-transparent backdrop-blur-md border-b-[1px] border-gray-400/20 justify-between px-8 items-center ">
            <div className="text-xl text-gray-400 font-bold hover:cursor-pointer ">
                Decode
            </div>
            <div className="flex gap-3 text-gray-400 text-base justify-center items-center">
        <a href='#members' className="hover:text-white hover:cursor-pointer transition">
          Core Members
        </a>
                <a href='#events' className="hover:text-white hover:cursor-pointer transition">
          Events
        </a>
                <a href='#about' className="hover:text-white hover:cursor-pointer transition">
          About
        </a>
            </div>
            <div className="flex justify-center gap-4 items-center">
                <Button type="button" onClick={() => router.push('/Login')}>
                    JOIN NOW
                </Button>
            </div>
        </div>
    );
};

export default Header;
