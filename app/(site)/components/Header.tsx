"use client";

import React, { useState } from "react";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useDimensions } from "@/hooks/useDimensioins";

const Header = () => {
  const { width } = useDimensions();

  const session = useSession();

  const [isLoading, setIsLoading] = useState(false);

  const handleRoute = () => {
    setIsLoading(true);
    session.data?.user
      ? setTimeout(() => {
          router.push("/User");
        }, 1000)
      : setTimeout(() => {
          router.push("/Auth");
        }, 1000);
  };

  const router = useRouter();

  if (width.current < 1000) {
    return null;
  }

  return (
    <div className="z-30 fixed top-0 w-full py-2 flex bg-transparent backdrop-blur-md border-b-[1px] border-gray-400/20 justify-between px-8 items-center ">
      <div className="text-xl text-gray-400 font-bold hover:cursor-pointer ">
        Decode
      </div>
      <div className="flex gap-3 text-gray-400 text-base justify-center items-center">
        <a
          href="#members"
          className="hover:text-white hover:cursor-pointer transition"
        >
          Core Members
        </a>
        <a
          href="#events"
          className="hover:text-white hover:cursor-pointer transition"
        >
          Events
        </a>
        <a
          href="#about"
          className="hover:text-white hover:cursor-pointer transition"
        >
          About
        </a>
      </div>
      {session.data?.user ? (
        <Button
          height={"20"}
          isLoading={isLoading}
          delay={0.25}
          type="button"
          onClick={handleRoute}
        >
          GO TO DASHBOARD
        </Button>
      ) : (
        <Button
          height={"20"}
          isLoading={isLoading}
          delay={0.25}
          type="button"
          onClick={handleRoute}
        >
          JOIN NOW
        </Button>
      )}
    </div>
  );
};

export default Header;
