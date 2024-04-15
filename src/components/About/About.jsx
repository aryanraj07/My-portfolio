import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button";
import { Card } from "./Card";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/aryanraj07/repos"
        );
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" dark:bg-gray-600">
      <h1 className="text-6xl dark:text-white font-extrabold text-black/2">
        Skills and Technologies
      </h1>
      <div className="tech my-4">
        <div className="flex rounded-lg min-w-300 min-h-300 justify-evenly">
          <NavLink to="webdevelopment">
            <Card title="Web Development" />
          </NavLink>
          <Card title="Software Development" />
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-4xl dark:text-white font-extrabold text-black/2">
          Github Repositories {"->"}
        </h1>
        <div className="flex flex-wrap gap-10 my-4 justify-evenly">
          {data.map((repo) => (
            <div key={repo.id}>
              <Link to={repo.html_url}>
                <Card title={repo.name} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
