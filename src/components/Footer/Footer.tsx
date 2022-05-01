import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#192529] pb-4 text-gray-300 flex flex-col items-center md:pl-36">
      <a
        href="#home"
        className="border-2 border-green-600  mt-4 px-4 py-2 rounded-full pointer hover:border-2 hover:border-green-600 hover:bg-green-600 hover:text-gray-800 focus:ring-2 focus:ring-green-600 focus:outline-none"
      >
        <i className="fa fa-angle-double-up text-md"></i>
        <span className="sr-only">Back To Top</span>
      </a>
      <p className="uppercase text-center pt-5">Ruta Reisoglu &copy; 2022</p>
      <p className="text-center text-sm py-1">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
