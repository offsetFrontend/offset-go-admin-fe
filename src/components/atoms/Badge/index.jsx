import React from "react";

const border_style = {
  gold: "gold-border rounded-[4px] p-[1px]  ",
  silver: "silver-border rounded-[4px] p-[1px]",
  bronze: "bronze-border rounded-[4px] p-[1px]",
  completed: "border-2 border-green-400 text-green-400 rounded-full",
  "in-process": "border-2 border-teal-500 text-teal-500 rounded-full"
};

const background_style = {
  gold: "bg-gold-gradient",
  silver: "bg-silver-gradient",
  bronze: "bg-bronze-gradient",
};
const Badge = ({ children, varient}) => {
  return (
    <div
      className={`w-fit ${
        border_style[varient.toLowerCase()]
      }`}
    >
      <div
        className={` capitalize ${
          background_style[varient.toLowerCase()]
        } ${text_style[varient.toLowerCase()]}`}
       
      >
        {children}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Badge;