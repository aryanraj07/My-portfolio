import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaArrowAltCircleUp,
} from "react-icons/fa";

import useTheme from "../hooks/useTheme";
const Contact = () => {
  const { handleSmoothScroll } = useTheme();
  return (
    <div id="connect" className="  bg-slate-100 dark:bg-gray-900 p-10">
      <div className="container">
        <div className="flex flex-col  items-center pt-5 md:pt-10  gap-7 md:gap-12">
          {/* Heading */}
          <div className="text-2xl md:text-4xl font-base dark:text-white">
            {" "}
            Let's Connect
          </div>
          <div className="flex items-center justify-evenly flex-wrap gap-8 md:gap-12 dark:text-white text-5xl">
            <a href="">
              <FaLinkedinIn />{" "}
            </a>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href=""></a>
          </div>
          <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>
            <FaArrowAltCircleUp className="text-3xl dark:text-white hover:scale-125 duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
