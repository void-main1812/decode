import Image from "next/image";
import React from "react";
import { Rowdies } from "next/font/google";
import SideBarMenu from "./SideBarMenu";
import { BiLogOutCircle } from "react-icons/bi";
import { signOut } from "next-auth/react";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center w-[20vw] h-[100vh]">
        <div className="flex mt-16 mb-4 flex-col justify-center items-center gap-2 m-8">
          <Image
            src="/images/Decode_logo.png"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1
            className={`text-gray-300 font-light text-3xl tracking-wide ${rowdies.className}`}
          >
            Decode
          </h1>
        </div>
        <SideBarMenu />
        <button
          className="p-4 flex items-center justify-normal w-full gap-4 z-20"
          onClick={() => signOut()}
        >
          <BiLogOutCircle className="text-white h-6 w-6" />
          <span className="text-lg font-semibold uppercase text-white">
            Logout
          </span>
        </button>
      </div>
    </>
  );
};

export default SideBar;
