import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProcessingPage from "./ProcessingPage";
import Graph from "./DemoGraph";
function UserInput() {
  const [Vertex, setVetex] = useState(0);
  const [Type, setType] = useState(2);
  const edgeList = useRef();
  const navigate = useNavigate("");
  const [flag, setFlag] = useState(0);
  const [toggle, setToggle] = useState(0);
  const handleToggle = () => {
    setToggle((toggle+1)%2);
  }
  return (
    <>
      <div className="bg-blue-200 ">
        <div className="font-bold text-center text-4xl pt-8 underline text-amber-900 mb-10 ">
          Provide Details to create your graph : )
        </div>
        <div className=" flex ml-10 ">
          <div className="w-[550px] mr-10">
            <div>
              <div className="flex justify-center">
                <div className="bg-teal-900 flex gap-3 px-3 py-2 rounded-full text-[1.1rem] text-white font-bold">
                  <div className={(toggle===0 && `bg-green-300 py-2 px-10 rounded-3xl hover:cursor-pointer text-black`) || (`py-2 px-10 rounded-3xl hover:cursor-pointer`)} onClick={()=>handleToggle()}>Input</div>
                  <div className={(toggle===1 && `bg-green-300 py-2 px-10 rounded-3xl hover:cursor-pointer text-black`) || (`py-2 px-10 rounded-3xl hover:cursor-pointer`)} onClick={()=>handleToggle()}>Algos</div>
                </div>
              </div>
              <div className="flex pt-5 pl-10">
                <p className="pr-5 text-2xl font-semibold">
                  Number of Vertex (Max upto 15) :
                </p>
                <input
                  type="number"
                  value={Vertex}
                  className="w-14 text-2xl border-2 border-black focus:border-0"
                  onChange={(e) => setVetex(e.target.value)}
                ></input>
              </div>
              <div className="flex pt-8 pl-10">
                <p className="pr-5 text-2xl font-semibold">Type of Graph : </p>
                <button
                  className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded active:bg-yellow-700 ${
                    Type == 0 && "bg-yellow-700 hover:bg-yellow-700"
                  }`}
                  onClick={() => setType(0)}
                >
                  Undirected
                </button>
                <button
                  className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded active:bg-yellow-700 ml-5  ${
                    Type == 1 && "bg-yellow-700 hover:bg-yellow-700"
                  }`}
                  onClick={() => setType(1)}
                >
                  Directed
                </button>
              </div>
              <div className="flex pl-10 pt-8">
                <p className="pr-5 text-2xl font-semibold">Edge List : </p>
                <textarea
                  className="resize-none  text-lg p-2 bg-slate-50 border-2 border-black focus:border-0"
                  rows={5}
                  cols={30}
                  ref={edgeList}
                  placeholder="e.g:&#10; 1 3 &#10; 4 1 &#10; 5 2
                  "
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between m-5 mt-20">
              <button
                className="bg-brown-500 hover:bg-brown-600 text-white font-bold py-2 text-2xl px-4 rounded active:bg-red-600"
                onClick={() => navigate("/")}
              >
                Back
              </button>
              <button
                className="hover:bg-green-700 text-white text-2xl font-bold py-2 px-4 rounded bg-green-600 active:bg-yellow-700"
                onClick={() => setFlag(1)}
              >
                Create
              </button>
            </div>
          </div>
          <div className="">
            {flag == 0 && <Graph />}
            {flag == 1 && <ProcessingPage />}
          </div>
        </div>
      </div>
    </>
  );
}
export default UserInput;
