"use client";

import { useState, useEffect } from "react";

const themes = ["light", "dark"];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Solo se ejecuta en el cliente
    const saved = localStorage.getItem("theme");
    const initialTheme = saved && themes.includes(saved) ? saved : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    // Evita ejecutar en la primera carga si aún no está definido
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
    >
      Cambiar a {theme === "light" ? "oscuro 🌙" : "claro ☀️"}
    </button>
  );
};

export default ThemeSwitcher;
