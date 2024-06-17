import React from "react";
import { useNavigate } from "react-router-dom";

const TempAlgo = () => {
  const navigate = useNavigate();
  const algo_names = [
    {
      name: "Dijkstra's Algorithm",
      link: "https://www.geeksforgeeks.org/introduction-to-dijkstras-shortest-path-algorithm/",
    },
    {
      name: "Bellman Ford Algorithm",
      link: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/",
    },
    {
      name: "Floyd Warshall Algorithm",
      link: "https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/",
    },
    {
      name: "Prim's Algorithm",
      link: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
    },
    {
      name: "Kruskal's Algorithm",
      link: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
    },
    {
      name: "Topological Sort",
      link: "https://www.geeksforgeeks.org/topological-sorting/",
    },
    {
      name: "Articulation Points",
      link: "https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/",
    },
    {
      name: "Strongly Connected Components",
      link: "https://www.geeksforgeeks.org/strongly-connected-components/",
    },
    {
      name: "Bridges in a Graph",
      link: "https://www.geeksforgeeks.org/bridge-in-a-graph/",
    },
    {
      name: "Eulerian Path and Circuit",
      link: "https://www.geeksforgeeks.org/eulerian-path-and-circuit/",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-black">
        <div className="bg-teal-900 p-5 overflow-auto overflow-x-auto flex flex-col gap-5 h-[35rem] w-[35rem]">
          <h1 className="text-2xl px-2 text-yellow-400 font-medium ">
            Learn Graph Algorithms with code and their example graphs
          </h1>
          {algo_names.map((items) => (
            <a href={items.link} target="_blank">
              <div className="bg-green-400 px-5 py-5 rounded-xl text-[1.3rem] text-black hover:scale-102 duration-200 hover:cursor-pointer font-semibold">
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
