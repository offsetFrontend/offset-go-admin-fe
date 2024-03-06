import React, { useState } from "react";
import RadioGroup from "../../atoms/RadioGroup"; 

const Registries = () => {
  const radioOptions = [
    {
      label: <img className="" src="src\assets\svgs\regtwo.svg" alt="" />,
      value: "regTwo",
    },
    {
      label: <img className="" src="src\assets\svgs\regthree.svg" alt="" />,
      value: "regThree",
    },
    {
      label: <img className="" src="src\assets\svgs\regone.svg" alt="" />,
      value: "regOne",
    },
    {
      label: <img className="" src="src\assets\svgs\regfour.svg" alt="" />,
      value: "regFour",
    },
    {
      label: <img className="" src="src\assets\svgs\regfive.svg" alt="" />,
      value: "regFive",
    },
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

export default Registries;
