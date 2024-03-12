import React, { useState } from "react";
import { Country as CountryStateCity } from 'country-state-city'; 

const CountrySelect = (props) => { 
  const [selectedCountry, setSelectedCountry] = useState();

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    props.onCountryChange(event.target.value);
  };

  return (
    <div className="pb-2  ml-3 mb-2">
      <select
        id="category"
        value={selectedCountry}
        onChange={handleCountryChange}
        className="bg-white w-1/2 text-xs text-grey-800 py-1 pl-3 leading-normal font-normal border border-gray-300 rounded-lg "
      >
        <option value=''>Select Country</option>
        {CountryStateCity.getAllCountries().map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
