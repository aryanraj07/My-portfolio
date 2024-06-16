import React from "react";
import { FaLinkedin, FaGithub, FaRegArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import SkillSetsData from "./skillsets/SkillSetsData";

const Home = () => {
  const handleSmoothScroll = (event, link) => {
    event.preventDefault();
    const targetSection = document.querySelector(link);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dark:bg-gray-900 min-h-screen" id="home">
      <div className="container pt-16 md:pt-24 flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between mx-auto">
        <div className="left flex flex-col gap-2 text-4xl md:text-6xl dark:text-white font-base justify-center font-sans order-2 md:order1">
          <p>
            Hi <span className="text-orange-500 dark:text-green-500">folk</span>
          </p>
          <p>
            I am{" "}
            <span className="text-orange-500 dark:text-green-500 ">
              Aryan Raj
            </span>
          </p>
          <p>
            a{" "}
            <span className="text-orange-500 dark:text-green-500">
              Web Developer
            </span>
          </p>

          <div className="flex flex-col md:flex-row md:gap-15 gap-8 items-center ">
            <div className="flex gap-5 items-center mt-5 md:mt-7">
              <a
                href="https://www.linkedin.com/in/aryanraj07/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:scale-110 duration-200 cursor-pointer" />
              </a>
              <a
                href="https://github.com/aryanraj07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:scale-110 duration-200 cursor-pointer" />
              </a>
            </div>
            <div className="md:pl-20 pl-0 flex justify-center">
              {/* Add download resume button here if needed */}
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-8 md:mt-0 order-1 md:order-2">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            <img
              src="./aryanspic.jpg"
              alt="Aryan Raj"
              className="w-full h-full object-cover rounded-3xl group-hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 mt-3 md:mt-10 text-3xl md:text-4xl text-center mx-auto justify-center dark:text-white">
        <h2>Scroll down to know more about me </h2>
        <a href="#explore" onClick={(e) => handleSmoothScroll(e, "#explore")}>
          <FaRegArrowAltCircleDown className="cursor-pointer hover:scale-125 duration-200" />
        </a>
      </div>
      <div className="container mx-auto py-4 md:py-8 px-4 md:px-8 mt-8 md:mt-14">
        <div className="bg-white shadow-md shadow-red-200 flex md:flex-row flex-col gap-6 md:gap-2 items-center text-xl text-slate-700 dark:text-white dark:bg-gray-900">
          <div className="flex justify-center md:justify-start w-full md:w-1/2 mt-8 md:mt-0">
            <div className="w-64 h-74 md:w-80 md:h-90 lg:w-96 lg:h-96 group">
              <img
                src="./aryansummary.jpg"
                alt="aryansummary"
                className="w-full h-full object-cover rounded-3xl group-hover:scale-105 duration-300"
              />
            </div>
          </div>
          <div className="container">
            Experienced Frontend Developer proficient in React, JavaScript, and
            Tailwind CSS. Skilled in Node.js and MERN stack. Familiar with Java
            Data Structures and Algorithms. Aspiring to be a Software Developer.
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 md:py-8 px-4 md:px-8 mt-8 md:mt-14">
        <SkillSetsData />
      </div>
    </div>
  );
};

export default Home;
