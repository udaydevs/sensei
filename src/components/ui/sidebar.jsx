"use client";

import React, { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

// ---------------------------
// Context Setup
// ---------------------------
const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used inside <SidebarProvider>");
  }
  return context;
};

// ---------------------------
// Provider
// ---------------------------
export const SidebarProvider = ({ children, open: openProp, setOpen: setOpenProp, animate = true }) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

// ---------------------------
// Sidebar Wrapper
// ---------------------------
export const Sidebar = ({ children, open, setOpen, animate }) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

// ---------------------------
// Body (Desktop + Mobile)
// ---------------------------
export const SidebarBody = ({ children, className }) => {
  return (
    <>
      <DesktopSidebar className={className}>{children}</DesktopSidebar>
      <MobileSidebar className={className}>{children}</MobileSidebar>
    </>
  );
};

// ---------------------------
// Desktop Sidebar
// ---------------------------
export const DesktopSidebar = ({ className, children }) => {
  const { open, setOpen, animate } = useSidebar();

  return (
    <motion.div
      className={cn(
        "h-full px-4 py-4 hidden md:flex flex-col bg-neutral-100 dark:bg-neutral-800 shrink-0",
        className
      )}
      animate={{
        width: animate ? (open ? 250 : 60) : 300,
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
    </motion.div>
  );
};

// ---------------------------
// Mobile Sidebar
// ---------------------------
export const MobileSidebar = ({ className, children }) => {
  const { open, setOpen } = useSidebar();

  return (
    <>
      {/* Circular Button (Mobile Only) */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed top-4 left-4
          h-12 w-12 rounded-full
          bg-neutral-100 dark:bg-neutral-100
          flex items-center justify-center
          shadow-lg z-[50] sm:hidden
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
      </button>

      <AnimatePresence>
        {open && (
          // ⬇⬇ BACKDROP (clicking it closes sidebar)
          <div
            className="fixed inset-0 bg-black/30 z-[90] sm:hidden"
            onClick={() => setOpen(false)}
          >
            {/* Prevent closing when clicking inside sidebar */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "absolute left-0 top-0 h-full w-3/5 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-start",
                className
              )}
            >
              <div
                className="right-10 top-10 left-0 text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(false)}
              >
                <div className="flex justify-end">
                  <IconX />
                </div>
              </div>

              <div>{children}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};


// ---------------------------
// Sidebar Link
// ---------------------------
export const SidebarLink = ({ link, className }) => {
  const { open, animate } = useSidebar();

  return (
    <a
      href={link.href}
      className={cn("flex items-center gap-2 group/sidebar py-2", className)}
    >
      {link.icon}

      <motion.span
        animate={{
          opacity: animate ? (open ? 1 : 0) : 1,
          width: animate ? (open ? "auto" : 0) : "auto",
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm whitespace-pre transition-all duration-150 overflow-hidden"
      >
        {link.label}
      </motion.span>
    </a>
  );
};
