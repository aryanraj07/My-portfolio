import { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaGithub, FaRegArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  const handleSmoothScroll = (event, link) => {
    event.preventDefault();
    const targetSection = document.querySelector(link);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className=" dark:bg-gray-900  min-h-screen   " id="home">
      <div className="container pt-16 md:pt-24 flex flex-col md:flex-row gap-4  items-center justify-center md:justify-between mx-auto">
        {/* Our text goes here */}
        <div className=" left flex flex-col gap-2 text-4xl md:text-6xl dark:text-white font-base justify-center font-sans order-2 md:order1">
          <p>
            Hi <span className="text-orange-500 dark:text-green-500">folk</span>
          </p>
          <p>
            I am{" "}
            <span className="text-orange-500 dark:text-green-500">
              Aryan Raj
            </span>
          </p>
          <p>
            a{" "}
            <span className="text-orange-500 dark:text-green-500">
              Web Developer
            </span>
          </p>

          <div className="flex  flex-col md:flex-row md:gap-15 gap-8 items-center ">
            <div className="flex gap-5 items-center mt-5 md:mt-7">
              {" "}
              <Link to="https://www.linkedin.com/in/aryanraj07/">
                <FaLinkedin className="hover:scale-110 duration-200 cursor-pointer" />{" "}
              </Link>
              <Link to="https://github.com/aryanraj07">
                {" "}
                <FaGithub className="hover:scale-110 duration-200 cursor-pointer" />
              </Link>
            </div>
            <div className="md:pl-20 pl-0 flex justify-center">
              {/* <button className="px-4 py-3 rounded-full bg-orange-500 text-slate-200 text-lg font-base dark:bg-green-500 hover:scale-110 duration-200 hover:bg-orange-600 dark:hover:bg-green-700">
                Download Resume
              </button> */}
            </div>
          </div>
        </div>
        {/* Our image goes here */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-8 md:mt-0 order-1 md:order-2">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <img
              src="./aryanspic.jpg"
              alt="Aryan Raj"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
        {/*  */}
      </div>
      <div className="flex flex-col items-center gap-2 mt-3 md:mt-10 text-3xl md:text-4xl text-center mx-auto justify-center dark:text-white">
        <h2>Scrool down to know more about me </h2>
        <a href="#explore" onClick={(e) => handleSmoothScroll(e, "#explore")}>
          <FaRegArrowAltCircleDown className="text cursor-pointer hover:scale-125 duration-200" />
        </a>
      </div>
      {/* Know more section */}
      <div className="container mx-auto    py-4 md:py-8 px-4 md:px-8 mt-8 md:mt-14">
        <div className="  bg-white shadow-md flex md:flex-row flex-col gap-6 md:gap-2 items-center text-xl text-slate-700 dark:text-white  dark:bg-gray-900">
          {/* Our image goes here */}

          <div className="flex justify-center md:justify-start w-full md:w-1/2 mt-8 md:mt-0 ">
            <div className="w-64 h-74 md:w-80 md:h-90 lg:w-96 lg:h-96">
              <img
                src="./aryansummary.jpg"
                alt="aryansummary"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

          <div className="container">
            Experienced Frontend Developer proficient in React, JavaScript, and
            Tailwind CSS. Skilled in Node.js and MERN stack. Familiar with Java
            Data Structures and Algorithms. Aspiring to be a Software Devloper
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
