import React from "react";
import { FaGithub } from "react-icons/fa";

const WelcomeNav = () => {
  return (
    <div className="flex justify-between px-6 sm:px-10 py-5 md:px-14 ">
      <div className="sm:text-[2rem] text-[1.5rem]">
        <span className="text-black font-bold">&lt;</span>
        <span className="text-black font-bold">GV</span>
        <span className="text-orange-900 font-bold">OP/&gt;</span>
      </div>
      <a
        href="https://github.com/himanshusyuni/Graph-Visualizer"
        target="_blank"
      >
        <button className="flex gap-1 bg-black border border-black sm:py-[0.8rem] sm:px-[1.2rem] px-[0.8rem] py-[0.4rem] rounded-3xl items-center justify-center text-white sm:text-[1.2rem] text-[1rem]">
          <div>
            <FaGithub size={25} />
          </div>
          <div>
            <span>GitHub</span>
          </div>
        </button>
      </a>
    </div>
  );
};

export default WelcomeNav;
