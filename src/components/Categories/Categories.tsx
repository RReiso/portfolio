import React, { FC } from "react";

interface CategoriesProps {
  handleCategory: Function;
}

const Categories: FC<CategoriesProps> = ({ handleCategory }) => {
  return (
    <div className="flex m-3 justify-center flex-wrap mt-8">
      <button
        onClick={() => handleCategory("JavaScript")}
        className="border text-gray-300 border-2 rounded-md border-green-600 hover:text-gray-300 hover:bg-green-600 w-34 mx-1 font-bold py-2 px-4 mt-3 transition ease-in-out duration-300 text-center focus:bg-green-600 focus:text-gray-300 focus:outline-none"
      >
        <div className="flex leading-5">JavaScript</div>
      </button>
      <button
        onClick={() => handleCategory("TypeScript")}
        className="border text-gray-300 border-2 rounded-md border-green-600 hover:text-gray-300 hover:bg-green-600 w-34 mx-1 font-bold py-2 px-4 mt-3 transition ease-in-out duration-300 text-center focus:bg-green-600 focus:text-gray-300 focus:outline-none"
      >
        <div className="flex leading-5">TypeScript</div>
      </button>
      <button
        onClick={() => handleCategory("Ruby")}
        className="border text-gray-300 border-2 rounded-md border-green-600 hover:text-gray-300 hover:bg-green-600 w-34 mx-1 font-bold py-2 px-4 mt-3 transition ease-in-out duration-300 text-center focus:bg-green-600 focus:text-gray-300 focus:outline-none"
      >
        <div className="flex leading-5">Ruby</div>
      </button>
      <button
        onClick={() => handleCategory("React")}
        className="border text-gray-300 border-2 rounded-md border-green-600 hover:text-gray-300 hover:bg-green-600 w-34 mx-1 font-bold py-2 px-4 mt-3 transition ease-in-out duration-300 text-center focus:bg-green-600 focus:text-gray-300 focus:outline-none"
      >
        <div className="flex leading-5">React</div>
      </button>
      <button
        onClick={() => handleCategory("Node.js")}
        className="border text-gray-300 border-2 rounded-md border-green-600 hover:text-gray-300 hover:bg-green-600 w-34 mx-1 font-bold py-2 px-4 mt-3 transition ease-in-out duration-300 text-center focus:bg-green-600 focus:text-gray-300 focus:outline-none"
      >
        <div className="flex leading-5">Node.js</div>
      </button>
      <button
        onClick={() => handleCategory("Ruby on Rails")}
        className="border text-gray-300 border-2 rounded-md border-green-600 hover:text-gray-300 hover:bg-green-600 w-34 mx-1 font-bold py-2 px-4 mt-3 transition ease-in-out duration-300 text-center focus:bg-green-600 focus:text-gray-300 focus:outline-none"
      >
        <div className="flex leading-5">Ruby on Rails</div>
      </button>
      <button
        onClick={() => handleCategory("PostgreSQL")}
        className="border text-gray-300 border-2 rounded-md border-green-600 hover:text-gray-300 hover:bg-green-600 w-34 mx-1 font-bold py-2 px-4 mt-3 transition ease-in-out duration-300 text-center focus:bg-green-600 focus:text-gray-300 focus:outline-none"
      >
        <div className="flex leading-5">PostgreSQL</div>
      </button>
      <button
        onClick={() => handleCategory("All")}
        className="border text-gray-300 border-2 rounded-md border-green-600 hover:text-gray-300 hover:bg-green-600 w-34 mx-1 font-bold py-2 px-4 mt-3 transition ease-in-out duration-300 text-center focus:bg-green-600 focus:text-gray-300 focus:outline-none"
      >
        <div className="flex leading-5">All</div>
      </button>
    </div>
  );
};

export default Categories;
