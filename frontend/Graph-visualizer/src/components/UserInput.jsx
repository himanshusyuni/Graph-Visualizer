import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProcessingPage from "./ProcessingPage";
import DemoGraph from "./DemoGraph";
import Graph from "./Graph";

function UserInput() {
  const [Vertex, setVertex] = useState(1);
  const [Type, setType] = useState(2);
  const edgeList = useRef([]);
  const navigate = useNavigate("");
  const [flag, setFlag] = useState(0);


  const handleVertex= (e)=>{
    if(e.target.value <=0 || e.target.value >10){
      alert("Vertex should be in range [1,10]");
      setVertex(1);
    }
    else{
      setVertex(e.target.value);
    }
  }

  const edgggeList=[]

  const [toggle, setToggle] = useState(0);
  const handleToggle = () => {
    setToggle((toggle+1)%2);
  }

  return (
    <>
      <div className=" bg-yellow-500 h-full w-full flex flex-col "  >
        <div className="font-bold text-center text-4xl  underline text-rose-900 mb-8 mt-2 flex flex col justify-center items-center shadow-lg ">
               Provide Details to create your graph
                <img className="h-11 w-16 mx-1 "
          src="pic1.svg" alt="" /> 
          
        </div>
        <div className=" flex ml-4 ">
          <div className="w-[550px] mr-4">
            <div>
              <div className="flex justify-center">
                <div className="bg-teal-900 flex gap-3 px-3 py-2 rounded-full text-[1.1rem] text-white font-bold shadow-lg">
                  <div className={(toggle===0 && `bg-green-300 py-2 px-10 rounded-3xl hover:cursor-pointer text-black`) || (`py-2 px-10 rounded-3xl hover:cursor-pointer`)} onClick={()=>handleToggle()}>Input</div>
                  <div className={(toggle===1 && `bg-green-300 py-2 px-10 rounded-3xl hover:cursor-pointer text-black`) || (`py-2 px-10 rounded-3xl hover:cursor-pointer`)} onClick={()=>handleToggle()}>Algos</div>
                </div>
              </div>
              <div className="flex pt-5 pl-10 shadow-lg ">
                <p className="pr-5 text-2xl font-semibold">
                  Number of Vertex (Max upto 10) :
                </p>
                <input
                  type="number"
                  value={Vertex}
                  className="w-14 text-2xl border-2 border-black focus:border-0"
                  onChange={(e) => handleVertex(e)}
                ></input>
              </div>
              <div className="flex pt-8 pl-10 shadow-lg ">
                <p className="pr-5 text-2xl font-semibold ">Type of Graph : </p>
                <button
                  className={`bg-teal-900 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded active:bg-yellow-700 shadow-lg  ${
                    Type == 1 && "bg-teal-900 hover:bg-emerald-500"
                  }`}
                  onClick={() => setType(0)}
                >
                  Weighted
                </button>
                <button
                  className={`bg-teal-900 hover:bg-emerald-950 text-white font-bold py-2 px-4 rounded active:bg-yellow-700 ml-5  ${
                    Type == 1 && "bg-teal-900 hover:bg-emerald-500"
                  }`}
                  onClick={() => setType(1)}
                >
                  Unweighted
                </button>
              </div>
              <div className="flex pl-10 pt-8 shadow-lg">
                <p className="pr-5 text-2xl font-semibold">Edge List : </p>
                <textarea
                  className="resize-none  text-lg p-2 bg-slate-50 border-2 border-black focus:border-0 "
                  rows={5}
                  cols={30}
                  ref={edgeList}
                  placeholder="e.g:&#10; 1 3 &#10; 4 1 &#10; 5 2
                  "
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between m-5 mt-5 shadow-lg">
              <button
                className="bg-teal-900 hover:bg-emeral-500 text-white font-bold py-2 text-2xl px-4 rounded active:bg-yellow-700"
                onClick={() => navigate("/")}
              >
                Back
              </button>
              <button
                className="hover:bg-emerald-500 text-white text-2xl font-bold py-2 px-4 rounded bg-teal-900 active:bg-yellow-700"
                onClick={() => setFlag(1)}
              >
                Create
              </button>
            </div>
          </div>
          <div className="">
            {flag == 0 && <DemoGraph />}
            {flag == 1 && <ProcessingPage flag={flag} setFlag={setFlag}/>}
            {flag == 2 && <Graph V={Vertex} edge={edgggeList} />}
          </div>
        </div>
      </div>
    </>
  );
}
export default UserInput;
