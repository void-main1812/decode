import React from "react";
import SideBarItem from "./SideBarItem";
import { BiSolidDashboard } from "react-icons/bi";

const SideBarMenu = () => {
  const routes = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: BiSolidDashboard,
      active: true,
      onclick: () => console.log("Dashboard"),
    },
  ];

  return (
    <nav className="mt-4 flex w-full p-4 flex-col justify-between">
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
          />
        ))}
      </ul>
    </nav>
  );
};

export default SideBarMenu;
