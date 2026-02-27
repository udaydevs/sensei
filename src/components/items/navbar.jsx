"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "Features", id: "features" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Enterprise", id: "enterprise" },
    { label: "Case Studies", id: "case-studies" },
    { label: "Resources", id: "resources" },
  ];

  const scrollToSection = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full overflow-hidden  backdrop-blur-md border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-15 mb-1 items-center justify-between">

            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpen(true)}
                className="md:hidden text-2xl"
                aria-label="Open Menu"
              >
                ☰
              </button>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900">
                  <div className="h-4 w-4 rounded-full bg-slate-900" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Sensei
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-slate-600">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6 h-15">
              <button
                onClick={() => router.push("/auth")}
                className="rounded-full bg-black px-6 py-2.5 text-[15px] font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed top-0 left-0 z-50 md:hidden h-full w-64 bg-white p-6 flex flex-col gap-4">
            <button
              className="self-end text-xl"
              onClick={() => setOpen(false)}
              aria-label="Close Menu"
            >
              ✕
            </button>

            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="justify-start text-base"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </aside>
        </>
      )}
    </>
  );
}
