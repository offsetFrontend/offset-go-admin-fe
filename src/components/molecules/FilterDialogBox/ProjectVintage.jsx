import React, { useState } from "react";
const ProjectVintage = (props) => {
  const [selectedYear, setSelectedYear] = useState();

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    console.log(event.target.value)
    // props.onCategoryChange(event.target.value);
  };
  return (
    <div className="pb-2  ml-3 mb-2">
      <select
        id="category"
        value={selectedYear}
        onChange={handleYearChange}
        className="bg-white w-full text-xs text-grey-800 py-1 pl-3 leading-normal font-normal border border-gray-300 rounded-lg "
      >
        <option value="">Select the Year </option>
        <option value="category1">2021</option>
        <option value="category2">2022</option>
        <option value="category3">2022</option>
      </select>
    </div>
  );
};
export default ProjectVintage;
