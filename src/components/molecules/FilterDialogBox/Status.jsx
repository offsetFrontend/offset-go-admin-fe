import React from "react";

const Status = () => {
  return (
    <div className="pb-2 w-full mb-2">
      <select
        id="Status"
        className="bg-white w-full text-xs text-gray-800 py-1 pl-3 leading-normal font-normal border border-gray-300 rounded-lg focus:border-gray-300 focus:outline-none focus:ring-0"
      >
        <option value="">Select Status </option>
        <option value="Status1">Verification</option>
        <option value="Status1">Completed</option>
        <option value="Status2">Pending</option>
        <option value="Status3">Verified</option>
        <option value="Status4">Action Required</option>
      </select>
    </div>
  );
};
export default Status;
