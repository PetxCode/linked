"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  MdEmojiObjects,
  MdHomeMax,
  MdNetworkCell,
  MdSearch,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { authUser } from "../global/slice";

const Header = () => {
  const path = usePathname();
  const dispatch = useDispatch();

  const navData = [
    {
      id: 1,
      name: "Home",
      url: "/main",
      icon: <MdHomeMax className="text-[35px]" />,
    },
    {
      id: 2,
      name: "Network",
      url: "/network",
      icon: <MdNetworkCell className="text-[35px]" />,
    },
    {
      id: 3,
      name: "Jobs",
      url: "/jobs",
      icon: <MdEmojiObjects className="text-[35px]" />,
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-3">
          <FaLinkedin className="text-blue-600 text-[35px] ml-2" />
          <div className="border rounded-md flex items-center w-[300px] h-[40px] bg-gray-100">
            <MdSearch className="ml-3 text-[20px]" />
            <input
              type="text"
              placeholder="search"
              className="pl-4 bg-transparent border-0 outline-none h-full w-full"
            />
          </div>
        </div>

        <div className="flex gap-4 items-center">
          {navData.map((el) => {
            return (
              <Link
                href={el.url}
                key={el.id}
                className={`flex flex-col items-center h-full  w-[50px] 
                ${path === el.url ? "border-b-2" : "text-gray-500"}`}
              >
                {el.icon}
                <p
                  className={`font-bold -mt-1 text-[14px] border-black leading-tight
                    ${path === el.url ? "border-b-2" : ""}
                    `}
                >
                  {el.name}
                </p>
              </Link>
            );
          })}

          <div className="mx-3">
            <Button onClick={() => dispatch(authUser(null))}>Sign Out</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
