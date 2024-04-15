import { useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";
const Home = () => {
  const words = [
    "Web Developer",
    "Software Developer",
    "Java Developer",
    "React Developer",
    "Full Stack Developer",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const typingIntervalRef = useRef(null);

  useEffect(() => {
    typingIntervalRef.current = setInterval(() => {
      const word = words[currentWordIndex];
      if (currentLetterIndex < word.length) {
        setTypedText(
          (prevTypedText) => prevTypedText + word[currentLetterIndex]
        );
        setCurrentLetterIndex(currentLetterIndex + 1);
      } else {
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setCurrentLetterIndex(0);
        setTypedText("");
      }
    }, 150); // Typing speed: 100 milliseconds

    return () => clearInterval(typingIntervalRef.current);
  }, [currentWordIndex, currentLetterIndex]);

  useEffect(() => {
    return () => clearInterval(typingIntervalRef.current);
  }, []);
  return (
    <div className=" dark:bg-gray-950 bg-indigo-50 h-screen ">
      <div className=" flex justify-between flex-wrap gap-3 items-center">
        <div className="flex flex-col my-10">
          <div className="flex items-center ">
            <h1 className="text-7xl font-semibold dark:text-white">
              Hello I am{"  "}{" "}
              <span className="tp font-extrabold text-orange-700 dark:text-green-500  text-7xl">
                `Aryan Raj`
              </span>
            </h1>
          </div>
          <h1 className="text-7xl font-semibold dark:text-white mx-8">
            I am a{" "}
            <div>
              <span className="tp font-extrabold text-orange-700 dark:text-green-500">
                {"<"} {typedText}
                {">"}
              </span>
              <span>|</span> {/* Cursor */}
            </div>
          </h1>
        </div>
        <img
          width={250}
          className="my-6 rounded-lg border-4  border-orange-200 dark:border-green-400"
          src="./aryanspic.jpg"
          alt="aryan"
        />
      </div>
    </div>
  );
};

export default Home;
