import React, { useState } from "react";
import RadioGroup from "../../atoms/RadioGroup"; 
import RegTwoSvg from "../../../assets/svgs/regtwo.svg"
import RegThreeSvg from "../../../assets/svgs/regthree.svg"
import RegFourSvg from "../../../assets/svgs/regfour.svg"
import RegFiveSvg from "../../../assets/svgs/regfive.svg"

const Registries = () => {
  const radioOptions = [
    {
      label: <img src={RegTwoSvg} className="mt-2" alt="Reg Two" />,
      value: "regTwo",
    },
    {
      label: <img src={RegThreeSvg} className="mt-2" alt="Reg Three" />,
      value: "regThree",
    },
    {
      label: <img src={RegFourSvg} className="mt-2" alt="Reg Four" />,
      value: "regFour",
    },
    {
      label: <img src={RegFiveSvg}  alt="Reg Five" />,
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
