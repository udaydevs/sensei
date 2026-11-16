"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center rounded-full gap-1 p-2 border-2 border-sidebar bg-#C8AD91 dark:bg-#4a3f5f  text-sm font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-800 transition-all">
      {theme === "dark" ? (
        <Sun className="h-4 w-4 " />
      ) : (
        <Moon className="h-4 w-4 " />
      )}
    </button>
  );
}