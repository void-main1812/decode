import React, { useEffect, useRef, useState } from "react";
import EventsCard from "@/app/components/EventsCard";
import Image from "next/image";
import { Inter, Rowdies } from "next/font/google";
import TextSection from "@/app/(site)/components/TextSection";
import AnimatedImage from "@/app/(site)/components/AnimatedImage";

const inter = Inter({
  subsets: ["latin"],
});

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});

const Events = () => {
  const [showDetails, setShowDetails] = useState(0);

  // -------------------------------------Details of Events

  const events = [
    {
      index: 0,
      name: "Codifiers",
      details:
        "A weekly coding competition where you can test your coding skills and compete with other coders.",
      image: "/images/coding.png",
    },
    {
      index: 1,
      name: "Ux-Athon",
      details:
        "A UI/UX design competition where you can test your designing skills and compete with other designers.",
      image: "/images/ui.png",
    },
    {
      index: 2,
      name: "Decode OCC",
      details:
        "A semi-annual contribution competition where you can contribute to open source projects and win exciting prizes.",
      image: "/images/github.png",
    },
    {
      index: 3,
      name: "Code Camp",
      details:
        "A coding bootcamp where you can learn new technologies and build projects with the help of mentors.",
      image: "/images/code_camp.png",
    },
    {
      index: 4,
      name: "Hacktivate",
      details:
        "A annual hackathon where you can build projects and win exciting prizes.",
      image: "/images/hackathon.png",
    },
  ];

  return (
    <div
      className="container flex flex-col gap-8 justify-center items-center relative mt-10 mb-10"
      id="events"
    >
      <TextSection delay={0.1}>
        <h1
          className={`text-6xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100/80 to-gray-600/80 uppercase font-bold ${rowdies.className} `}
        >
          Events & Activities
        </h1>
      </TextSection>
      <TextSection delay={0.3}>
        <p
          className={`text-gray-500 font-extralight text-lg w-[50vw] text-center ${inter.className} `}
        >
          There will be various Events and activities under the Community which
          will enhance your skills and motivate you to excel in your career.
        </p>
      </TextSection>
      <div className="flex justify-center items-center z-10 relative w-[95vw]">
        <div className="flex flex-col justify-start items-start w-[50vw] ">
          {events.map((item, index) => {
            return (
              <EventsCard
                delay={index * 0.1}
                key={index}
                title={item.name}
                description={item.details}
                background={
                  index === showDetails
                    ? "from-gray-500/20 to-gray-800/20"
                    : "bg-transparent"
                }
                onClick={() => setShowDetails(index)}
                show={index === showDetails ? "block" : "hidden"}
              />
            );
          })}
        </div>
        <AnimatedImage>
          <Image
            src={events[showDetails].image}
            alt={"image"}
            className="object-cover rounded-lg"
            loading="lazy"
            height={500}
            width={700}
            placeholder="blur"
            blurDataURL={events[showDetails].image}
          />
        </AnimatedImage>
      </div>
      <div className="absolute bottom-0 h-[50vh] w-[80vh] bg-gradient-to-r from-pink-600/30 to-purple-500/30 left-[10vh] blur-[30vh] z-0" />
    </div>
  );
};

export default Events;
