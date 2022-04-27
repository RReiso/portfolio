import React from "react";

const About = () => {
  const imgStyle = {
    height: "4rem",
    width: "4rem",
  };
  return (
    <section id="about" className="text-gray-200 mt-8 py-14 bg-[#0a192f]">
      <h3 className="text-4xl uppercase text-center tracking-wide">About</h3>
      <hr className="m-auto h-1 mt-3 w-20 bg-pink-600 border-none" />
      <div className="md:mt-12 py-5 md:py-0 flex px-4 sm:px-12  md:px-20 flex-col items-center justify-center md:flex-row  mx-auto">
        <p className="py-6 px-1 md:pr-8 md:w-1/2 text-xl leading-8 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          tempore, iure adipisci sit, recusandae saepe praesentium in culpa unde
          sequi laudantium aut ullam nobis, assumenda quod facilis autem
          voluptate alias?
        </p>
        <div className="md:w-1/2">
          <h6 className="text-2xl text-center py-4">My skills</h6>
          <div className="flex flex-wrap  justify-center">
            <img
              style={imgStyle}
              src={require("../../icons/html.png")}
              alt="HTML icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/css3.png")}
              alt="CSS icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/javascript.png")}
              alt="JavaScript icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/typescript.png")}
              alt="TypeScript icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/react.png")}
              alt="React icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/testing-library.png")}
              alt="React Testing Library icon"
              className="m-3"
            />
            <img
              style={{ height: "5rem" }}
              src={require("../../icons/node-js.png")}
              alt="Node-js icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/mui.png")}
              alt="Material UI icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/sass.png")}
              alt="Sass icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/tailwind.png")}
              alt="Tailwind icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/bootstrap.png")}
              alt="Bootstrap icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/ruby.png")}
              alt="Ruby icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/rubyonrails.png")}
              alt="Ruby on Rails icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/postgresql.png")}
              alt="PostgreSQL icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/git.png")}
              alt="Git icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../icons/github.png")}
              alt="GitHub icon"
              className="m-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
