"use client";

import React from "react";
import SideBar from "../components/SideBar";

const Page = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-black relative z-0 overflow-hidden">
      <div className="h-[50vh] -bottom-12 -left-12 z-10 absolute w-[50vh] rounded-[100%] bg-purple-700 blur-[40vh]" />
      <div className="h-[50vh] -top-12 -right-12 z-10 absolute w-[50vh] rounded-[100%] bg-indigo-700 blur-[40vh]" />
      <SideBar />
    </div>
  );
};

export default Page;
