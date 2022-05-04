import React, { useState } from "react";
import Particles from "react-tsparticles";
import projects from "../../projects/projects";
import Categories from "../Categories/Categories";

const Projects = () => {
  const [category, setCategory] = useState("All");

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  const filterProjects = (category: string) => {
    if (category === "All") {
      return projects;
    }
    return projects.filter((project) => project.tags.includes(category));
  };

  return (
    <section
      id="projects"
      className="pt-28 py-14 sm:px-4 bg-[#192529] md:pl-40"
    >
      <h3 className="text-4xl uppercase text-center text-gray-300 tracking-wide">
        Projects
      </h3>
      <hr className="m-auto h-1 my-3 w-20 bg-green-600 border-none" />
      <Categories handleCategory={handleCategory} />
      <div className="w-full mt-8">
        <div className="mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {filterProjects(category).map((project) => {
              return (
                <article key={project.id}>
                  <div
                    style={{
                      backgroundImage: `url(${project.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="group container shadow-black-800 shadow-lg rounded-md flex justify-center items-center mx-auto content-div h-48 md:h-60"
                  >
                    <div className="transition ease-in-out duration-200 opacity-0 group-hover:opacity-100 group-hover:bg-[#1D2B2F] group-hover:rounded-md h-full w-full py-1 flex flex-col justify-evenly">
                      <p className="mt-1 font-bold text-gray-300 text-center tracking-wider">
                        {project.title}
                      </p>
                      <p className="my-1 mx-3 text-gray-300">
                        {project.description}
                      </p>
                      <p className="my-1 mx-3 text-gray-300">
                        <span className="text-green-600">Tech Stack: </span>
                        {project.tags.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="text-center mb-4 mt-1">
                    {project.demoURL && (
                      <a
                        href={project.demoURL}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <button className="hover:text-green-600 transition ease-in-out duration-300 text-center px-2 mx-2 text-gray-300 font-bold text-lg focus:text-green-600 focus:outline-none">
                          Live
                        </button>
                      </a>
                    )}
                    <a
                      href={project.githubURL}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="hover:text-green-600 transition ease-in-out duration-300 text-center px-2 mx-2 text-gray-300 font-bold text-lg focus:text-green-600 focus:outline-none">
                        Code
                      </button>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
