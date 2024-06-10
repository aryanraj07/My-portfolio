import React from "react";
import { Link } from "react-router-dom";

const Achievements = () => {
  const achievs = [
    {
      id: "1",
      imageurl: "codefest.jpg",
      title: "Codefest",
      desc: "Hackathon Winner organized by college",
      link: "https://drive.google.com/file/d/1eE6Lo8b7KJfWAcTRs3AftW40Lu5Awr5s/view?usp=sharing",
    },
    {
      id: "2",
      imageurl: "codehunt.jpg",
      title: "Codehunt",
      desc: "Participated in Codefest",
      link: "https://drive.google.com/file/d/1bL_ijI0nH6b9kJspMkieHrxLJhQx3b9R/view?usp=sharing",
    },
    {
      id: "3",
      imageurl: "java.png",
      title: "Java Dsa",
      desc: "Apna College Java Dsa",
      link: "https://drive.google.com/file/d/1GHnohyqwLiNTsFkffbk0VUkvnA2z3p2z/view?usp=sharing",
    },
    {
      id: "4",
      imageurl: "ai.png",
      title: "Ai and Prompt",
      desc: "Ai Prompt ",
      link: "https://drive.google.com/file/d/1bS4aXNOK5Etsw2Np6xN3ftXMYcOw0bTG/view?usp=sharing",
    },
  ];

  return (
    <div className="bg-slate-200 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-2xl md:text-4xl dark:text-white">
            Achievements and Certificates
          </h1>
        </div>
        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {achievs.map((item) => (
            <div
              key={item.id}
              className="relative group bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={`./achieve/${item.imageurl}`}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="mb-4 text-center">{item.desc}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
