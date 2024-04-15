import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
export const Contact = () => {
  return (
    <div className="section2 flex flex-col  bg-green-100 h-screen gap-20 dark:bg-gray-400">
      <h1 className="text-5xl font-bold dark:text-black">Contact Me on </h1>

      <div className="flex gap-14 justify-center">
        <span>
          <Link to="https://www.linkedin.com/in/aryanraj07">
            <FaLinkedin className="text-3xl text-blue-700" />
          </Link>
        </span>
        <span>
          <BsTwitterX className="text-3xl" />
        </span>
        <span>
          <Link to="https://github.com/aryanraj07">
            <FaGithub className="text-3xl" />
          </Link>
        </span>
        <span>
          <FaInstagram className="text-3xl text-pink-500" />
        </span>
      </div>
    </div>
  );
};
