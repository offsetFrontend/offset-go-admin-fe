import React from "react";

const Container = ({ data: { projectName, categoryType, percent, value }, index }) => {
  return (
    <div className={`w-full px-6 flex items-center py-4 ${index%2 === 1 ? 'bg-blue-100' : 'bg-white'}`}>
      <img src="/images/co2.png" alt="co2_image" className="w-4 h-4 mr-4" />
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div>
            <div className="text-lg font-medium">{projectName}</div>
            <div className="text-xs text-[#707B81]">{categoryType}</div>
          </div>
          <div>
            <div className="font-normal text-xl">{percent}%</div>
            <div className="text-sm font-normal text-[#707B81]">{value}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
