import React, { useState } from "react";
import RadioGroup from "../../atoms/RadioGroup";

const radioOptions = [
  { label: "All", value: "All" },
  { label: "Buyer", value: "Buyer" },
  { label: "Trader", value: "Trader" }
];

const UserType = () => {
  const initialState = radioOptions.reduce((acc, { value }) => {
    acc[value] = false;
    return acc;
  }, {});

  const [_, setRadioStates] = useState(initialState);

  const handleRadioChange = (radioValue) => {
    setRadioStates((prevStates) => ({
      ...Object.keys(prevStates).reduce((acc, key) => {
        acc[key] = key === radioValue;
        return acc;
      }, {})
    }));
  };

  return (
    <div className="flex gap-8 text-base font-normal text-black ml-3 mb-4">
      <RadioGroup
        options={radioOptions.map(({ label, value }) => ({
          label,
          value
        }))}
        onChange={(e) => handleRadioChange(e.target.value)}
      />
    </div>
  );
};

export default UserType;
