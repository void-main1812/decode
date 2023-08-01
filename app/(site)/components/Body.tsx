"use client";

import React, { useState } from "react";

import HeroSection from "@/app/(site)/components/HeroSection";
import Sponsors from "@/app/(site)/components/Sponsors";
import AboutSection from "@/app/(site)/components/AboutSection";
import Members from "@/app/(site)/components/Members";
import Events from "@/app/(site)/components/Events";
import Wrap from "@/app/(site)/components/Wrap";

const Body = () => {
  // if (globalThis.window?.innerWidth < 1000) {
  //   return (
  //     <>
  //       <div className="overflow-hidden flex-col h-[100vh] w-[100vw] flex justify-center items-center ">
  //         <Image
  //           alt="Decode Logo"
  //           src="/images/decode_logo_colored.png"
  //           height={150}
  //           width={150}
  //         />
  //         <h1 className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-gray-200/80 to-gray-200/50 text-4xl mt-8 font-bold">
  //           Use Desktop
  //         </h1>
  //         <p className="mt-8 text-sm text-gray-500 w-[80vw] text-center">
  //           😥 Unfortunately we are currently working on the responsiveness of
  //           the website. Please don&apos;t mind and checkout the website on
  //           desktop. Sorry for the incnvinience caused
  //         </p>
  //       </div>
  //     </>
  //   );
  // }

  // ---------------------------------Main Body Starts Here

  return (
    <div className=" mt-[25vh] z-0 flex flex-col items-center overflow-x-hidden ">
      {/* ----------------------------------Hero Section----------------------------------------- */}
      <HeroSection />
      {/* -------------------------------------Sponsors Section---------------------------------------- */}
      <Sponsors />
      {/* --------------------------------------Advantages of Decode------------------------------------- */}
      <AboutSection />
      {/* ------------------------------------Core Team Section------------------------------------------ */}
      <Members />
      {/* --------------------------------------------Events & Activities-----------------------------------  */}
      <Events />
      {/*  ---------------------------------------------Wrap Up--------------------------------------------------  */}
      <Wrap />
    </div>
  );
};

export default Body;
