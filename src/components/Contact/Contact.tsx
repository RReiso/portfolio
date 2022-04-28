import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="text-gray-200 mt-8 py-14 bg-[#0a192f]">
        <h3 className="text-4xl  uppercase text-center tracking-wide">
          Contact
        </h3>
        <hr className="m-auto h-1 my-3 w-20 bg-pink-600 border-none" />
        <p className="mt-16 text-center px-4 text-lg">
          Have a question or want to work together? I would be happy to hear
          from you!
        </p>
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
          <div className="bg-bg-[#0a192f] w-full rounded p-8">
            <form aria-label="form" action="" method="post">
              <div className="md:flex items-center mt-8">
                <div className="w-full md:w-1/2 flex flex-col">
                  <label className="font-semibold leading-none">Name</label>
                  <input
                    type="text"
                    className="leading-none text-gray-50 p-3 focus:ring-1 focus:ring-pink-600 focus:outline-none mt-4 border-0 bg-gray-800 rounded"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none">Email</label>
                  <input
                    type="email"
                    className="leading-none text-gray-50 p-3 focus:ring-1 focus:ring-pink-600 focus:outline-none mt-4 border-0 bg-gray-800 rounded"
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none">Message</label>
                  <textarea className="h-40 text-base leading-none text-gray-50 p-3 focus:ring-1 focus:ring-pink-600 focus:outline-none mt-4 bg-gray-800 border-0 rounded"></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-pink-600 rounded hover:bg-pink-500 focus:ring-4 focus:ring-pink-800 focus:outline-none">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <svg
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 110"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="#0a192f" offset="0%"></stop>
            <stop stopColor="#0a192f" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,99L10,99C20,99,40,99,60,86.2C80,73,100,48,120,33C140,18,160,15,180,22C200,29,220,48,240,49.5C260,51,280,37,300,25.7C320,15,340,7,360,3.7C380,0,400,0,420,11C440,22,460,44,480,55C500,66,520,66,540,71.5C560,77,580,88,600,77C620,66,640,33,660,18.3C680,4,700,7,720,23.8C740,40,760,70,780,78.8C800,88,820,77,840,73.3C860,70,880,73,900,73.3C920,73,940,70,960,64.2C980,59,1000,51,1020,45.8C1040,40,1060,37,1080,44C1100,51,1120,70,1140,71.5C1160,73,1180,59,1200,45.8C1220,33,1240,22,1260,20.2C1280,18,1300,26,1320,40.3C1340,55,1360,77,1380,84.3C1400,92,1420,84,1430,80.7L1440,77L1440,110L1430,110C1420,110,1400,110,1380,110C1360,110,1340,110,1320,110C1300,110,1280,110,1260,110C1240,110,1220,110,1200,110C1180,110,1160,110,1140,110C1120,110,1100,110,1080,110C1060,110,1040,110,1020,110C1000,110,980,110,960,110C940,110,920,110,900,110C880,110,860,110,840,110C820,110,800,110,780,110C760,110,740,110,720,110C700,110,680,110,660,110C640,110,620,110,600,110C580,110,560,110,540,110C520,110,500,110,480,110C460,110,440,110,420,110C400,110,380,110,360,110C340,110,320,110,300,110C280,110,260,110,240,110C220,110,200,110,180,110C160,110,140,110,120,110C100,110,80,110,60,110C40,110,20,110,10,110L0,110Z"
        ></path>
      </svg>
    </>
  );
};

export default Contact;
