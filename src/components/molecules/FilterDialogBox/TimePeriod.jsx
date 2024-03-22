import React from "react";

const TimePeriod = () => {
  return (
    <div className="ml-3 mb-6 flex items-center text-gray-800">
      <div className="mr-4 flex flex-col text-gray-400 ">
        <label htmlFor="startDate">From</label>
        <input type="date" id="startDate" className=" focus:border-gray-300 focus:outline-none focus:ring-0" />
      </div>
      <div className="mr-4 flex flex-col text-gray-400">
        <label htmlFor="endDate">To</label>
        <input type="date" id="endDate" className=" focus:border-gray-300 focus:outline-none focus:ring-0" />
      </div>
    </div>
  );
};

export default TimePeriod;
