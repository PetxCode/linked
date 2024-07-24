"use client";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "./global/slice";

const page = () => {
  const user = useSelector((state: any) => state.userState);
  const dispatch = useDispatch();
  console.log(user);

  if (user === null) {
    return redirect("/signin");
  } else {
    return redirect("/main");
  }
};

export default page;
