import React, { useState } from "react";
import projects from "../../projects/projects";
import Categories from "../Categories/Categories";

const Projects = () => {
  const [category, setCategory] = useState("All");

  const handleCategory = (category: string) => {
    setCategory(category);
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects
              .filter((project) => project.tags.includes(category))
              .map((project) => {
                return (
                  <article
                    key={project.id}
                    style={{
                      backgroundImage: `url(${project.img})`,
                    }}
                    className="group container shadow-black-800 shadow-lg rounded-md flex justify-center items-center mx-auto content-div h-52"
                  >
                    <div className="transition ease-in-out duration-200 opacity-0 group-hover:opacity-100 group-hover:bg-[#1D2B2F] group-hover:rounded-md h-full w-full py-1 flex flex-col items-center justify-between">
                      <p className="my-2 font-bold text-gray-300 text-center tracking-wider">
                        {project.title}
                      </p>
                      <div className="text-center">
                        <a
                          href={project.demoURL}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <button className="hover:text-green-600 transition ease-in-out duration-300 text-center px-2 py-1 m-2 text-gray-300 font-bold text-lg focus:text-green-600 focus:outline-none underline underline-offset-4">
                            Live
                          </button>
                        </a>
                        <a
                          href={project.githubURL}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <button className="hover:text-green-600 transition ease-in-out duration-300 text-center px-2 py-1 m-2 text-gray-300 font-bold text-lg focus:text-green-600 focus:outline-none underline underline-offset-4">
                            Code
                          </button>
                        </a>
                      </div>
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
