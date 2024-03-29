import React from "react";
import resume from "../../assets/ruta_reisoglu_resume.pdf";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const Home = () => {
  const particlesInit = async (main: Engine) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          background: {
            color: {
              value: "#192529",
            },
          },
          fullScreen: { zIndex: -1 },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#19c89c",
            },

            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 50,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <section id="home" className="pt-6 h-screen flex  tracking-wide md:pl-32">
        <div className="my-auto py-5 flex md:px-4 flex-col p-3 max-w-xs md:max-w-6xl mx-auto md:ml-14">
          <div className="flex flex-col p-5">
            <p className="text-gray-400 text-2xl md:text-4xl uppercase">Hi,</p>
            <h3 className="font-black text-gray-200 text-6xl md:text-8xl my-6">
              I'm Ruta,
            </h3>
            <p className="text-gray-400 text-lg uppercase md:text-4xl ">
              Full stack developer
            </p>
            <div className="flex md:mt-6">
              <a
                href="#contact"
                className="mt-10 w-30 bg-green-600 border-2 border-green-600 hover:text-gray-300 hover:border-2 hover:bg-[#192529] text-gray-800 font-bold py-2 px-4 rounded-md mt-3 transition ease-in-out duration-300 text-center mr-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
              >
                Let's talk
              </a>
              <a
                href={resume}
                rel="noreferrer"
                target="_blank"
                className="border bg-[#192529] text-gray-300 border-2 border-green-600 hover:text-gray-800 hover:bg-green-600 mt-10 w-34 ml-2 font-bold py-2 px-2 rounded-md mt-3 transition ease-in-out duration-300 text-center focus:ring-2 focus:ring-green-600 focus:outline-none"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
