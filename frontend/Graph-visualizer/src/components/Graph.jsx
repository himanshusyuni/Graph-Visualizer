import { useContext, useState } from "react";
import LabeledLine from "./LabelledLine";
import Vertex from "./Vertex";
import StoreContext from "../Store/StoreContext";

function Graph() {
  const shape = useContext(StoreContext).shape;
  const V= useContext(StoreContext).Vertex;
  const edge=useContext(StoreContext).Edges;
  const type=useContext(StoreContext).type;
  const vertexArray=shape.filter((it)=> it.vertNo == V)[0].value;
  return <>
  <div className="absolute lg:ml-[10%]  lg:mt-[10%] md:ml-[20%] mt-[10%] xlg:ml-[6%] xlg:mt-[6%]">
    {vertexArray.map((items)=> <Vertex no={items.no} x={items.x} y={items.y} key={items.no} colInd={0} />)}
    {edge.map((item, ind) => {
    const vertexU = vertexArray.find((v) => v.no === item.u);
    const vertexV = vertexArray.find((v) => v.no === item.v);
    if (!vertexU || !vertexV) {
      console.error(`Vertices not found for edge: ${item}`);
      return null;
    }
    return (
      <LabeledLine
        x1={vertexU.x + 20}
        x2={vertexV.x + 20}
        y1={vertexU.y + 20}
        y2={vertexV.y + 20}
        color="brown"
        key={ind}
        label={type===0 ? item.w:""}
      />
    );
  })}
  </div>
  
  </>;
}
export default Graph;
