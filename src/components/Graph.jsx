import React from "react";
import "../styles/graph.css";

const Graph = () => {
  const values = [50, 30, 20];
  const colors = ["var(--primary-clr)", "#FFCC91", "#97A5EB"];

  const calculateDashArray = (value, total) => {
    const circumference = Math.PI * 100;
    const dashLength = (value / total) * circumference;
    return `${dashLength} ${circumference - dashLength}`;
  };

  const totalValues = values.reduce((acc, val) => acc + val, 0);

  return (
    <div className="progress-bar">
      <div className="percent">
        <svg className="small-circle" height="600" width="600">
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="transparent"
            stroke="#EEF0FA"
            strokeWidth="100"
          ></circle>

          {values.map((value, index) => (
            <circle
              key={index}
              cx="100"
              cy="100"
              r="70"
              style={{
                stroke: colors[index],
                strokeDasharray: calculateDashArray(value, totalValues),
                strokeDashoffset:
                  index === 0
                    ? 0
                    : (-values
                        .slice(0, index)
                        .reduce((acc, val) => acc + val, 0) /
                        totalValues) *
                      Math.PI *
                      100,
              }}
            ></circle>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default Graph;
