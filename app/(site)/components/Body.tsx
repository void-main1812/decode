"use client";

import React, { useState } from "react";

import VolunteerOpening from "@/app/(site)/components/VolunteerOpening";
import HeroSection from "@/app/(site)/components/HeroSection";
import Sponsors from "@/app/(site)/components/Sponsors";
import AboutSection from "@/app/(site)/components/AboutSection";
import Members from "@/app/(site)/components/Members";
import Events from "@/app/(site)/components/Events";
import Wrap from "@/app/(site)/components/Wrap";

const Body = () => {
  // ---------------------------------Main Body Starts Here

  return (
    <div className=" mt-[25vh] z-0 flex flex-col items-center ">
      {/* ----------------------------------Hero Section----------------------------------------- */}
      <HeroSection />
      {/* -------------------------------------Sponsors Section---------------------------------------- */}
      <Sponsors />
      {/* --------------------------------------Advantages of Decode------------------------------------- */}
      <AboutSection />
      {/* ------------------------------------Core Team Section------------------------------------------ */}
      <Members />
      {/*  -----------------------------------------Registration for Volunteers----------------------------------  */}
      <VolunteerOpening />
      {/* --------------------------------------------Events & Activities-----------------------------------  */}
      <Events />
      {/*  ---------------------------------------------Wrap Up--------------------------------------------------  */}
      <Wrap />
    </div>
  );
};

export default Body;
