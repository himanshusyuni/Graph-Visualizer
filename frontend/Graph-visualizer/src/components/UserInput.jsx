import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProcessingPage from "./ProcessingPage";
import DemoGraph from "./DemoGraph";
import Graph from "./Graph";
import TempAlgo from "./TempAlgo";
import Algorithm from "./Algorithm";
import StoreContext from "../Store/StoreContext";

function UserInput() {
  const edgeList = useRef([]);
  const navigate = useNavigate("");
  const Vertex = useContext(StoreContext).Vertex;
  const setVertex = useContext(StoreContext).setVertex;
  const Type = useContext(StoreContext).type;
  const setType = useContext(StoreContext).setType;
  const Edges = useContext(StoreContext).Edges;
  const setEdges = useContext(StoreContext).setEdges;
  const CompToShow = useContext(StoreContext).CompToShow;
  const setComp = useContext(StoreContext).setComp;

  const handleVertex = (e) => {
    if (e.target.value <= 0 || e.target.value > 10) {
      alert("Vertex should be in range [1,10]");
      setVertex(10);
    } else {
      setVertex(e.target.value);
    }
  };

  const handleCreate = () => {
    setComp("Process");
    setEdges([]);
    const edgeListArray = edgeList.current.value.split("\n");
    edgeListArray.forEach((edge) => {
      const [uu, vv, ww] = edge.split(" ");
      if (Type == 0) {
        const [v1, v2, w1] = [parseInt(uu), parseInt(vv), parseInt(ww)];
        setEdges((prev) => {
          const newtemp = [...prev, { u: v1, v: v2, w: w1 }];
          return newtemp;
        });
      } else {
        const [v1, v2] = [parseInt(uu), parseInt(vv)];
        setEdges((prev) => {
          const newtemp = [...prev, { u: v1, v: v2, w: 0 }];
          return newtemp;
        });
      }
    });
  };

  const [toggle, setToggle] = useState(0);
  const handleToggle = () => {
    setToggle((toggle + 1) % 2);
  };

  return (
    <>
      <div className="bg-[#fbfae5] pb-10 min-h-screen flex flex-col items-center lg:items-start">
        <div className="font-bold text-center text-[#00d0aa]  bg-[#0b2834] text-[2rem] font-serif underline mb-5 p-5 italic w-full">
          Graph Visualizer
        </div>
        <div className="flex flex-col items-center xlg:flex-row px-10 w-full min-h-screen gap-10 xlg:gap-10 xlg:justify-between xlg:items-start">
          <div className="w-[30rem] md:w-[45rem] xlg:w-[40rem]  flex flex-col gap-5 h-[30rem] md:h-[40rem] rounded-3xl border-[0.3rem]  border-teal-950 overflow-auto">
            <div className="bg-[#fbfae5] p-2 h-[40rem]">
              <div className="flex justify-center mt-4">
                <div className="bg-gradient-to-r from-teal-900 to-teal-600 flex gap-3 px-3 py-2 rounded-full border-2 border-black text-[0.8rem] md:text-[1.1rem] text-white font-bold">
                  <div
                    className={
                      (toggle === 0 &&
                        `bg-gradient-to-r from-emerald-400 to-teal-600 py-2 px-10 rounded-3xl hover:cursor-pointer text-black`) ||
                      `py-2 px-10 rounded-3xl hover:cursor-pointer`
                    }
                    onClick={() => handleToggle()}
                  >
                    Input
                  </div>
                  <div
                    className={
                      (toggle === 1 &&
                        `bg-gradient-to-r from-emerald-400 to-teal-600 py-2 px-10 rounded-3xl hover:cursor-pointer text-black`) ||
                      `py-2 px-10 rounded-3xl hover:cursor-pointer`
                    }
                    onClick={() => handleToggle()}
                  >
                    Algos
                  </div>
                </div>
              </div>
              {toggle == 0 && (
                <>
                  <div className="flex pt-10 pl-2 ">
                    <p className="pr-5 text-[1.2rem] md:text-[1.5rem] text-[#2a3b68]   font-semibold">
                      Number of Vertex (Max upto 10) :
                    </p>
                    <input
                      type="number"
                      value={Vertex}
                      className="w-[5rem] text-[1.2rem] border-2 border-teal-700 bg-gradient-to-r from-teal-400 to-yellow-200 focus:border-0 pl-2 rounded-md"
                      onChange={(e) => handleVertex(e)}
                    ></input>
                  </div>
                  <div className="flex pt-8 pl-2">
                    <p className="pr-5 text-[1.2rem] md:text-[1.5rem] text-[#2a3b68]  font-semibold">
                      Type of Graph :{" "}
                    </p>
                    <div class="flex border-[0.15rem] border-teal-700 bg-[#fbfae5] rounded-md overflow-hidden">
                      <button
                        className={` text-black font-bold p-2 border-r-2 border-black  active:bg-gradient-to-r from-emerald-400 to-teal-600 ${
                          Type == 0 && "bg-gradient-to-r from-emerald-400 to-teal-600"
                        } `}
                        onClick={() => setType(0)}
                      >
                        Weighted
                      </button>
                      <button
                        className={` text-black font-bold p-2  active:bg-gradient-to-r from-emerald-400 to-teal-600 ${
                          Type == 1 && "bg-gradient-to-r from-emerald-400 to-teal-600"
                        }  `}
                        onClick={() => setType(1)}
                      >
                        Unweighted
                      </button>
                    </div>
                  </div>
                  <div className="flex pl-2 pt-8">
                    <p className="pr-5 text-[1.2rem] md:text-[1.5rem] text-[#2a3b68]  font-semibold">
                      Edge List:{" "}
                    </p>
                    <textarea
                      className="resize-none rounded-2xl text-lg p-2 bg-gradient-to-r from-teal-400 to-yellow-200 border-[0.18rem] border-teal-700 outline-none w-[60%] placeholder-gray-500"
                      rows={5}
                      cols={30}
                      ref={edgeList}
                      placeholder="e.g:&#10; 1 3 &#10; 4 1 &#10; 5 2
                  "
                    ></textarea>
                  </div>

                  <div className="flex justify-between m-5 mt-20">
                    <button
                      className="bg-[#0b2834] text-white font-bold py-2 text-2xl px-8 rounded-2xl border-2 border-teal-950"
                      onClick={() => navigate("/")}
                    >
                      Back
                    </button>
                    <button
                      className="bg-[#0b2834] text-white text-2xl font-bold py-2 px-8 rounded-2xl border-2 border-teal-950"
                      onClick={() => handleCreate()}
                    >
                      Create
                    </button>
                  </div>
                </>
              )}
              {toggle == 1 && <TempAlgo />}
            </div>
          </div>

          <div className="min-h-screen ">
            <div className=" border-4 border-black bg-gradient-to-r from-teal-900 to-teal-600 h-[30rem] md:h-[40rem] xlg:w-[40rem] md:w-[45rem] w-[30rem] rounded-3xl ">
              {CompToShow === "Demo" && <DemoGraph />}
              {CompToShow == "Process" && <ProcessingPage />}
              {CompToShow === "Graph" && <Graph />}
              {CompToShow === "Algo" && <Algorithm />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserInput;
