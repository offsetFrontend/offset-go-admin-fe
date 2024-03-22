import React from "react";
import RadioGroup from "../../atoms/RadioGroup";

const radioOptions = [
  { label: "All", value: "All" },
  { label: "Buyer", value: "Buyer" },
  { label: "Seller", value: "Seller" },
  { label: "Trader", value: "Trader" },
];

const UserType = () => {
  return (
    <div className="flex gap-8 ml-3 mb-4">
      <RadioGroup options={radioOptions} />
    </div>
  );
};

export default UserType;
