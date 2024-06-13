import {  useRef, useState } from "react";
import picture from "../pictures/graph.png";
import { useNavigate } from "react-router-dom";
function UserInput() {
  const [Vertex,setVetex]= useState(0);
  const [Type, setType] = useState(0);
  const edgeList= useRef();
  const navigate= useNavigate('');
  return (
    <>
      <div className="bg-white h-screen">
        <div className="font-bold text-center text-4xl pt-8 underline text-amber-900 mb-10 ">
          Provide Details to create your graph : )
        </div>
        <div className=" flex ml-10">
          <div className="size-[45%]">
            <div>
              <div className="flex pt-5 pl-10">
                <p className="pr-5 text-2xl font-semibold">
                  Number of Vertex (Max upto 15) :
                </p>
                <input
                  type="number"
                  value={Vertex}
                  className="w-14 text-2xl border-2 border-black focus:border-0"
                  onChange={(e)=> setVetex(e.target.value)}
                ></input>
              </div>
              <div className="flex pt-8 pl-10">
                <p className="pr-5 text-2xl font-semibold">Type of Graph : </p>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded active:bg-yellow-700"
                  onClick={()=>setType(0)}
                >
                  Undirected
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-5 active:bg-yellow-700"
                  onClick={()=>setType(1)}
                >
                  Directed
                </button>
              </div>
              <div className="flex pl-10 pt-8">
                <p className="pr-5 text-2xl font-semibold">Edge List : </p>
                <textarea
                  className="text-lg p-2 bg-slate-50 border-2 border-black focus:border-0"
                  rows={5}
                  cols={30}
                  ref={edgeList}
                  placeholder="e.g:&#10; 1 3 &#10; 4 1 &#10; 5 2
                  "
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between m-5 mt-20">
              <button className="bg-brown-500 hover:bg-brown-600 text-white font-bold py-2 px-4 rounded active:bg-red-600"  onClick={()=> navigate('/')}>
                Back
              </button>
              <button className="hover:bg-green-700 text-white font-bold py-2 px-4 rounded bg-green-600 active:bg-yellow-700">
                Create
              </button>
            </div>
          </div>
          <div className="size-[40%]"> 
            <img src={picture}   className="m-10"/>
            

         </div>
        </div>
      </div>
    </>
  );
}
export default UserInput;
