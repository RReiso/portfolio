import React from "react";

const Home = () => {
  return (
    <section id="home">
      <svg
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 110"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(209, 13, 149, 1)" offset="0%"></stop>
            <stop stopColor="rgba(209, 13, 122.965, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,99L10,99C20,99,40,99,60,86.2C80,73,100,48,120,33C140,18,160,15,180,22C200,29,220,48,240,49.5C260,51,280,37,300,25.7C320,15,340,7,360,3.7C380,0,400,0,420,11C440,22,460,44,480,55C500,66,520,66,540,71.5C560,77,580,88,600,77C620,66,640,33,660,18.3C680,4,700,7,720,23.8C740,40,760,70,780,78.8C800,88,820,77,840,73.3C860,70,880,73,900,73.3C920,73,940,70,960,64.2C980,59,1000,51,1020,45.8C1040,40,1060,37,1080,44C1100,51,1120,70,1140,71.5C1160,73,1180,59,1200,45.8C1220,33,1240,22,1260,20.2C1280,18,1300,26,1320,40.3C1340,55,1360,77,1380,84.3C1400,92,1420,84,1430,80.7L1440,77L1440,110L1430,110C1420,110,1400,110,1380,110C1360,110,1340,110,1320,110C1300,110,1280,110,1260,110C1240,110,1220,110,1200,110C1180,110,1160,110,1140,110C1120,110,1100,110,1080,110C1060,110,1040,110,1020,110C1000,110,980,110,960,110C940,110,920,110,900,110C880,110,860,110,840,110C820,110,800,110,780,110C760,110,740,110,720,110C700,110,680,110,660,110C640,110,620,110,600,110C580,110,560,110,540,110C520,110,500,110,480,110C460,110,440,110,420,110C400,110,380,110,360,110C340,110,320,110,300,110C280,110,260,110,240,110C220,110,200,110,180,110C160,110,140,110,120,110C100,110,80,110,60,110C40,110,20,110,10,110L0,110Z"
        ></path>
      </svg>
      <div className="relative mt-10 py-5 md:py-0 flex px-4 flex-col md:flex-row  space-y-3 md:space-y-0 rounded-xl p-3 max-w-xs md:max-w-4xl mx-auto bg-white">
        <div className=" bg-white grid place-items-center p-5">
          <img
            src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Ruta"
            className="rounded-lg"
          />
        </div>
        <div className=" md:w-2/3 bg-white flex flex-col md:pl-20 md:pt-12 p-5">
          <p className=" text-gray-500 text-base md:text-lg uppercase">
            Hello everybody, I am
          </p>
          <h3 className="font-black text-gray-800 md:text-4xl text-xl mt-3">
            Ruta Reisoglu
          </h3>
          <p className="text-gray-500 text-base md:text-lg uppercase font-semibold mt-4">
            Full stack developer
          </p>
          <a
            style={{ backgroundColor: "#D10D95" }}
            href="#contact"
            className="mt-10 w-32 hover:opacity-80 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
          >
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
