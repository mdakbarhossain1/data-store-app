import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setThemeState] = useState<"light" | "dark">("light");

  // initialize theme once on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (systemPrefersDark ? "dark" : "light");
    setThemeState(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  // update html class and localStorage whenever theme changes
  const setTheme = (value: "light" | "dark") => {
    setThemeState(value);
    document.documentElement.classList.toggle("dark", value === "dark");
    localStorage.setItem("theme", value);
  };

  return { theme, setTheme };
}
