import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#192529] pb-4 text-gray-300 flex flex-col items-center">
      <a
        href="#home"
        className="border-2 border-green-600  mt-4 px-4 py-2 rounded-full pointer hover:border-2 hover:border-green-600 hover:bg-green-600 focus:ring-2 focus:ring-green-600 focus:outline-none"
      >
        <i className="fa fa-angle-double-up text-2xl"></i>
        <span className="sr-only">Back To Top</span>
      </a>
      <p className="uppercase text-center py-5">Ruta Reisoglu &copy; 2022</p>
    </footer>
  );
};

export default Footer;
