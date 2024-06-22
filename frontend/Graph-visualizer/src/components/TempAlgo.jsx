import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StoreContext from "../Store/StoreContext";

const TempAlgo = () => {
  const navigate = useNavigate();
  const setComp = useContext(StoreContext).setComp;
  const setAlgo = useContext(StoreContext).setAlgo;
  const setSrc = useContext(StoreContext).setSrc;
  const setDest = useContext(StoreContext).setDest;
  const algo_names = [
    {
      name: "Min Spanning Tree Algorithm",
      key: "MinSpan",
      link: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
    },
    {
      name: "Strongly Connected Components",
      key: "SCC",
      link: "https://www.geeksforgeeks.org/strongly-connected-components/",
    },
  ];
  return (
    <>
      <div className="flex justify-center mt-8 h-[30rem]">
        <div className=" py-5 px-2 overflow-auto overflow-x-auto flex flex-col gap-5 h-[30rem] w-[40rem]">
          <div className="bg-gradient-to-r from-emerald-400 to-teal-600 rounded-2xl hover:scale-102 duration-200">
            <div className="bg-gradient-to-r from-emerald-400 to-teal-600 px-6 py-3 xsm:px-8 xsm:py-5 rounded-xl text-[1.1rem] xsm:text-[1.3rem] text-black  font-semibold">
              <p>Shortest Path Algorithm</p>
            </div>
            <div className="px-3 xsm:px-8 flex justify-between items-center mb-4 text-[0.9rem] xsm:text-[1.1rem]">
              <a
                href="https://www.geeksforgeeks.org/introduction-to-dijkstras-shortest-path-algorithm/"
                target="_blank"
              >
                <div className="bg-yellow-400 px-2 xsm:px-4 py-1 rounded-lg font-semibold">
                  Learn
                </div>
              </a>
              <div className="flex gap-1 items-center">
                <p>U</p>
                <input
                  type="number"
                  className="w-[2rem] xsm:w-[3rem] outline-none rounded-md px-[0.4rem] py-[0.3rem] text-[0.5rem] xsm:text-[0.9rem] border-2 border-black bg-[#fbfae5]"
                  placeholder="0"
                  onChange={(e) => setSrc(e.target.value)}
                />
              </div>
              <div className="flex gap-1 items-center">
                <p>V</p>
                <input
                  type="number"
                  className="w-[2rem] xsm:w-[3rem] outline-none rounded-md px-[0.4rem] py-[0.3rem] text-[0.5rem] xsm:text-[0.9rem] border-2 border-black bg-[#fbfae5]"
                  placeholder="3"
                  onChange={(e) => setDest(e.target.value)}
                />
              </div>
              <div
                className="bg-gray-300 px-2 xsm:px-4 py-1 rounded-lg font-semibold hover:cursor-pointer"
                onClick={() => {
                  setAlgo("ShortestDist");
                  setComp("Algo");
                }}
              >
                View Graph
              </div>
            </div>
          </div>
          {algo_names.map((items, ind) => (
            <div className="bg-gradient-to-r from-emerald-400 to-teal-600 rounded-2xl hover:scale-102 duration-200">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-600 px-6 py-3 xsm:px-8 xsm:py-5 rounded-xl text-[1.1rem] xsm:text-[1.3rem] text-black  font-semibold">
                <p>{items.name}</p>
              </div>
              <div className="px-8 flex justify-between mb-4 text-[0.9rem] xsm:text-[1.1rem]">
                <a href={items.link} target="_blank">
                  <div className="bg-yellow-400 px-2 xsm:px-4 py-1 rounded-lg font-semibold">
                    Learn
                  </div>
                </a>
                <div
                  className="bg-gray-300 px-2 xsm:px-4 py-1 rounded-lg font-semibold hover:cursor-pointer"
                  onClick={() => {
                    setAlgo(items.key);
                    setComp("Algo");
                  }}
                >
                  View Graph
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TempAlgo;
