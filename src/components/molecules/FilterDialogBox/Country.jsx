
import React, { useState } from "react";

const Country = (props) => {
  const [selectedCategory, setSelectedCategory] = useState();

  const handleCategoryChange = (event) => {
    // setSelectedCategory(event.target.value);
    // props.onCategoryChange(event.target.value);
  };
  return (
    <div className="pb-2 mb-6 w-full">
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="bg-white w-full text-xs text-grey-800 py-1 pl-3 leading-normal font-normal border border-gray-300 rounded-lg "
      >
        <option value="">Select Country </option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
    </div>
  );
};
export default Country;