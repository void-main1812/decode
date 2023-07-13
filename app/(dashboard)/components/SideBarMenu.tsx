"use client";

import React from "react";
import SideBarItem from "./SideBarItem";
import {
  GridSharp,
  TicketSharp,
  CalendarClearSharp,
  HelpCircleSharp,
  VolumeOffSharp,
} from "react-ionicons";
import { usePathname } from "next/navigation";
import path from "path";

const SideBarMenu = () => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Dashboard",
      href: "/User",
      icon: GridSharp,
      active: pathname === "/User/dashboard",
      onclick: () => {},
      cursor: "cursor-not-allowed",
    },
    {
      label: "Events",
      href: "/User",
      icon: TicketSharp,
      active: pathname === "/User/events",
      cursor: "cursor-not-allowed",
    },
    {
      label: "Monthly",
      href: "/User",
      icon: CalendarClearSharp,
      active: pathname === "/User/monthly-events",
      cursor: "cursor-not-allowed",
    },
    {
      label: "Queries",
      href: "/User",
      icon: HelpCircleSharp,
      active: pathname === "/User/queries",
      cursor: "cursor-not-allowed",
    },
    {
      label: "Announcements",
      href: "/User",
      icon: VolumeOffSharp,
      active: pathname === "/User/announcements",
      cursor: "cursor-not-allowed",
    },
  ];

  return (
    <nav className="mt-4 z-20 flex w-full p-4 flex-col justify-between">
      <ul
        role="list"
        className="
            flex
            flex-col
            items-center
            space-y-1
            "
      >
        {routes.map((item) => (
          <SideBarItem
            key={item.label}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={item.active}
            onClick={item.onclick}
            color={item.active ? "#fff" : "#565656"}
            className={item.cursor}
          />
        ))}
      </ul>
    </nav>
  );
};

export default SideBarMenu;
