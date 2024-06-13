import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Elearning App",
      imageurl: "elearning.png",
      desc: "Elearning App using Mern Stack",
      link: "",
    },
    {
      id: 2,
      title: "Modern Bank App",
      imageurl: "bank.png",
      desc: "Modern Bank App",
      link: "https://modern-bank-app-brown.vercel.app/",
    },
    {
      id: 3,
      title: "Gemini Clone",
      imageurl: "gemini.png",
      desc: "Gemini Clone using Google Gemini Api",
      link: "https://gemini-clone-amber-two.vercel.app/",
    },
    {
      id: 4,
      title: "Dice Game",
      imageurl: "dice.png",
      desc: "Dice Game using React and Tailwind CSS",
      link: "https://dice-game-tau-five.vercel.app/",
    },
    {
      id: 5,
      title: "Firebase Contact App",
      imageurl: "contact.png",
      desc: "Firebase Contact App using React and Google Firebase",
      link: "https://contact-firebase-app.vercel.app/",
    },
    {
      id: 6,
      title: "Special Memories App",
      imageurl: "memories.png",
      desc: "Memories App using React and Google Firebase",
      link: "https://memory-coral.vercel.app/",
    },
    {
      id: 7,
      title: "Todo App",
      imageurl: "todo.png",
      desc: "Todo App using Context Api and localstorage",
      link: "https://todo-gamma-lac.vercel.app/",
    },
  ];

  return (
    <div className="bg-slate-200 dark:bg-gray-900">
      <div className=" container shadow-md pt-10 " id="projects">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-4xl font-semibold dark:text-white">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {projects.map((item) => (
            <div
              key={item.id}
              className="relative group bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={`./Projects/${item.imageurl}`}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="mb-4">{item.desc}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                  >
                    Visit Project
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

export default Projects;
