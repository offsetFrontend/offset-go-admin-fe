import React, { useState } from "react";

const TimePeriod = ({ onChange }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = () => {
    onChange({ startDate, endDate });
  };

  return (
    <div className="ml-3 mb-6 flex items-center text-grey-800">
      <div className="mr-4 flex flex-col text-gray-400">
        <label htmlFor="startDate">From</label>

        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div className="mr-4 flex flex-col text-gray-400">
        <label htmlFor="endDate">To</label>

        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
      {/* <button onClick={handleSubmit}>Apply</button> */}
    </div>
  );
};

export default TimePeriod;