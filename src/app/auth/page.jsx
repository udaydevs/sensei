"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import SignUpForm from "@/components/items/signup";
import SignInForm from "@/components/items/signin";
import { motion } from "framer-motion";

export default function Page() {
  const [activeForm, setActiveForm] = useState("signup");

  return (
    <div className="relative w-full flex justify-center items-center  h-screen overflow-hidden">
      <div className="relative z-10 h-[55%] lg:h-[60%] backdrop-blur-lg bg-white border border-white/20 shadow-lg mx-auto w-full max-w-md rounded-4xl p-4 md:p-8 max-sm:mx-3 dark:bg-black/60">
        
        <div className="relative flex w-fit mb-6 h-[12%] rounded-4xl  text-black bg-primary py-0.5 px-1 overflow-hidden">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={cn(
              "absolute top-1 bottom-1 p-1 rounded-3xl bg-white",
              activeForm === "signup"
                ? "left-1 w-[calc(50%-0.6rem)]"
                : "left-[calc((50%+0.7rem))] w-[calc((50%-0.7rem)-3px)]"
            )}
          />

          <div className="relative flex z-10 mx-1">
            <button
              onClick={() => setActiveForm("signup")}
              className={cn(
                "text-white text-[16px] font-bold py-3 px-8 rounded-3xl transition-colors duration-300",
                activeForm === "signup" ? "text-black" : "text-gray-700"
              )}
            >
              Sign Up
            </button>

            <button
              onClick={() => setActiveForm("signin")}
              className={cn(
                "text-white text-[16px] font-bold py-3 px-8 rounded-3xl transition-colors duration-300",
                activeForm === "signin" ? "text-black" : "text-gray-700"
              )}
            >
              Sign In
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-black dark:text-neutral-200">
          {activeForm === "signup" ? "Create an account" : "Welcome back"}
        </h2>

        <div className="flex flex-col justify-center">
          {activeForm === "signup" ? (
            <SignUpForm setActiveForm={setActiveForm} />
          ) : (
            <SignInForm setActiveForm={setActiveForm} />
          )}
        </div>

        <div className="my-2 h-0.5 w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <p className="text-[13px] my-4 text-center font-light text-gray-700 dark:text-neutral-200">
          By creating an account, you agree to our Terms & Service
        </p>
      </div>
    </div>
  );
}
