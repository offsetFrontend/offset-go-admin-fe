import React, { useState } from "react";

const Status = () => {
  const [selectedCategory, setSelectedCategory] = useState();

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className="pb-2 w-full mb-2">
   <select
  id="category"
  value={selectedCategory}
  onChange={handleCategoryChange}
  className="bg-white w-full text-xs text-gray-800 py-1 pl-3 leading-normal font-normal border border-gray-300 rounded-lg focus:border-gray-300 focus:outline-none focus:ring-0"
>
        <option value="">Select Status </option>
        <option value="category1">
          Verification
        </option>
        <option value="category2">Completed</option>
        <option value="category3">Pending</option>
        <option value="category2">Verified</option>
        <option value="category3">Action Required</option>
      </select>
    </div>
  );
};
export default Status;