import React from "react";

const About = () => {
  const imgStyle = {
    height: "4rem",
    width: "4rem",
  };
  return (
    <section
      id="about"
      className="text-gray-300 pt-28 py-14 bg-[#192529] md:pl-28"
    >
      <h3 className="text-4xl uppercase text-center tracking-wide">About</h3>
      <hr className="m-auto h-1 mt-3 w-20 bg-green-600 border-none" />
      <div className="md:mt-12 py-5 md:py-0 flex px-4 sm:px-16 md:px-24 flex-col items-center justify-center mx-auto">
        <p className="pt-6 px-1 text-xl leading-8">
          A couple of years ago my life took a 180 degree turn - I left Europe,
          moved to Canada, faced countless challenges of building a new life and
          was lucky enough to discover something that brings me great joy -
          coding.
        </p>
        <p className="pt-6 px-1">
          <i className="fas fa-circle text-xs opacity-75 px-1"></i>
          <i className="fas fa-circle text-xs opacity-75 px-1"></i>
          <i className="fas fa-circle text-xs opacity-75 px-1"></i>
        </p>
        <p className="pt-6 px-1 text-xl leading-8">
          My tech journey started with Harvard University’s CS50 course and
          continued with learning web development. Every tech tool I have worked
          with has amazed me and sparked a genuine interest to explore more. I
          have built web applications with a variety of languages and tools such
          as JavaScript, TypeScript, Ruby, React, Node.js, Express, Python,
          PostgreSQL, Ruby on Rails and I am eager to learn more.
        </p>

        <p className="pt-6 px-1">
          <i className="fas fa-circle text-xs opacity-75 px-1"></i>
          <i className="fas fa-circle text-xs opacity-75 px-1"></i>
          <i className="fas fa-circle text-xs opacity-75 px-1"></i>
        </p>
        <p className="pt-6 px-1 text-xl leading-8">
          Currently I am working as a full stack developer at Zapier and I love
          it!
        </p>
        <p className="pt-6 px-1">
          <i className="fas fa-circle text-xs opacity-75 px-1"></i>
          <i className="fas fa-circle text-xs opacity-75 px-1"></i>
          <i className="fas fa-circle text-xs opacity-75 px-1"></i>
        </p>
        <p className="pt-6 px-1 text-xl leading-8">
          I enjoy building well tested and meaningful applications and
          participate in projects and activities that make a difference in
          people's lives and benefit society.
        </p>
        <p className="pt-6 px-1">
          <i className="fas fa-circle text-xs opacity-75 px-1"></i>
          <i className="fas fa-circle text-xs opacity-75 px-1"></i>
          <i className="fas fa-circle text-xs opacity-75 px-1"></i>
        </p>
        <p className="pt-6 pb-8 px-1 text-xl leading-8">
          Outside coding, I read novels, ocasionally bake some treats and
          travel. Some of my most favourite countries that I have been fortunate
          to visit are Australia, Turkey and Japan. If you ever find yourself
          wandering the streets of Osaka, try some{" "}
          <em>
            <strong>okonomiyaki</strong>
          </em>{" "}
          or{" "}
          <em>
            <strong>takoyaki</strong>
          </em>{" "}
          - you won't regret it!
        </p>
        <div className="lg:w-2/3">
          <h6 className="text-2xl text-center pb-6 pt-20">
            Technologies I work with
          </h6>
          <div className="flex flex-wrap  justify-center">
            <img
              style={imgStyle}
              src={require("../../assets/icons/html.png")}
              alt="HTML icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/css3.png")}
              alt="CSS icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/javascript.png")}
              alt="JavaScript icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/typescript.png")}
              alt="TypeScript icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/react.png")}
              alt="React icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/testing-library.png")}
              alt="React Testing Library icon"
              className="m-3"
            />
            <img
              style={{ height: "5rem" }}
              src={require("../../assets/icons/node-js.png")}
              alt="Node-js icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/mui.png")}
              alt="Material UI icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/sass.png")}
              alt="Sass icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/tailwind.png")}
              alt="Tailwind icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/bootstrap.png")}
              alt="Bootstrap icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/ruby.png")}
              alt="Ruby icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/rubyonrails.png")}
              alt="Ruby on Rails icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/postgresql.png")}
              alt="PostgreSQL icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/git.png")}
              alt="Git icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/github.png")}
              alt="GitHub icon"
              className="m-3"
            />
            <img
              style={imgStyle}
              src={require("../../assets/icons/mocha.png")}
              alt="Mocha icon"
              className="m-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
