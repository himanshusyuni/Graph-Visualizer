import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate("");

  return (
    <div className="flex flex-col items-center">
      <img
        src="images/hello.svg"
        alt="hello-image"
        className="sm:h-[18rem] h-[15rem] md:h-[20rem] "
      />
      <div className="px-4 flex justify-center">
        <TypeAnimation
          className="font-dancing-script underline underline-offset-8 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Welcome to Graph Visualizer",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={2}
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-8 gap-8">
        <div className="px-7 ">
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] lg:text-[3rem] font-bold font-dancing-script text-center leading-10">
          Create and visualize graphs effortlessly
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-1 md:gap-32 ">
          <img
            src="images/graph-welcome.svg"
            alt="graph"
            className="sm:h-[7rem] h-[6rem] md:h-[8rem]"
          />
          <button
            className="border border-black p-3 rounded-2xl 
            bg-gradient-to-r from-red-500 to-orange-500-to-slate-700 sm:text-2xl text-[1.1rem] font-300  text-black mt-10"
            onClick={() => navigate("/input")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
