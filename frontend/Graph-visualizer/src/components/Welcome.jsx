import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate=useNavigate("");

  return (
    <div className="bg-green-300  flex flex-col gap-24">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex w-full justify-between px-8">
          <div className="mt-8">
            <div className="px-[1.1rem] text-[2rem] gap-1">
              <span className="text-black font-bold">&lt;</span>
              <span className="text-black font-bold">GV</span>
              <span className="text-orange-900 font-bold">OP/&gt;</span>
            </div>
          </div>

          <img
            src="images/hello.svg"
            alt="hello-image"
            className="h-[20rem] "
          />
          <div className="mt-8 px-5">
            <button className="flex gap-1 bg-black border border-black py-[0.8rem] px-[1.2rem] rounded-3xl items-center justify-center text-white text-[1.2rem]">
              <div>
                <FaGithub size={25} />
              </div>
              <div>
                <span>GitHub</span>
              </div>
            </button>
          </div>
        </div>
        <TypeAnimation
          className="font-dancing-script underline underline-offset-8 font-bold text-7xl "
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

      <div className="flex justify-center items-center gap-[3rem]">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-[3rem] font-bold font-dancing-script">
            A tool to Visualize your Graphs
          </h1>
          <img
            src="images/graph-welcome.svg"
            alt="graph"
            className="h-[8rem]"
          />
        </div>
        <div>
          <button className="border border-black p-3 rounded-2xl bg-orange-900 text-2xl font-300  text-white" onClick={()=> navigate("/input")}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
