"use client";

import { authUser } from "@/app/global/slice";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { url } from "@/utils/constant";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGoogle, FaLinkedin } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { useDispatch } from "react-redux";

const page = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();

  const mainAction = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    await fetch(`/api/signin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(async (res) => {
      const read = await res.json();
      if (read.status === 201) {
        dispatch(authUser(read?.data));
        redirect("/");
      } else {
        toast({
          description: `${read.message}`,
        });
      }
    });
  };

  return (
    <main className="m-2 p-2 border rounded-md">
      <Toaster />
      <div className="w-full h-[calc(100vh-40px)] flex justify-center items-center">
        <section className=" w-full md:w-[80%] lg:w-[500px] py-4 px-6 rounded-md min-h-[300px] border ">
          <p className="font-semibold uppercase text-center mt-10 pb-5 border-b">
            This is Sign in screen
          </p>

          <form action={mainAction}>
            <div className="flex flex-col mt-5 mb-3 ">
              <label className="font-semibold text-[12px] mb-1 ">Email</label>
              <input
                placeholder="Enter your Email"
                name="email"
                className="border rounded-md outline-none h-[45px] pl-2"
              />
            </div>
            <div className="flex flex-col mt-5 mb-3 ">
              <label className="font-semibold text-[12px] mb-1 ">
                Password
              </label>
              <input
                placeholder="Enter your Password"
                type="password"
                name="password"
                className="border rounded-md outline-none h-[45px] pl-2"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-[55px] flex justify-center uppercase items-center text-[17px]"
            >
              Sign In
            </Button>

            <div className="text-center text-[12px] mt-3">
              Don't have an Account, Please{" "}
              <Link href={"/register"} className="italic font-semibold">
                Sign Up Here
              </Link>
            </div>
          </form>

          <div className="my-5">
            <hr />
          </div>

          <div>
            <p className="font-semibold text-[12px]">Social Usage</p>

            <div className="mt-4 justify-center flex gap-5">
              <FaFacebookSquare
                size={80}
                className="text-blue-600 cursor-pointer"
              />
              <FaGoogle size={80} className="text-red-600 cursor-pointer" />
              <FaLinkedin size={80} className="text-blue-700 cursor-pointer" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
