import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";
import ContrastRoundedIcon from "@mui/icons-material/ContrastRounded";

const Btn_theme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "auto";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function applyTheme(mode) {
    if (mode === "auto") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.setAttribute(
        "data-bs-theme",
        prefersDark ? "dark" : "light"
      );
    } else {
      document.documentElement.setAttribute("data-bs-theme", mode);
    }
    localStorage.setItem("theme", mode);
  }

  function toggleTheme() {
    const nextTheme =
      theme === "light" ? "dark" : theme === "dark" ? "auto" : "light";
    setTheme(nextTheme);
  }
  return (
    <>
      <Dropdown className="d-inline" drop="down-centered" autoClose="outside">
        <Dropdown.Toggle
          variant="dark rounded-pill"
          id="dropdown-autoclose-inside"
        >
          {theme === "light" && <LightModeRoundedIcon />}
          {theme === "dark" && <BedtimeRoundedIcon />}
          {theme === "auto" && <ContrastRoundedIcon />}
          <b className="ms-2 d-none d-sm-inline">
            {theme === "light" && "Claro"}
            {theme === "dark" && "Oscuro"}
            {theme === "auto" && "Auto"}
          </b>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-end">
          <Dropdown.Item
            onClick={() => setTheme("light")}
            active={theme === "light"}
          >
            <LightModeRoundedIcon />
            Claro
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setTheme("dark")}
            active={theme === "dark"}
          >
            <BedtimeRoundedIcon />
            Oscuro
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => setTheme("auto")}
            active={theme === "auto"}
          >
            <ContrastRoundedIcon />
            Auto
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
export default Btn_theme;
