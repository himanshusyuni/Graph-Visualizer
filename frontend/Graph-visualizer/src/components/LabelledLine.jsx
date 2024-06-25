import React from "react";

const LabeledLine = ({ x1, y1, x2, y2, color, label }) => {
  const textX = (x1 + x2) / 2;
  const textY = (y1 + y2) / 2;

  return (
    <div className="absolute z-30">
      <svg height={450} width={500}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="5" />
        <text
          x={textX}
          y={textY}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontWeight="600"
          style={{ zIndex: 500 }}
        >
          {label}
        </text>
      </svg>
    </div>
  );
};

export default LabeledLine;
