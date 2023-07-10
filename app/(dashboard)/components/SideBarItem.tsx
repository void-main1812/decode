"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { Inter } from "next/font/google";

interface SideBarItemProps {
  label: string;
  icon: any;
  href: string;
  size?: number;
  active?: boolean;
  onClick?: () => void;
}

const inter = Inter({
  subsets: ["latin"],
});

const SideBarItem: React.FC<SideBarItemProps> = ({
  label,
  icon: Icon,
  href,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li
      onClick={handleClick}
      className="flex gap-4 w-full justify-start items-center"
    >
      <Link
        href={href}
        className={clsx(
          `
      group
      flex
      gap-x-3
      rounded-md
      w-full
      p-3
      text-sm
      leading-6
      font-semibold
      text-gray-600
      hover:text-white
      hover:bg-gradient-to-br
      hover:from-gray-100/30
      hover:to-gray-100/20
      `,
          active &&
            "text-white bg-gradient-to-br from-gray-100/20 to-gray-100/10"
        )}
      >
        <Icon className="h-6 w-6" />
        <span className={`text-lg font-semibold uppercase ${inter.className}`}>
          {label}
        </span>
      </Link>
    </li>
  );
};

export default SideBarItem;
