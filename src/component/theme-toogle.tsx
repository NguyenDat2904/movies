"use client";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { Icons } from "./icons";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.sun className="h-[1.5rem] w-[1.3rem] hover:text-[#e53637] transition-all duration-300 dark:hidden" />
      <Icons.moon className="hidden h-[1.5rem] w-[1.3rem] hover:text-[#e53637] transition-all duration-300 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
