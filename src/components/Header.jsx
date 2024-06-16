import React, { useState } from "react";
import { useMode } from "../context";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { themeMode, lightTheme, darkTheme } = useMode();

  const Menus = [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
    {
      id: 2,
      name: "Explore",
      link: "#explore",
    },
    {
      id: 3,
      name: "Resume",
      link: "#resume",
    },
    {
      id: 4,
      name: "Connect",
      link: "#connect",
    },
  ];

  const changeMode = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const { handleSmoothScroll } = useTheme();

  return (
    <div className="bg-lightBlue z-50 shadow-lg shadow-sky-300 dark:bg-slate-900 dark:text-white ">
      <div className="container mx-auto py-2 px-4 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="./logoaryan.svg" alt="aryan logo" className="w-10" />
            <h2 className="text-indigo-900 text-xl lg:text-2xl font-bold">
              Aryan's Portfolio
            </h2>
          </div>

          {/* Links */}
          <div className="hidden lg:flex gap-6">
            {Menus.map((menu) => (
              <a
                key={menu.id}
                href={menu.link}
                className="text-lg font-Poppins px-4 py-2 hover:scale-110 transition-transform duration-200 hover:text-orange-500 dark:hover:text-green-400"
                onClick={(e) => handleSmoothScroll(e, menu.link)}
              >
                {menu.name}
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button onClick={changeMode} className="ml-4">
            {themeMode === "light" ? (
              <span className="material-symbols-outlined text-3xl">
                dark_mode
              </span>
            ) : (
              <span className="material-symbols-outlined text-3xl">
                light_mode
              </span>
            )}
          </button>

          {/* Mobile Responsive */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-3xl"
            >
              {isOpen ? <RxCross1 /> : <FaBars />}
            </button>
            {isOpen && (
              <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-md rounded-md z-50">
                {Menus.map((menu) => (
                  <li key={menu.id} className="w-full text-center">
                    <a
                      href={menu.link}
                      className="block py-4 text-lg text-gray-800 dark:text-white hover:bg-primary hover:text-white hover:w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
