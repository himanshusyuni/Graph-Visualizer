import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProcessingPage from "./ProcessingPage";
import DemoGraph from "./DemoGraph";
import Graph from "./Graph";
import TempAlgo from "./TempAlgo";

function UserInput() {
  const [Vertex, setVertex] = useState(1);
  const [Type, setType] = useState(0);
  const edgeList = useRef([]);
  const navigate = useNavigate("");
  const [flag, setFlag] = useState(0);

  const handleVertex = (e) => {
    if (e.target.value <= 0 || e.target.value > 10) {
      alert("Vertex should be in range [1,10]");
      setVertex(10);
    } else {
      setVertex(e.target.value);
    }
  };
  const [arr, setEdgeList] = useState([]);
  const handleCreate = () => {
    setFlag(1);
    setEdgeList([]);
    const edgeListArray = edgeList.current.value.split("\n");
    edgeListArray.forEach((edge) => {
      const [uu, vv,ww] = edge.split(" ");
      if (Type == 0) {
        const [v1, v2, w1] = [parseInt(uu), parseInt(vv), parseInt(ww)];
        setEdgeList((prev) => {
          const newtemp = [...prev, { u: v1, v: v2, w: w1 }];
          return newtemp;
        });
      } else {
        const [v1, v2] = [parseInt(uu), parseInt(vv)];
        setEdgeList((prev) => {
          const newtemp = [...prev, { u: v1, v: v2, w:0 }];
          return newtemp;
        });
      }
    });
  };
  console.log(arr);
  const [toggle, setToggle] = useState(0);
  const handleToggle = () => {
    setToggle((toggle + 1) % 2);
  };

  return (
    <>
      <div className="bg-teal-400 pb-10 min-h-screen flex flex-col items-center lg:items-start">
        <div className="font-bold text-center text-4xl font-serif underline mb-5 bg-teal-600 p-5 italic w-full">
          Graph Visualizer
        </div>
        <div className="flex flex-col lg:flex-row px-10 bg-teal-400 min-h-screen gap-10 lg:gap-0">
          <div className="w-[45rem] mr-10 bg-teal-900 p-3  flex flex-col gap-5 h-[40rem] rounded-3xl ">
            <div className="bg-green-300 p-2 rounded-3xl h-[40rem]">
              <div className="flex justify-center mt-4">
                <div className="bg-teal-900 flex gap-3 px-3 py-2 rounded-full text-[1.1rem] text-white font-bold">
                  <div
                    className={
                      (toggle === 0 &&
                        `bg-green-300 py-2 px-10 rounded-3xl hover:cursor-pointer text-black`) ||
                      `py-2 px-10 rounded-3xl hover:cursor-pointer`
                    }
                    onClick={() => handleToggle()}
                  >
                    Input
                  </div>
                  <div
                    className={
                      (toggle === 1 &&
                        `bg-green-300 py-2 px-10 rounded-3xl hover:cursor-pointer text-black`) ||
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
                    <p className="pr-5 text-2xl font-semibold">
                      Number of Vertex (Max upto 10) :
                    </p>
                    <input
                      type="number"
                      value={Vertex}
                      className="w-[5rem] text-[1.2rem] border-2 border-black focus:border-0 pl-2 rounded-md"
                      onChange={(e) => handleVertex(e)}
                    ></input>
                  </div>
                  <div className="flex pt-8 pl-2">
                    <p className="pr-5 text-2xl font-semibold">
                      Type of Graph :{" "}
                    </p>
                    <button
                      className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-2xl active:bg-yellow-700 ${
                        Type == 0 && "bg-yellow-700 hover:bg-yellow-700"
                      }`}
                      onClick={() => setType(0)}
                    >
                      Weighted
                    </button>
                    <button
                      className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-2xl active:bg-yellow-700 ml-5  ${
                        Type == 1 && "bg-yellow-700 hover:bg-yellow-700"
                      }`}
                      onClick={() => setType(1)}
                    >
                      Unweighted
                    </button>
                  </div>
                  <div className="flex pl-2 pt-8">
                    <p className="pr-5 text-2xl font-semibold">Edge List: </p>
                    <textarea
                      className="resize-none rounded-2xl text-lg p-2 bg-slate-50 border-2 border-black focus:border-0 w-[60%]"
                      rows={5}
                      cols={30}
                      ref={edgeList}
                      placeholder="e.g:&#10; 1 3 &#10; 4 1 &#10; 5 2
                  "
                    ></textarea>
                  </div>

                  <div className="flex justify-between m-5 mt-20">
                    <button
                      className="bg-brown-500 hover:bg-brown-600 text-white font-bold py-2 text-2xl px-8 rounded-2xl active:bg-red-600"
                      onClick={() => navigate("/")}
                    >
                      Back
                    </button>
                    <button
                      className="hover:bg-green-700 text-white text-2xl font-bold py-2 px-8 rounded-2xl bg-green-600 active:bg-yellow-700"
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

          <div className="min-h-screen">
            <div className="absolute border-4 bg-teal-600 border-teal-800 h-[40rem] lg:w-[37rem] w-[45rem]  rounded-3xl">
              {flag == 0 && <DemoGraph />}
              {flag == 1 && <ProcessingPage flag={flag} setFlag={setFlag} />}
              {flag == 2 && <Graph V={Vertex} edge={arr}  type={Type}/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserInput;
