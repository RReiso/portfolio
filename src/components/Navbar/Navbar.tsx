import React, { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="relative flex text-gray-200 items-center  px-1 py-2 bg-[#0a192f]">
      <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <a
            className="text-md leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
            href="#home"
          >
            RReiso
          </a>
          <button
            className=" cursor-pointer text-xl leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "md:flex  items-center" + (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col md:flex-row list-none md:ml-auto">
            <li className="nav-item flex items-center">
              <a
                className="px-3 py-2 flex items-center text-md uppercase leading-snug  hover:opacity-75"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item flex items-center">
              <a
                className="px-3 py-2 flex items-center text-md uppercase leading-snug  hover:opacity-75"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item flex items-center">
              <a
                className="px-3 py-2 flex items-center text-md uppercase leading-snug  hover:opacity-75"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item flex items-center">
              <a
                className="px-3 py-2 flex items-center text-md uppercase leading-snug  hover:opacity-75"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item flex items-center">
              <a
                className="px-3 py-2 flex items-center text-md uppercase leading-snug  hover:opacity-75"
                href="https://www.linkedin.com/in/ruta-reisoglu/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin text-lg leading-lg  opacity-75"></i>
                <span className="sr-only">LinkedIn profile</span>
              </a>
            </li>
            <li className="nav-item flex items-center">
              <a
                className="px-3 py-2 flex items-center text-md uppercase leading-snug  hover:opacity-75"
                href="https://github.com/RReiso"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github text-lg leading-lg  opacity-75"></i>
                <span className="sr-only">GitHub profile</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;