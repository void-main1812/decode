"use client";

import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useDimensions } from "@/hooks/useDimensioins";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  const { width } = useDimensions();

  if (width.current < 1000) {
    return null;
  }

  return (
    <div
      className={`grid grid-cols-3 py-[8vh] border-t border-gray-400/30 px-10 ${inter.className}`}
    >
      <h1 className="text-gray-600 font-bold text-base">DECODE</h1>
      <div className="flex text-gray-600 flex-col gap-4 justify-start items-start">
        <a className="hover:text-gray-400 cursor-pointer transition">
          Instagram
        </a>
        <a className="hover:text-gray-400 cursor-pointer transition">Twitter</a>
        <a className="hover:text-gray-400 cursor-pointer transition">
          Facebook
        </a>
        <a className="hover:text-gray-400 cursor-pointer transition">
          LinkedIn
        </a>
        <a className="hover:text-gray-400 cursor-pointer transition">GitHub</a>
        <a className="hover:text-gray-400 cursor-pointer transition">YouTube</a>
        <a className="hover:text-gray-400 cursor-pointer transition">
          WhatsApp
        </a>
      </div>
      <div className="flex flex-col justify-start items-start text-gray-600">
        <Image
          src="/images/opju_logo.png"
          alt="opju logo"
          width={80}
          height={160}
          className="mb-4"
        />
        <a className="hover:text-gray-400 hover:underline transition cursor-pointer mb-2">
          O.P.Jindal University
        </a>
        <p>
          PunjiPathra Raigarh, <br />
          Chhattisgarh 496109
        </p>
      </div>
    </div>
  );
};

export default Footer;
