import React from "react";

function Vertex({ no, x, y, colInd }) {
  const style = {
    top: `${y}px`,
    left: `${x}px`,
  };

  let bgColorClass;
  switch (colInd) {
    case 0:
      bgColorClass = " bg-gradient-to-r from-neutral-600 to-black ";
      break;
    case 1:
      bgColorClass = "bg-gradient-to-r from-rose-700 to-red-500";
      break;
    case 2:
      bgColorClass = "bg-gradient-to-r from-violet-700 to-pink-600";
      break;
    case 3:
      bgColorClass = "bg-gradient-to-r from-green-500 to-blue-500";
      break;
    case 4:
      bgColorClass = "bg-gradient-to-r from-blue-500 to-indigo-700";
      break;
    case 5:
      bgColorClass = "bg-gradient-to-r from-purple-500 to-purple-900";
      break;
    case 6:
      bgColorClass = "bg-gradient-to-r from-green-400 to-lime-700";
      break;
    case 7:
      bgColorClass = "  bg-gradient-to-r from-yellow-500 to-orange-600";
      break;
    case 8:
      bgColorClass = "bg-gradient-to-r from-fuchsia-600 to-cyan-500";
      break;
    default:
      bgColorClass = "bg-gradient-to-r from-fuchsia-600 to-pink-600";
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
