"use client";
import { useState } from "react";

export default function DefaultSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="text-heading bg-transparent border border-transparent hover:bg-neutral-secondary-medium
        focus:ring-4 focus:ring-neutral-tertiary font-medium rounded-base mt-3 ms-3 p-2 sm:hidden"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h10"
          />
        </svg>
      </button>

      {/* BACKDROP FOR MOBILE */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 sm:hidden"
        ></div>
      )}

      {/* SIDEBAR PANEL */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-neutral-primary-soft border-r border-default
        transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setOpen(false)}
          className="sm:hidden absolute top-4 right-4 p-2"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M6 6l12 12M18 6l-12 12"
            />
          </svg>
        </button>

        {/* Sidebar Content */}
        <div className="h-full px-4 py-6 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a className="flex items-center px-2 py-1.5 hover:bg-neutral-tertiary rounded-base">
                Dashboard
              </a>
            </li>

            <li>
              <a className="flex items-center px-2 py-1.5 hover:bg-neutral-tertiary rounded-base">
                Kanban
              </a>
            </li>

            <li>
              <a className="flex items-center px-2 py-1.5 hover:bg-neutral-tertiary rounded-base">
                Inbox
                <span className="ml-2 bg-danger-soft text-danger-strong text-xs px-2 py-0.5 rounded">
                  2
                </span>
              </a>
            </li>

            <li>
              <a className="flex items-center px-2 py-1.5 hover:bg-neutral-tertiary rounded-base">
                Users
              </a>
            </li>

            <li>
              <a className="flex items-center px-2 py-1.5 hover:bg-neutral-tertiary rounded-base">
                Products
              </a>
            </li>

            <li>
              <a className="flex items-center px-2 py-1.5 hover:bg-neutral-tertiary rounded-base">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
