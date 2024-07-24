"use client";
import { redirect } from "next/navigation";
import React, { FC } from "react";
import { useSelector } from "react-redux";

interface iRoot {
  children: React.ReactNode;
}
const MainRootLayout: FC<iRoot> = ({ children }) => {
  const user = useSelector((state: any) => state.userState);

  if (user !== null) {
    return <div>{children}</div>;
  } else {
    return redirect("/signin");
  }
};

export default MainRootLayout;
