import React from "react";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const value = payload[0].payload.value;
    return (
      <div className=" bg-blue-800 px-6 py-3 rounded-xl text-white font-bold">
        $ {value}k
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
