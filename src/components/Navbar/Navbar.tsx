import React, { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      id="navbar"
      className={
        "flex flex-col md:items-center md:justify-between fixed w-screen md:w-min md:h-screen text-gray-300 px-2 sm:px-4 md:pl-6 md:px-2 py-4 bg-[#1D2B2F] shadow-gray-800 shadow-md px-2" +
        (navbarOpen && " shadow-slate-500 shadow-lg")
      }
    >
      <div className="w-full flex justify-between md:inline-block md:self-start">
        <a
          className="text-md leading-relaxed inline-block px-3 py-3 whitespace-nowrap uppercase"
          href="#home"
        >
          RReiso
        </a>
        <button
          className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div
        className={
          "mr-auto flex flex-col items-center" +
          (navbarOpen ? " flex" : " hidden md:flex")
        }
      >
        <ul className="flex flex-col list-none">
          <li className="nav-item flex">
            <a
              className="px-3 py-2 text-md uppercase leading-snug hover:opacity-75"
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="nav-item flex">
            <a
              className="px-3 py-2 flex text-md uppercase leading-snug hover:opacity-75"
              href="#about"
            >
              About
            </a>
          </li>
          <li className="nav-item flex">
            <a
              className="px-3 py-2 flex text-md uppercase leading-snug hover:opacity-75"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li className="nav-item flex">
            <a
              className="px-3 py-2 flex text-md uppercase leading-snug hover:opacity-75"
              href="#contact"
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
            className="px-3 py-2 flex text-md uppercase leading-snug hover:opacity-75"
            href="https://www.linkedin.com/in/ruta-reisoglu/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin text-lg leading-lg opacity-75"></i>
            <span className="sr-only">LinkedIn profile</span>
          </a>
        </li>
        <li className="nav-item flex">
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
        <li className="nav-item flex">
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
      </div>
    </nav>
  );
};

export default Navbar;
