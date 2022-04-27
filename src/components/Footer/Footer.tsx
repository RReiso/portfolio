import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10">
      <svg
        id="wave"
        viewBox="0 0 1440 120"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(10, 25, 47, 1)" offset="0%"></stop>
            <stop stopColor="rgba(10, 25, 47, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M0,96L10,80C20,64,40,32,60,18C80,4,100,8,120,18C140,28,160,44,180,48C200,52,220,44,240,46C260,48,280,60,300,72C320,84,340,96,360,92C380,88,400,68,420,62C440,56,460,64,480,62C500,60,520,48,540,48C560,48,580,60,600,58C620,56,640,40,660,40C680,40,700,56,720,54C740,52,760,32,780,36C800,40,820,68,840,74C860,80,880,64,900,54C920,44,940,40,960,46C980,52,1000,68,1020,68C1040,68,1060,52,1080,48C1100,44,1120,52,1140,46C1160,40,1180,20,1200,24C1220,28,1240,56,1260,68C1280,80,1300,76,1320,68C1340,60,1360,48,1380,42C1400,36,1420,36,1430,36L1440,36L1440,120L1430,120C1420,120,1400,120,1380,120C1360,120,1340,120,1320,120C1300,120,1280,120,1260,120C1240,120,1220,120,1200,120C1180,120,1160,120,1140,120C1120,120,1100,120,1080,120C1060,120,1040,120,1020,120C1000,120,980,120,960,120C940,120,920,120,900,120C880,120,860,120,840,120C820,120,800,120,780,120C760,120,740,120,720,120C700,120,680,120,660,120C640,120,620,120,600,120C580,120,560,120,540,120C520,120,500,120,480,120C460,120,440,120,420,120C400,120,380,120,360,120C340,120,320,120,300,120C280,120,260,120,240,120C220,120,200,120,180,120C160,120,140,120,120,120C100,120,80,120,60,120C40,120,20,120,10,120L0,120Z"
        ></path>
      </svg>
      <div className="bg-[#0a192f] text-gray-200 flex flex-col items-center">
        <a
          href="#navbar"
          className="bg-pink-600 mt-4 px-4 py-2 rounded-full pointer hover:bg-pink-500 focus:ring-4 focus:ring-pink-800 focus:outline-none"
        >
          <i className="fa fa-angle-double-up text-3xl"></i>
          <span className="sr-only">Back To Top</span>
        </a>
        <p className="uppercase text-center py-5">Ruta Reisoglu &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
