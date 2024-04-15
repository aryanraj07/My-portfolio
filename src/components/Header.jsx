import React from "react";
import useMode from "../context/DarkMode";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { themeMode, darkTheme, lightTheme } = useMode();
  const changeMode = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <>
     
      
      <nav className="contaienr px-3 py-3 rounded-lg dark:bg-black dark:text-white bg-indigo-200 flex justify-between items-center outline-none ">
        <Link
          to=""
          className="logo text-indigo-950 font-extrabold dark:text-white text-2xl "
        >
          Aryans'Portfolio
        </Link>
        <ul className="flex gap-14 font-bold items-center">
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
          <button
            onClick={changeMode}
            className="bg-green-600 text-white dark:bg-indigo-950 p-2"
          >
            {themeMode === "light" ? (
              <span class="material-symbols-outlined">dark_mode</span>
            ) : (
              <span class="material-symbols-outlined">wb_sunny</span>
            )}
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Header;
