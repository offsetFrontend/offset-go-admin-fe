import React from "react";

const TimePeriod = () => {
  return (
    <div className="ml-3 mb-6 flex items-center text-gray-800">
      <div className="mr-4 flex flex-col text-gray-400">
        <label htmlFor="startDate">From</label>

        <input type="date" id="startDate" />
      </div>
      <div className="mr-4 flex flex-col text-gray-400">
        <label htmlFor="endDate">To</label>

        <input type="date" id="endDate" />
      </div>
    </div>
  );
};

export default TimePeriod;
