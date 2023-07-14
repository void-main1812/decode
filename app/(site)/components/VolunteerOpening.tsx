"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import Button from "@/app/components/Button";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import VolunteerModal from "@/app/(site)/components/VolunteerModal";

const inter = Inter({
  subsets: ["latin"],
});

interface VolunteerOpeningProps {
  onClick?: () => void;
}

const VolunteerOpening: React.FC<VolunteerOpeningProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, mainControls } = useScrollAnimation();

  return (
    <motion.div
      id="volunteer"
      variants={{
        hidden: {
          opacity: 0,
          rotateX: 90,
        },
        visible: {
          opacity: 1,
          rotateX: 0,
        },
      }}
      initial="hidden"
      animate={mainControls}
      ref={ref}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className={`flex w-[95vw] p-[5vh] justify-start z-10 mb-20 mt-10 bg-gradient-to-br from-purple-700 to-purple-900 rounded-lg border-[1px] border-purple-100/20 items-start`}
    >
      <div className="flex flex-col justify-between w-full items-start">
        <h1
          className={`text-4xl text-gray-100 font-semibold tracking-wider ${inter.className}`}
        >
          We are looking for volunteers!
        </h1>
        <p
          className={`text-lg text-purple-400 mt-6 font-normal w-[60vw] tracking-wide ${inter.className}`}
        >
          The process to set-up a community is not as easy as it seems to you
          while we have a great team of talented leaders we still need some
          volunteers to help us to operate fluently. And you will also get vast
          benefits by working with us. So, what are you waiting for? Join us
          now!
        </p>
      </div>
      <div className="flex items-center justify-between h-[25vh] ">
        <a href="https://forms.gle/QvMs3TZgX1LeN7tk7" target="_blank">
          <Button
            height={"25"}
            onClick={() => {}}
            className="w-[15vw]"
            secondary
          >
            Apply Now
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default VolunteerOpening;
