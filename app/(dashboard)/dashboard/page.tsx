"use client";

import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1 className={"text-white"}>Welcome to the dashboard page!</h1>
      <button
        type={"button"}
        className={"bg-gray-500"}
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Page;
