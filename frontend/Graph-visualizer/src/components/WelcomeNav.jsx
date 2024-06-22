import React from "react";
import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomeNav = () => {
  const navigate = useNavigate("");

  const [toggle, setToggle] = useState(0);
  const handleMenuClick = () => {
    setToggle(toggle === 0 ? 1 : 0);
  };

  return (
    <div>
      <div
        className={
          (toggle === 1 &&
            `flex absolute h-[20rem] pt-[4.5rem] w-full justify-center text-white text-2xl bg-[#000000d8]`) ||
          (toggle === 0 && `hidden`)
        }
      >
        <ul className="flex flex-col items-center gap-4">
          <a
            href="https://github.com/himanshusyuni/Graph-Visualizer"
            target="_blank"
            onClick={() => handleMenuClick()}
          >
            <li className="hover:text-orange-700">Github</li>
          </a>

          <a href="#home" onClick={() => handleMenuClick()}>
            <li className="hover:text-orange-700">Home</li>
          </a>
          <button onClick={() => navigate("/input")}>
            <li className="hover:text-orange-700">Create Graph</li>
          </button>
        </ul>
      </div>
      <div className="flex justify-between px-6 sm:px-10 py-5 md:px-14 items-center">
        <div className="sm:text-[2rem] text-[1.5rem]">
          <span className="text-gray-400 font-bold">&lt;</span>
          <span className="text-gray-400 font-bold">GV</span>
          <span className="text-green-600 font-bold">OP/&gt;</span>
        </div>
        <a
          href="https://github.com/himanshusyuni/Graph-Visualizer"
          target="_blank"
        >
          <button className="hidden sm:flex gap-1 bg-black border border-black sm:py-[0.8rem] sm:px-[1.2rem] px-[0.8rem] py-[0.4rem] rounded-3xl items-center justify-center text-white sm:text-[1.2rem] text-[1rem]">
            <div>
              <FaGithub size={25} />
            </div>
            <div>
              <span>GitHub</span>
            </div>
          </button>
        </a>
        <GiHamburgerMenu
          className={
            (toggle === 1 && `hidden`) ||
            `sm:hidden text-2xl hover:cursor-pointer`
          }
          onClick={() => handleMenuClick()}
        />
        <RxCross2
          className={
            (toggle === 0 && `hidden`) ||
            `sm:hidden text-2xl text-[#ffffffb5] hover:cursor-pointer sticky`
          }
          onClick={() => handleMenuClick()}
        />
      </div>
    </div>
  );
};

export default WelcomeNav;
