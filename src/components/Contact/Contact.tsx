import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-gray-300 pt-28 py-14 bg-[#192529] md:pl-36"
    >
      <h3 className="text-4xl uppercase text-center tracking-wide">Contact</h3>
      <hr className="m-auto h-1 my-3 w-20 bg-green-600 border-none" />
      <p className="mt-16 text-center px-4 text-lg">
        Have a question or want to work together? I would be happy to hear from
        you!
      </p>
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-bg-[#192529] w-full rounded p-8">
          <form aria-label="form" action="" method="post">
            <div className="md:flex items-center mt-8">
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold leading-none">Name</label>
                <input
                  type="text"
                  className="leading-none text-gray-300 p-3 focus:ring-2 focus:ring-green-600 focus:outline-none mt-4 border-0 bg-[#1D2B2F] rounded"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="font-semibold leading-none">Email</label>
                <input
                  type="email"
                  className="leading-none text-gray-300 p-3 focus:ring-2 focus:ring-green-600 focus:outline-none mt-4 border-0 bg-[#1D2B2F] rounded"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none">Message</label>
                <textarea className="h-40 text-base leading-none text-gray-300 p-3 focus:ring-2 focus:ring-green-600 focus:outline-none mt-4 bg-[#1D2B2F] border-0 rounded"></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button className="mt-9 border-2 border-green-600 font-semibold leading-none text-gray-800 py-4 px-10 bg-green-600 rounded hover:text-gray-300 hover:bg-[#192529] hover:border-2 hover:border-green-600 focus:ring-2 focus:ring-green-600 focus:outline-none">
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
