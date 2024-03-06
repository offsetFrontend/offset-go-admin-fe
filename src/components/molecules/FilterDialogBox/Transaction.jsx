import React, { useState } from "react";
import RadioGroup from "../../atoms/RadioGroup"; // Import the RadioGroup component

const TransactionType = () => {
  const radioOptions = [
    { label: "Partially", value: "partially" },
    { label: "Fully", value: "fully" },
  ];

  const initialState = radioOptions.reduce((acc, { value }) => {
    acc[value] = false;
    return acc;
  }, {});

  const [radioStates, setRadioStates] = useState(initialState);

  const handleRadioChange = (radioValue) => {
    console.log("Selected Radio Option:", radioValue);
    setRadioStates((prevStates) => ({
      ...Object.keys(prevStates).reduce((acc, key) => {
        acc[key] = key === radioValue;
        return acc;
      }, {}),
    }));
  };

  return (
    <div className="flex gap-8 ml-3 mb-4">
      <RadioGroup
        options={radioOptions.map(({ label, value }) => ({
          label,
          value,
        }))}
        onChange={(e) => handleRadioChange(e.target.value)}
      />
    </div>
  );
};

export default TransactionType;