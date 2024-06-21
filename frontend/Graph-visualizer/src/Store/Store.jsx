import { useState } from "react";
import StoreContext from "./StoreContext";

const Store = (props) => {
  const [Vertex, setVertex] = useState(1);
  const [typeOfGraph, setType] = useState(0);
  const [AlgoToshow, setAlgo] = useState("");
  const [CompToShow, setCompToShow] = useState("Demo");
  const [Edges, setEdges] = useState([]);
  const [src,setSrc]= useState(0);
  const[destination,setDest]=useState(0);
  const StoreVal = {
    shape: [
      {
        vertNo: 1,
        value: [
          {
            no: 0,
            x: 200,
            y: 200,
          },
        ],
      },
      {
        vertNo: 2,
        value: [
          {
            no: 0,
            x: 200,
            y: 200,
          },
          {
            no: 1,
            x: 400,
            y: 200,
          },
        ],
      },
      {
        vertNo: 3,
        value: [
          {
            no: 0,
            x: 100,
            y: 200,
          },
          {
            no: 1,
            x: 200,
            y: 100,
          },
          {
            no: 2,
            x: 300,
            y: 200,
          },
        ],
      },
      {
        vertNo: 4,
        value: [
          {
            no: 0,
            x: 100,
            y: 200,
          },
          {
            no: 1,
            x: 200,
            y: 100,
          },
          {
            no: 2,
            x: 300,
            y: 200,
          },
          {
            no: 3,
            x: 200,
            y: 300,
          },
        ],
      },
      {
        vertNo: 5,
        value: [
          {
            no: 0,
            x: 100,
            y: 150,
          },
          {
            no: 1,
            x: 200,
            y: 50,
          },
          {
            no: 2,
            x: 300,
            y: 150,
          },
          {
            no: 3,
            x: 100,
            y: 300,
          },
          {
            no: 4,
            x: 300,
            y: 300,
          },
        ],
      },
      {
        vertNo: 6,
        value: [
          {
            no: 0,
            x: 100,
            y: 100,
          },
          {
            no: 1,
            x: 200,
            y: 0,
          },
          {
            no: 2,
            x: 300,
            y: 100,
          },
          {
            no: 3,
            x: 100,
            y: 250,
          },
          {
            no: 4,
            x: 300,
            y: 250,
          },
          {
            no: 5,
            x: 200,
            y: 350,
          },
        ],
      },
      {
        vertNo: 7,
        value: [
          {
            no: 0,
            x: 50,
            y: 100,
          },
          {
            no: 1,
            x: 200,
            y: 0,
          },
          {
            no: 2,
            x: 350,
            y: 100,
          },
          {
            no: 3,
            x: 20,
            y: 250,
          },
          {
            no: 4,
            x: 400,
            y: 250,
          },
          {
            no: 5,
            x: 300,
            y: 350,
          },
          {
            no: 6,
            x: 140,
            y: 350,
          },
        ],
      },
      {
        vertNo: 8,
        value: [
          {
            no: 0,
            x: 100,
            y: 0,
          },
          {
            no: 1,
            x: 300,
            y: 0,
          },
          {
            no: 2,
            x: 0,
            y: 130,
          },
          {
            no: 3,
            x: 0,
            y: 250,
          },
          {
            no: 4,
            x: 400,
            y: 130,
          },
          {
            no: 5,
            x: 400,
            y: 250,
          },
          {
            no: 6,
            x: 100,
            y: 350,
          },
          {
            no: 7,
            x: 300,
            y: 350,
          },
        ],
      },
      {
        vertNo: 9,
        value: [
          {
            no: 0,
            x: 50,
            y: 50,
          },
          {
            no: 1,
            x: 350,
            y: 50,
          },
          {
            no: 2,
            x: -30,
            y: 150,
          },
          {
            no: 3,
            x: -20,
            y: 280,
          },
          {
            no: 4,
            x: 430,
            y: 150,
          },
          {
            no: 5,
            x: 430,
            y: 280,
          },
          {
            no: 6,
            x: 80,
            y: 380,
          },
          {
            no: 7,
            x: 340,
            y: 380,
          },
          {
            no: 8,
            x: 200,
            y: 0,
          },
        ],
      },
      {
        vertNo: 10,
        value: [
          {
            no: 0,
            x: 50,
            y: 50,
          },
          {
            no: 1,
            x: 350,
            y: 50,
          },
          {
            no: 2,
            x: -30,
            y: 150,
          },
          {
            no: 3,
            x: -20,
            y: 280,
          },
          {
            no: 4,
            x: 430,
            y: 150,
          },
          {
            no: 5,
            x: 430,
            y: 280,
          },
          {
            no: 6,
            x: 80,
            y: 380,
          },
          {
            no: 7,
            x: 340,
            y: 380,
          },
          {
            no: 8,
            x: 200,
            y: 0,
          },
          {
            no: 9,
            x: 200,
            y: 420,
          },
        ],
      },
    ],
    Vertex: Vertex,
    setVertex: setVertex,
    type: typeOfGraph,
    setType: setType,
    AlgoToshow: AlgoToshow,
    setAlgo: setAlgo,
    CompToShow:
    CompToShow,
    setComp: setCompToShow,
    Edges:Edges,
    setEdges:setEdges,
    src:src,
    setSrc:setSrc,
    destination:destination,
    setDest:setDest,

  };
  return (
    <>
      <StoreContext.Provider value={StoreVal}>
        {props.children}
      </StoreContext.Provider>
    </>
  );
};
export default Store;
