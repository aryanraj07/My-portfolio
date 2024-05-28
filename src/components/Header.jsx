import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import MobileView from "./MobileView";
import useTheme from "../hooks/useTheme";
import useMode from "../context/DarkMode";

const Header = () => {
  const { isCross, toggleCross } = useTheme();
  const { themeMode, darkTheme, lightTheme } = useMode();

  const changeMode = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div>
      <nav className="container px-3 py-3 rounded-lg dark:bg-black dark:text-white bg-indigo-200 flex justify-between items-center">
        <Link
          to=""
          className="logo text-indigo-950 font-extrabold dark:text-white text-2xl p-4 md:p-3"
        >
          Aryans'Portfolio
        </Link>
        <ul className="md:flex gap-14 font-bold items-center hidden">
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-green-500" : "text-black dark:text-white"
                } hover:font-extrabold duration-300 hover:text-purple-700 hover:text-xl`
              }
              to=""
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-green-500" : "text-black dark:text-white"
                } hover:text-purple-700 hover:text-xl hover:font-extrabold duration-300`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-green-500" : "text-black dark:text-white"
                } hover:text-purple-700 hover:text-xl hover:font-extrabold duration-300`
              }
              to="/contact"
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
        <button
          onClick={changeMode}
          className="bg-green-600 text-white dark:bg-indigo-950 p-2 hidden md:block"
        >
          {themeMode === "light" ? (
            <span className="material-symbols-outlined">dark_mode</span>
          ) : (
            <span className="material-symbols-outlined">wb_sunny</span>
          )}
        </button>
        <div className="md:hidden text-5xl" onClick={toggleCross}>
          {isCross ? <RxCross1 /> : <LuMenu />}
        </div>
      </nav>
      <MobileView isOpen={isCross} toggleCross={toggleCross} />
    </div>
  );
};

export default Header;
