import React from "react";
import SideBar from "../components/SideBar";
import Content from "@/app/components/Content";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SideBar>
      <div className="h-[100vh] w-[100vh] relative overflow-hidden">
        <Content>{children}</Content>
      </div>
    </SideBar>
  );
}
