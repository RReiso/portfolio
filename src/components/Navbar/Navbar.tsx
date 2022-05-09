import React, { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className={
        "flex flex-col h-16 md:items-center md:justify-between fixed w-screen md:w-min md:h-screen text-gray-300 md:bg-[#1D2B2F] md:py-4 z-10"
      }
    >
      <div className="w-full py-1 flex justify-between bg-[#1D2B2F]">
        <a
          className="logo text-green-600 text-3xl md:text-5xl md:pt-2 leading-relaxed inline-block px-8 whitespace-nowrap uppercase"
          href="#home"
        >
          RR
        </a>
        <button
          className=" cursor-pointer text-xl leading-none px-6 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
          type="button"
          aria-expanded={navbarOpen === true ? "true" : "false"}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div
        className={
          "-z-10 bg-[#1D2B2F] px-5 " +
          (navbarOpen
            ? "translate-y-0 duration-200"
            : "transition duration-200 -translate-y-[130%] md:translate-y-0 md:duration-700")
        }
      >
        <ul className="flex flex-col list-none">
          <li className="nav-item flex">
            <a
              className="px-3 py-2 md:py-3 text-md uppercase leading-snug hover:opacity-75"
              href="#home"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Home
            </a>
          </li>
          <li className="nav-item flex">
            <a
              className="px-3 py-2 md:py-3 flex text-md uppercase leading-snug hover:opacity-75"
              href="#about"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              About
            </a>
          </li>
          <li className="nav-item flex">
            <a
              className="px-3 py-2 md:py-3 flex text-md uppercase leading-snug hover:opacity-75"
              href="#projects"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Projects
            </a>
          </li>
          <li className="nav-item flex">
            <a
              className="px-3 py-2 md:py-3 flex text-md uppercase leading-snug hover:opacity-75"
              href="#contact"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Contact
            </a>
          </li>
          <li className="nav-item flex md:hidden">
            <a
              className="px-3 py-2 flex text-md uppercase leading-snug hover:opacity-75"
              href="https://www.linkedin.com/in/ruta-reisoglu/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin text-lg leading-lg opacity-75"></i>
              <span className="sr-only">LinkedIn profile</span>
            </a>
          </li>
          <li className="nav-item flex md:hidden">
            <a
              className="px-3 py-2 flex text-md uppercase leading-snug hover:opacity-75"
              href="https://github.com/RReiso"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github text-lg leading-lg opacity-75"></i>
              <span className="sr-only">GitHub profile</span>
            </a>
          </li>
          <li className="nav-item flex md:hidden">
            <a
              className="px-3 py-2 flex text-md uppercase leading-snug hover:opacity-75"
              href="mailto: rutareiso@protonmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-envelope text-lg leading-lg opacity-75"></i>
              <span className="sr-only">Email</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex md:flex-row">
        <li className="nav-item flex">
          <a
            className="py-2 flex text-2xl text-green-600 uppercase leading-snug hover:text-gray-300 transition ease-in-out duration-200 hover:bg-[#1D2B2F]"
            href="https://www.linkedin.com/in/ruta-reisoglu/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin opacity-75"></i>
            <span className="sr-only">LinkedIn profile</span>
          </a>
        </li>
        <li className="nav-item flex">
          <a
            className="px-3 py-2 flex text-2xl text-green-600 uppercase leading-snug hover:text-gray-300 transition ease-in-out duration-200 hover:bg-[#1D2B2F]"
            href="https://github.com/RReiso"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github opacity-75"></i>
            <span className="sr-only">GitHub profile</span>
          </a>
        </li>
        <li className="nav-item flex">
          <a
            className="py-2 flex text-2xl text-green-600 uppercase leading-snug hover:text-gray-300 transition ease-in-out duration-200 hover:bg-[#1D2B2F]"
            href="mailto: rutareiso@protonmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-envelope opacity-75"></i>
            <span className="sr-only">Email</span>
          </a>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
