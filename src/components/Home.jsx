import { useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className=" dark:bg-gray-900  h-screen ">
      <div className="flex md:justify-around   flex-col md:flex-row    items-center gap-4 p-5 md:p-2 text-wrap pt-3 md:pt-6">
        <div className="text-6xl md:text-7xl  font-semibold  dark:text-white  text-center md:text-left ">
          <h1 className="mb-4">Hello there,</h1>
          <p className="mb-6">
            {" "}
            I am
            <span className="text-orange-500 dark:text-green-500">
              Aryan Raj
            </span>
          </p>
          <p>
            a{" "}
            <span className="text-orange-500 dark:text-green-500">
              Frontend Developer
            </span>{" "}
          </p>
        </div>
        <img
          className="w-[270px] h-[400px] rounded-full"
          src="./aryanspic.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
