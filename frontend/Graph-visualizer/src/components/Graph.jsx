import { useState } from "react";
import LabeledLine from "./LabelledLine";
import Vertex from "./Vertex";

function Graph({ V, edge,type }) {
  const shape = [
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
            x: 0,
            y: 150,
          },
          {
            no: 3,
            x: 0,
            y: 250,
          },
          {
            no: 4,
            x: 400,
            y: 150,
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
            x: 0,
            y: 150,
          },
          {
            no: 3,
            x: 0,
            y: 250,
          },
          {
            no: 4,
            x: 400,
            y: 150,
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
        {
          no: 8,
          x: 200,
          y: 0,
        },
        {
          no: 9,
          x: 200,
          y: 400,
        },
      ],
    },
  ];
 
  const vertexArray=shape.filter((it)=> it.vertNo == V)[0].value;
  return <>
  <div className="absolute lg:ml-[10%]  lg:mt-[10%] md:ml-[20%] mt-[10%]">
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
