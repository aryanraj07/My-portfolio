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
          <div className="flex items-center justify-evenly flex-wrap gap-8 md:gap-12 dark:text-white text-5xl ">
            <a
              href="https://www.linkedin.com/in/aryanraj07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:scale-125 duration-200" />{" "}
            </a>
            <a
              href="https://github.com/aryanraj07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:scale-125 duration-200" />
            </a>
            <a
              href="https://www.instagram.com/aryannn__07_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:scale-125 duration-200" />
            </a>
            <a
              href="https://twitter.com/aryan314587"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:scale-125 duration-200" />
            </a>
          </div>
          <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>
            <FaArrowAltCircleUp className="text-4xl md:text-5xl dark:text-white hover:scale-125 duration-200 " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
