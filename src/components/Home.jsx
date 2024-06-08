import { useState, useRef, useEffect } from "react";

const Home = () => {
  return (
    <div className=" dark:bg-gray-900  h-screen  " id="home">
      <div className="flex md:justify-around   flex-col md:flex-row items-center gap-4 p-5 md:p-2 text-wrap  md:pt-6 ">
        <div className="text-6xl md:text-7xl  font-semibold  dark:text-white  text-center md:text-left order-2 md:order-1 ">
          <h1 className="mb-4">Hello there,</h1>
          <p className="mb-6">
            {" "}
            I am{" "}
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
          className="w-[270px] h-[400px] rounded-full order-1 md:order-2"
          src="./aryanspic.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
