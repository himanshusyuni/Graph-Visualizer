import React from "react";

function Vertex({ no, x, y, colInd }) {
  const colors = [
    "blue",
    "yellow",
    "zinc",
    "orange",
    "pink",
    "amber",
    "green",
    "gold",
    "silver",
    "sky",
  ];

  const style = {
    top: `${y}px`,
    left: `${x}px`,
  };

  let bgColorClass;
  switch (colInd) {
    case 0:
      bgColorClass = "bg-black";
      break;
    case 1:
      bgColorClass = "bg-yellow-600";
      break;
    case 2:
      bgColorClass = "bg-zinc-600";
      break;
    case 3:
      bgColorClass = "bg-purple-600";
      break;
    case 4:
      bgColorClass = "bg-blue-800";
      break;
    case 5:
      bgColorClass = "bg-red-500";
      break;
    case 6:
      bgColorClass = "bg-purple-400";
      break;
    case 7:
      bgColorClass = "bg-yellow-400";
      break;
    case 8:
      bgColorClass = "bg-blue-400";
      break;
    default:
      bgColorClass = "bg-amber-800";
      break;
  }

  console.log(no, colInd);

  return (
    <div
      style={style}
      className={`
        p-3 rounded-full ${bgColorClass} text-3xl font-semibold text-white h-16 w-16 text-center z-50 hover:bg-rose-500 absolute
      `}
    >
      {no}
    </div>
  );
}

export default Vertex;
