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
  const { Vertex, setVertex, setType, Edges, CompToShow, setComp, setEdges } =
    useContext(StoreContext);
  const Type = useContext(StoreContext).type;
  const handleVertex = (e) => {
    if (!e.target.value) {
      return;
    } else if (e.target.value <= 0 || e.target.value > 10) {
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

      <div className=" bg-[#fbfae5] h-full w-full flex flex-col shadow-lg gap-8 overflow-x-auto">
        <div className="font-bold  underline py-3 flex justify-center items-center text-teal-400 bg-[#0b2834] font-serif   italic w-full lg:gap-2  text-[1.4rem] xsm:text-[1.6rem] md:text-[1.8rem] lg:text-[2rem]">
          <p>Graph Visualizer </p>
          <img
            className="h-[2rem] xsm:h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] w-16"
            src="/images/display-graph.svg"
            alt=""
          />

        </div>

        <div className="flex flex-col items-center xlg:flex-row px-10 w-full min-h-screen gap-10 xlg:gap-10 xlg:justify-between xlg:items-start shadow-lg">
          <div className="w-[20rem] xsm:w-[30rem] md:w-[45rem] xlg:w-[40rem]  flex flex-col gap-5 h-[30rem] md:h-[40rem] rounded-3xl border-[0.3rem]  border-teal-950 overflow-auto">
            <div className="bg-[#fbfae5] p-2 h-[40rem]">
              <div className="flex justify-center mt-4">
                <div className="bg-gradient-to-r from-teal-900 to-teal-600 flex md:gap-3 px-1 md:px-3 py-1 md:py-2 rounded-full border-2 border-black text-[0.8rem] md:text-[1.1rem] text-white font-bold shadow-lg">
                  <div
                    className={
                      (toggle === 0 &&
                        `bg-gradient-to-r from-emerald-400 to-teal-600 py-2 px-8 md:px-10  rounded-3xl hover:cursor-pointer text-black`) ||
                      `py-2 px-8 md:px-10 rounded-3xl hover:cursor-pointer`
                    }
                    onClick={() => handleToggle()}
                  >
                    Input
                  </div>
                  <div
                    className={
                      (toggle === 1 &&
                        `bg-gradient-to-r from-emerald-400 to-teal-600 py-2 px-8 md:px-10  rounded-3xl hover:cursor-pointer text-black`) ||
                      `py-2 px-8 md:px-10 rounded-3xl hover:cursor-pointer`
                    }
                    onClick={() => handleToggle()}
                  >
                    Algos
                  </div>
                </div>
              </div>
              {toggle == 0 && (
                <>
                  <div className="flex pt-10 pl-2 gap-2 items-center">
                    <p className="pr-5 text-[0.95rem] xsm:text-[1.2rem] md:text-[1.5rem] text-[#2a3b68] bg-clip-text   font-semibold shadow-lg">

                      Number of Vertex (Max upto 10) :
                    </p>
                    <input
                      type="number"

                      placeholder="10"
                      className="w-[4rem] xsm:w-[5rem] text-[1.1rem] xsm:text-[1.2rem] md:text-[1.4rem] border-2 border-teal-700 bg-gradient-to-r from-emerald-400 to-teal-950 text-gray-800 font-semibold pl-2 rounded-md outline-none "
                      onChange={(e) => handleVertex(e)}
                    ></input>
                  </div>
                  <div className="flex pt-8 pl-2 items-center gap-1">
                    <p className="pr-5 text-[0.95rem] xsm:text-[1.2rem] md:text-[1.5rem] text-[#2a3b68] font-semibold shadow-lg">
                      Type of Graph:{" "}
                    </p>
                    <div class="flex border-[0.15rem] border-teal-700 bg-[#fbfae5] rounded-md overflow-hidden">
                      <button
                        className={` text-black text-[0.8rem] md:text-[1.2rem] font-bold p-1 md:p-2 lg:px-3 border-r-2 border-black  active:bg-gradient-to-r from-emerald-400 to-teal-600 ${
                          Type == 0 &&
                          "bg-gradient-to-r from-emerald-500 to-teal-950  text-white"
                        } `}
                        onClick={() => setType(0)}
                      >
                        Weighted
                      </button>
                      <button

                        className={` text-black text-[0.8rem] md:text-[1.2rem] font-bold p-1 md:p-2  active:bg-gradient-to-r from-emerald-400 to-teal-600 ${

                          Type == 1 &&
                          "bg-gradient-to-r from-emerald-500 to-teal-950 text-white"
                        }  `}
                        onClick={() => setType(1)}
                      >
                        Unweighted
                      </button>
                    </div>
                  </div>
                  <div className="flex pl-2 pt-8 items-start gap-1">
                    <p className="pr-5 text-[0.95rem] xsm:text-[1.2rem] md:text-[1.5rem] text-[#2a3b68] font-semibold shadow-lg">
                      Edge List:{" "}
                    </p>
                    <textarea
                      className="resize-none rounded-2xl text-lg py-2 px-3 bg-gradient-to-r from-emerald-400 to-teal-900  border-[0.18rem] border-teal-700 outline-none w-[60%] placeholder-gray-500 h-[8.5rem] xsm:h-[10rem] md:h-[13rem] text-gray-800 "
                      rows={5}
                      cols={30}
                      ref={edgeList}
                      // placeholder="e.g:&#10; 1 3 &#10; 4 1 &#10; 5 2"
                      {...(Type === 0 && {
                        placeholder: "e.g:\n1 3 4\n4 1 5\n5 2 7",
                      })}
                      {...(Type == 1 && {
                        placeholder: "e.g: \n1 3\n4 1\n5 2",
                      })}
                    ></textarea>
                  </div>

                  <div className="flex justify-between px-5 md:mt-20 mt-[1.1rem]">
                    <button
                      className="bg-[#0b2834] text-white font-bold md:py-2 py-1 px-6 text-[1.2rem] md:text-2xl md:px-8 rounded-2xl border-2 border-teal-950 shadow-black"
                      onClick={() => navigate("/")}
                    >
                      Back
                    </button>
                    <button
                      className="bg-[#0b2834] text-white md:text-2xl font-bold md:py-2 py-1 md:px-8 px-6 text-[1.2rem] rounded-2xl border-2 border-teal-950"
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

          <div className="shadow-lg rounded-3xl overflow-hidden mb-2">
            <div className=" border-4 border-black bg-gradient-to-r from-teal-800 to-teal-600 h-[30rem] md:h-[40rem] xlg:w-[40rem] md:w-[45rem] w-[30rem] rounded-3xl ">
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
