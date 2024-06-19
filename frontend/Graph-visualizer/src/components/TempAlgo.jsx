import React from "react";
import { useNavigate } from "react-router-dom";

const TempAlgo = () => {
  const navigate = useNavigate();
  const algo_names = [
    {
      name: "Shortest Path Algorithm",
      link: "https://www.geeksforgeeks.org/introduction-to-dijkstras-shortest-path-algorithm/",
    },
    {
      name: "Min Spanning Tree Algorithm",
      link: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
    },
    {
      name: "Topological Sort",
      link: "https://www.geeksforgeeks.org/topological-sorting/",
    },
    {
      name: "Strongly Connected Components",
      link: "https://www.geeksforgeeks.org/strongly-connected-components/",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex justify-center items-center ">
        <div className="bg-green-300 p-5 overflow-auto overflow-x-auto flex flex-col gap-5 h-[35rem] w-[35rem]">
          {/* <h1 className="text-xl px-2 text-yellow-400 font-medium ">
           Graph Algorithms and their corresponding graphs
          </h1> */}
          {algo_names.map((items) => (
            <a href={items.link} target="_blank">
              <div className="bg-green-600 px-5 py-5 rounded-xl text-[1.3rem] text-black hover:scale-102 duration-200 hover:cursor-pointer font-semibold">
                <p>{items.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default TempAlgo;
