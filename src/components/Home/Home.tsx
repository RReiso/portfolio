import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-6 h-screen flex bg-[#192529] tracking-wide md:pl-32"
    >
      <div className="my-auto py-5 flex md:px-4 flex-col p-3 max-w-xs md:max-w-6xl mx-auto md:ml-14 bg-[#192529]">
        <div className="bg-[#192529] flex flex-col p-5">
          <p className=" text-gray-400 text-2xl md:text-4xl uppercase">Hi,</p>
          <h3 className="font-black text-gray-200 text-6xl md:text-8xl mt-2">
            I'm Ruta,
          </h3>
          <p className="text-gray-400 text-lg uppercase md:text-4xl mt-2">
            a Full stack developer
          </p>
          <div className="flex md:mt-6">
            <a
              href="#contact"
              className="mt-10 w-30 bg-green-600 border-2 border-green-600 hover:text-gray-300 hover:border-2 0  hover:bg-[#192529] text-gray-800 font-bold py-2 px-5 rounded-lg mt-3 transition ease-in-out duration-300 text-center mr-1 focus:ring-2 focus:ring-green-600 focus:outline-none"
            >
              Let's talk
            </a>
            <a
              href="https://drive.google.com/file/d/1K_-VEx948gHzJPKUS7yRCXoUm6vi0BFF/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
              className="border text-gray-300 border-2 border-green-600 hover:text-gray-800 hover:bg-green-600 mt-10 w-34 ml-1 font-bold py-2 px-4 rounded-lg mt-3 transition ease-in-out duration-300 text-center focus:ring-2 focus:ring-green-600 focus:outline-none"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
