import React from "react";
import AreaGraph from "../../atoms/Charts/AreaGraph";

const HomeChart = ({title, data}) => {
  return (
    <div className="p-6 bg-white w-full">
      <div className="pl-4 graph-header flex justify-between mb-4">
        <h3 className=" text-xl font-bold">{title}</h3>
        <div>Yearly</div>
      </div>
      <div className="pr-12 pb-12">
        <AreaGraph data = {data}/>
      </div>
    </div>
  );
};

export default HomeChart;
