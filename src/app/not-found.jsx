"use client";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const circles = [
  { size: 400, dot: "top-0 left-1/2 -translate-x-1/2" },
  { size: 600, dot: "top-1/4 right-0" },
  { size: 850, dot: "bottom-1/4 left-0" },
];

const NotFound = () => {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-primary-black">
      <div className="pointer-events-none absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 
                      hidden sm:block w-175 md:w-250 h-175 md:h-250">
        {circles.map(({ size, dot }, i) => (
          <div
            key={i}
            className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 
                       rounded-full border border-dashed border-purple-400/30"
            style={{
              width: size * 0.7,
              height: size * 0.7,
            }}
          >
            <span
              className={`absolute ${dot} w-1 h-1 rounded-full bg-purple-500 opacity-40`}
            />
          </div>
        ))}
      </div>
      {["道", "迷"].map((char, i) => (
        <span
          key={char}
          className={`absolute top-1/2 -translate-y-1/2 select-none 
                      hidden md:block font-extralight text-purple-500/5
                      text-[12rem] lg:text-[25rem]
                      ${i === 0 ? "left-6 lg:left-24" : "right-6 lg:right-24"}`}
        >
          {char}
        </span>
      ))}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center 
                       px-4 sm:px-6 text-center">
        <div className="relative max-w-4xl space-y-3 sm:space-y-8">

          <span
            className="absolute px-3 inset-0 -z-10 flex items-center justify-center 
                       text-[14rem] sm:text-[18rem] md:text-[28rem]
                       font-bold tracking-tighter text-primary
                       blur-sm select-none"
          >
            404
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-widest">
            すみません
          </h1>

          <p className="mx-auto w-4/5 sm:w-full text-xs sm:text-sm md:text-base 
                        font-medium leading-relaxed text-black">
            The path you are seeking does not exist in this reality.
            <br className="hidden sm:block" />
            Let us guide you back to the source.
          </p>

          <a
            href="/"
            className="mx-auto inline-flex w-fit sm:w-auto items-center justify-center gap-3 
                       rounded-full bg-black px-8 sm:px-10 py-4 sm:py-5
                       text-[10px] sm:text-[11px] font-bold tracking-[0.2em] 
                       text-white shadow-xl shadow-black/10 transition 
                       hover:bg-gray-800"
          >
            <ArrowBackIcon fontSize="small" />
            RETURN TO HOME
          </a>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
