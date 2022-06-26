import React, { FC } from "react";

interface CategoriesProps {
  handleCategory: Function;
  category: string;
}
const categories = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "Ruby",
  "React",
  "Node.js",
  "Ruby on Rails",
  "PostgreSQL",
  "All",
];
const Categories: FC<CategoriesProps> = ({ handleCategory, category }) => {
  return (
    <div className="flex m-3 justify-center flex-wrap mt-8">
      {categories.map((cat, index) => {
        return (
          <button
            key={index}
            onClick={() => handleCategory(cat)}
            className={`border text-gray-300 border-2 rounded-md border-green-600 hover:text-gray-800 hover:bg-green-600 w-34 mx-1 font-bold py-2 px-4 mt-3 transition ease-in-out duration-300 text-center focus:bg-green-600 focus:text-gray-800 focus:outline-none ${
              category === cat && `text-gray-800 bg-green-600`
            }`}
          >
            <div className="flex leading-5">{cat}</div>
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
