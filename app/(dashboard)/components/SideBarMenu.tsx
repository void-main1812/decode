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
      href: "/User/dashboard",
      icon: GridSharp,
      active: pathname === "/User/dashboard",
      onclick: () => {},
    },
    {
      label: "Events",
      href: "/User/events",
      icon: TicketSharp,
      active: pathname === "/User/events",
    },
    {
      label: "Monthly",
      href: "/User/monthly-events",
      icon: CalendarClearSharp,
      active: pathname === "/User/monthly-events",
    },
    {
      label: "Queries",
      href: "/User/queries",
      icon: HelpCircleSharp,
      active: pathname === "/User/queries",
    },
    {
      label: "Announcements",
      href: "/User/announcements",
      icon: VolumeOffSharp,
      active: pathname === "/User/announcements",
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
          />
        ))}
      </ul>
    </nav>
  );
};

export default SideBarMenu;
