import React, { useState } from "react";
import { Link } from "react-scroll";
import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import MobileView from "./MobileView";
import useTheme from "../hooks/useTheme";
import useMode from "../context/DarkMode";

const Header = () => {
  // const { isCross, toggleCross } = useTheme();
  const [isCross, setIsCross] = useState(false);

  const { themeMode, darkTheme, lightTheme } = useMode();
  const navLists = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "explore",
      title: "Explore",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const changeMode = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div>
      <nav className="container px-4 md:px-20 rounded-lg dark:bg-black dark:text-white bg-indigo-100  max-w-screen-2xl fixed top-0 left-0 right-0 z:50 ">
        <div className="flex justify-between items-center">
          <img src="./logoaryan.svg" alt="" className="h-10 w-20" />
          <span> Aryan's Portfolio</span>

          <ul className="md:flex gap-14 font-bold items-center hidden">
            {navLists &&
              navLists.length &&
              navLists.map((item) => (
                <li key={item.id}>
                  <Link to={item.id} scrolling="smooth" offset={70}>
                    {item.title}
                  </Link>
                </li>
              ))}
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
          <div
            className="md:hidden text-5xl"
            onClick={() => setIsCross((prev) => !prev)}
          >
            {isCross ? <RxCross1 /> : <LuMenu />}
          </div>
        </div>
        {isCross && (
          <div className="flex flex-col gap-2">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center">
              {navLists &&
                navLists.length &&
                navLists.map((item) => <li key={item.id}>{item.title}</li>)}
            </ul>
            <button
              onClick={changeMode}
              className="bg-green-600 text-white dark:bg-indigo-950 p-2 md:hidden "
            >
              {themeMode === "light" ? (
                <span className="material-symbols-outlined">dark_mode</span>
              ) : (
                <span className="material-symbols-outlined">wb_sunny</span>
              )}
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
