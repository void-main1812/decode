"use client";

import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import {
  LogoLinkedin,
  LogoYoutube,
  LogoTwitter,
  LogoFacebook,
  LogoInstagram,
  LogoGithub,
} from "react-ionicons";

const inter = Inter({
  subsets: ["latin"],
});

const page = () => {
  const socials = [
    {
      logo: LogoLinkedin,
    },
    {
      logo: LogoYoutube,
    },
    {
      logo: LogoTwitter,
    },
    {
      logo: LogoFacebook,
    },
    {
      logo: LogoInstagram,
    },
    {
      logo: LogoGithub,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Image
        src="/images/decode_logo_colored.png"
        alt="decode_logo_colored"
        width={120}
        height={120}
      />
      <h1
        className={`text-4xl mt-8 uppercase tracking-wider font-bold bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500 text-transparent ${inter.className}`}
      >
        Welcome to Decode
      </h1>
      <p className="text-lg mt-6 text-gray-500">
        {" "}
        😥 Unfortunately we are currently working on the website{" "}
      </p>
      <p className={`text-lg text-center text-white mt-6 ${inter.className}`}>
        But till the complete site is ready you can follow us on our sodial
        media platforms
        <br />
        and stay updated on what&apos;s going on
      </p>
      <div className="flex flex-row justify-center gap-16 items-center mt-10">
        {socials.map((social, index) => {
          const SocialLogo = social.logo;
          return (
            <SocialLogo
              key={index}
              color="white"
              height="32px"
              width="32px"
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
