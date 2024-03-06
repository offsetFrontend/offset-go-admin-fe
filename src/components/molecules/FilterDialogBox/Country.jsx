import React, { useState } from "react";
const Country = (props) => {
  const [selectedCountry, setSelectedCountry] = useState();

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    console.log(event.target.value)
    // props.onCountryChange(event.target.value);
  };
  return (
    <div className="pb-2  ml-3 mb-2">
      <select
        id="category"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="bg-white w-1/2 text-xs text-grey-800 py-1 pl-3 leading-normal font-normal border border-gray-300 rounded-lg "
      >
        <option value="">Select the country </option>
        <option value="category1">Country 1</option>
        <option value="category2">Country 2</option>
        <option value="category3">Country 3</option>
      </select>
    </div>
  );
};
export default Country;
