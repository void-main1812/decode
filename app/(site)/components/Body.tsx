"use client";

import React, {useState} from "react";
import {Rowdies} from "next/font/google";
import {Inter} from "next/font/google";
import Button from "@/app/components/Button";
import Image from "next/image";
import {a} from "react-spring";
import AdvantagesCard from "@/app/components/AdvantagesCard";
import {Player} from "@lottiefiles/react-lottie-player";
import UserItem from "@/app/components/UserItem";
import MemberDetails from "@/app/components/MemberDetails";
import EventsCard from "@/app/components/EventsCard";
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
            <HeroSection/>
            {/* -------------------------------------Sponsors Section---------------------------------------- */}
            <Sponsors/>
            {/* --------------------------------------Advantages of Decode------------------------------------- */}
            <AboutSection/>
            {/* ------------------------------------Core Team Section------------------------------------------ */}
            <Members/>
            {/*  -----------------------------------------Registration for Volunteers----------------------------------  */}
            <VolunteerOpening/>
            {/* --------------------------------------------Events & Activities-----------------------------------  */}
            <Events/>
            {/*  ---------------------------------------------Wrap Up--------------------------------------------------  */}
            <Wrap/>
        </div>
    );
};

export default Body;
