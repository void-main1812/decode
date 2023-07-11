"use client";

import React from "react";

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="w-[calc(100vw-20vw)] absolute top-0 right-0 m-4 rounded-lg bg-gradient-to-br from-gray-50/20 to-gray-50/10">
      {children}
    </div>
  );
};

export default Content;
