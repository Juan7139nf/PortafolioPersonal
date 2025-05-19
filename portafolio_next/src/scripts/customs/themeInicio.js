"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bounceEase = (x) => {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};

const bounce = {
  duration: 1.2,
  ease: bounceEase,
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function ThemeInicio() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initialTheme = saved === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isDark = theme === "dark";

  return (
    <div className="flex flex-col items-center justify-center py-30 gap-6">
      <div
        className="w-20 h-40 bg-gray-300 dark:bg-gray-700 rounded-full p-2 cursor-pointer flex items-end dark:items-start transition-all duration-500"
        onClick={toggleTheme}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-white dark:bg-black shadow-md flex items-center justify-center text-xl"
          layout
          transition={isDark ? spring : bounce}
        >
          {isDark ? "🌙" : "☀️"}
        </motion.div>
      </div>

      <p className="text-xl text-gray-800 dark:text-gray-100">
        Tema actual: {isDark ? "Oscuro 🌙" : "Claro ☀️"}
      </p>
    </div>
  );
}

