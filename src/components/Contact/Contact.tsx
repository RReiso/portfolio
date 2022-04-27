import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="text-gray-200 mt-8 py-14 bg-[#0a192f]">
      <h3 className="text-4xl  uppercase text-center tracking-wide">Contact</h3>
      <hr className="m-auto h-1 my-3 w-20 bg-pink-600 border-none" />
      <p className="mt-16 text-center px-4 text-lg">
        Have a question or want to work together? I would be happy to hear from
        you!
      </p>
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-bg-[#0a192f] w-full rounded p-8">
          <form aria-label="form" action="" method="post">
            <div className="md:flex items-center mt-8">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none">Name</label>
                <input
                  type="text"
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-pink-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none">Email</label>
                <input
                  type="email"
                  className="leading-none text-gray-50 p-3 focus:outline-none focus:border-pink-700 mt-4 border-0 bg-gray-800 rounded"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none">Message</label>
                <textarea className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-pink-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-pink-600 rounded hover:bg-pink-500 focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 focus:outline-none">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
