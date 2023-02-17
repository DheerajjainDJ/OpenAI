import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { white_logo } from "../assets/index";
import { RiMoonClearFill as MoonIcon } from "react-icons/ri";
import { BsSunFill as SunIcon } from "react-icons/bs";

const Header = () => {
  const [dark, setDark] = useState(false);

  let userTheme = localStorage.getItem("theme");
  let systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

  useEffect(() => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      setDark(true);
      return;
    }
  }, []);

  const handleDark = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bolder" : "normal",
      color: isActive ? "green" : "inherit",
    };
  };
  return (
    <header className="sticky top-0 left-0 right-0 px-4 bg-slate-200 border-b border-b-black dark:border-b-white dark:bg-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 dark:bg-gray-900 dark:text-white">
        <NavLink to="/">
          <img
            src={white_logo}
            alt="logo"
            className="w-28 text-black mix-blend-difference object-contain dark:mix-blend-color-dodge"
          />
        </NavLink>
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
            onClick={handleDark}
          >
            {dark ? <MoonIcon size="1.5em" /> : <SunIcon size="1.5em" />}
          </button>
          <NavLink
            to="create-post"
            className="text-sm md:text-lg hover:underline hover:translate-x-1 transition-transform"
            style={navLinkStyles}
          >
            CREATE
          </NavLink>
          <NavLink
            to="community"
            className="text-sm md:text-lg hover:underline hover:translate-x-1 transition-transform"
            style={navLinkStyles}
          >
            COMMUNITY
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
