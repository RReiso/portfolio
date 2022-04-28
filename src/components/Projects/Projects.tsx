import React from "react";
import projects from "../../projects/projects";

const Projects = () => {
  return (
    <section id="projects" className="mt-8 py-14 sm:mx-4">
      <h3 className="text-4xl uppercase text-center tracking-wide">Projects</h3>
      <hr className="m-auto h-1 my-3 w-20 bg-pink-600 border-none" />
      <div className="w-full mt-12">
        <div className="mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) => {
              return (
                <article
                  key={index}
                  style={{
                    backgroundImage: `url(${project.img})`,
                  }}
                  className="group container shadow-slate-500 shadow-lg rounded-md flex justify-center items-center mx-auto content-div h-48"
                >
                  <div className="transition ease-in-out duration-200 opacity-0 group-hover:opacity-100 group-hover:bg-[#0a192f] h-full w-full group-hover:rounded-md flex flex-col items-center justify-center">
                    <p className="my-2 font-bold text-gray-200 text-center tracking-wider">
                      {project.title}
                    </p>
                    <div className="text-center">
                      <a
                        href={project.demoURL}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <button className="hover:text-white hover:bg-pink-600 transition ease-in-out duration-300 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg focus:ring-4 focus:ring-pink-800 focus:outline-none">
                          Demo
                        </button>
                      </a>
                      <a
                        href={project.githubURL}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <button className="hover:text-white hover:bg-pink-600 transition ease-in-out duration-300 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg focus:ring-4 focus:ring-pink-800 focus:outline-none">
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
