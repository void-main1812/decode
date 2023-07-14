import React, { useEffect, useState } from "react";
import UserItem from "@/app/components/UserItem";
import MemberDetails from "@/app/components/MemberDetails";
import { Inter, Rowdies } from "next/font/google";
import TextSection from "@/app/(site)/components/TextSection";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const inter = Inter({
  subsets: ["latin"],
});

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});

const Members = () => {
  const [presentIndex, setPresentIndex] = useState(0);

  const { ref, mainControls } = useScrollAnimation();

  // -------------------------------------Details of Core Team Members

  const members = [
    {
      index: 0,
      name: "Sourabh Singh",
      role: "Chairperson",
      image: "/images/profile/Sourabh.png",
      desc: " Talented JavaScript developer and UI/UX designer, creating innovative digital experiences with skill and passion.",
      Github: "https://github.com/void-main1812",
      LinkedIn: "https://www.linkedin.com/in/sourabh-singh-491792240/",
    },
    {
      index: 1,
      name: "Swapnil Singh",
      role: "Vice-Chairperson",
      image: "/images/profile/Swapnil_Singh.png",
      desc: "Passionate backend developer, continuously learning new skills, thriving in collaborative team environments, and delivering exceptional results.",
      Github: "https://github.com/smile-1006",
      LinkedIn: "https://www.linkedin.com/in/swapnil-singh-bb4bbb220/",
    },
    {
      index: 2,
      name: "Anurag Gupta",
      role: "Vice-Chairperson",
      image: "/images/profile/Anurag_gupta.png",
      desc: "Driven backend developer embracing new skills, actively contributing to open-source projects, fueling innovation through collaboration.",
      Github: "http://github.com/anurag-int",
      LinkedIn: "https://www.linkedin.com/in/anurag-gupta-8b40b0207",
    },
    {
      index: 3,
      name: "Suryanshu Dobai",
      role: "Technical-Head",
      image: "/images/profile/Suryanshu_Dobai.png",
      desc: "Highly skilled Android developer with exceptional problem-solving abilities, crafting innovative solutions to complex challenges with expertise.",
      Github: "https://github.com/Suyanshu9",
      LinkedIn: "https://www.linkedin.com/in/sur99/",
    },
    {
      index: 4,
      name: "Aswin Pratap",
      role: "Technical-Head",
      image: "/images/profile/Aswin_pratap.png",
      desc: "Passionate Android developer specializing in Flutter, continuously expanding knowledge and eagerly embracing new technologies.",
      Github: "https://github.com/CodexEZ",
      LinkedIn: "https://www.linkedin.com/in/aswin-pratapsingh-a307b4200",
    },
    {
      index: 5,
      name: "Ved Agrawal",
      role: "Events-Head",
      image: "/images/profile/Ved_agrawal.png",
      desc: "A scholarly individual with outstanding programming skills, excelling as a problem solver in the realm of coding.",
      LinkedIn: "https://www.linkedin.com/in/ved-agarwal-1429ba253/",
    },
    {
      index: 6,
      name: "Simran Sharma",
      role: "Design/Branding-Head",
      image: "/images/profile/Simran_sharma.png",
      desc: "A talented UI/UX designer who combines artistic prowess with design expertise to create captivating digital experiences.",
      LinkedIn: "https://www.linkedin.com/in/simran-sharma-2abba9234/",
    },
    {
      index: 7,
      name: "Siddhart Mishra",
      role: "Public Relations & Outreach Head",
      image: "/images/profile/Siddhart_Mishra.png",
      desc: "A passionate DevOps enthusiast with a keen interest in AI technology, driving innovation at the intersection of operations and intelligence.",
      LinkedIn: "https://www.linkedin.com/in/siddharth-mishra-b87a1821a/",
    },
    {
      index: 8,
      name: "Om Rathore",
      role: "Marketing Head",
      image: "/images/profile/Om_Rathore.png",
      desc: "A scholarly individual with a deep passion for AI technology, consistently exploring its potential for groundbreaking advancements.",
      Github: "https://github.com/itzz-om",
      LinkedIn: "https://www.linkedin.com/in/titan098/",
    },
    {
      index: 9,
      name: "Vineet Singh",
      role: "Social Media Head",
      image: "/images/profile/Vineet_Singh.png",
      desc: "A dedicated individual with a strong passion for backend development and cloud technology, driving innovation with expertise.",
      Github: "https://github.com/ImagineGrr",
      LinkedIn: "https://www.linkedin.com/in/vineet-singh-38b52323b/",
    },
  ];

  // -------------------------------------Switch between Core Team Members

  const handleClick = (index: number) => {
    setPresentIndex(index);
  };

  return (
    <div
      className="container flex flex-col gap-8 justify-center items-center mt-20 mb-10 "
      id="members"
    >
      <TextSection delay={0.1}>
        <h1
          className={`text-6xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100/80 to-gray-600/80 uppercase font-bold ${rowdies.className} `}
        >
          Core Members
        </h1>
      </TextSection>
      <TextSection delay={0.3}>
        <p
          className={`text-gray-500 font-extralight text-lg w-[50vw] text-center ${inter.className} `}
        >
          These efforts can&apos;t be successful without the help of our core
          team members so let&apos;s appreciate their efforts by supporting them
          on various platforms.{" "}
        </p>
      </TextSection>
      <div className="flex relative justify-center w-[95vw] items-center">
        {/*List of Members*/}

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: "-30%",
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          animate={mainControls}
          ref={ref}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="h-[60vh] w-[25vw] rounded-xl z-10 mr-16 border-[1px] overflow-y-scroll border-gray-100/20 bg-gradient-to-br from-gray-100/20 to-gray-600/10"
        >
          {members.map((item) => (
            <UserItem
              name={item.name}
              image={item.image}
              role={item.role}
              onClick={() => handleClick(item.index)}
              key={item.index}
              active={item.index === presentIndex}
            />
          ))}
        </motion.div>

        {/*Member Details*/}

        <MemberDetails
          name={members[presentIndex].name}
          image={members[presentIndex].image}
          role={members[presentIndex].role}
          description={members[presentIndex].desc}
          Github={members[presentIndex].Github}
          LinkedIn={members[presentIndex].LinkedIn}
        />
        <div className="h-[50vh] w-[50vh] bg-purple-600 rounded-full blur-[30vh] absolute -left-[10vw] z-0" />
      </div>
    </div>
  );
};

export default Members;
