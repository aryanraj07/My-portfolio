import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const WebDev = [
    { id: 1, title: "Html", imageurl: "html.png" },
    { id: 2, title: "Css", imageurl: "css.png" },
    { id: 3, title: "Javascript", imageurl: "js.png" },
    { id: 4, title: "Tailwind Css", imageurl: "tailwind.png" },
    { id: 5, title: "Postman Css", imageurl: "postman.png" },
    { id: 6, title: "React Js", imageurl: "react.png" },
    { id: 7, title: "Next Js", imageurl: "nextjs.png" },
    { id: 8, title: "MongoDb", imageurl: "mongodb.png" },
    { id: 9, title: "Figma", imageurl: "figma.png" },
  ];
  const SoftwareDev = [
    { id: 10, title: "Java", imageurl: "java.png" },
    { id: 11, title: "C", imageurl: "c.png" },
    { id: 12, title: "Python", imageurl: "python.png" },
    { id: 13, title: "Data Structures", imageurl: "dsa.png" },
    { id: 15, title: "Git", imageurl: "git.png" },
    { id: 16, title: "GitHub", imageurl: "github.png" },
  ];

  return (
    <div id="explore" className="bg-gray-100 shadow-lg dark:bg-gray-900">
      <div className="container pt-10 md:pt-20">
        <div className="flex flex-col items-center gap-5 dark:text-white">
          <h1 className="text-center text-2xl md:text-4xl font-bold">
            Skills and TechStacks
          </h1>
          <p className="text-gray-800 font-base text-xl md:text-2xl text-center dark:text-slate-100">
            Check out my skill sets across various domains
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 md:mt-10 ">
          <h1 className="text-2xl md:text-4xl text-center dark:text-white">
            Web Development
          </h1>
          <div className="border-b-2 border-yellow-300 w-1/3 mx-auto "></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {WebDev.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg min-h-[150px] dark:bg-gray-800 dark:text-white hover:scale-110 transition-transform duration-200 rounded-lg p-6 flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center shadow-lg bg-white justify-center rounded-lg dark:bg-gray-700 p-4">
                <div className="w-20 mb-4">
                  <img src={`./webdev/${item.imageurl}`} alt={item.title} />
                </div>
                <h1 className="text-center text-2xl md:text-3xl dark:text-white">
                  {item.title}
                </h1>
                <p className="text-center dark:text-slate-100">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Software Development Section */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-2xl md:text-4xl text-center dark:text-white">
          Software Development
        </h1>
        <div className="border-b-2 border-yellow-300  mb-5 mx-auto w-1/3"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {SoftwareDev.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg min-h-[150px] dark:bg-gray-800 dark:text-white hover:scale-110 transition-transform duration-200 rounded-lg p-6 flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center shadow-lg bg-white justify-center rounded-lg dark:bg-gray-700 p-4">
                <div className="w-20 mb-4">
                  <img
                    src={`./softwaredev/${item.imageurl}`}
                    alt={item.title}
                  />
                </div>
                <h1 className="text-center text-2xl md:text-3xl dark:text-white">
                  {item.title}
                </h1>
                <p className="text-center dark:text-slate-100">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
