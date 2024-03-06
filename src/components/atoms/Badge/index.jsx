import React from "react";

const border_style = {
  gold: "gold-border",
  silver: "silver-border",
  bronze: "bronze-border",
  "verification": "border-2 border-teal-500 text-teal-500 rounded-full",
  "action required": "border-2 border-red-500 text-red-500 rounded-full",
};

const background_style = {
  gold: "bg-gold-gradient",
  silver: "bg-silver-gradient",
  bronze: "bg-bronze-gradient",
  "verification": "bg-teal-500  bg-opacity-15 rounded-full",
  "action required": "bg-red-500  bg-opacity-15 rounded-full",
 
};

const text_style = {
  green: "text-teal-500" ,
  red: "text-red-600" 
};
const Badge = ({ children, varient }) => {
 
  return (
    <div
      className={`w-fit  ${
        border_style[varient.toLowerCase()]
      }`}
    >
      <div
        className={`rounded-[3px] capitalize ${
          background_style[varient.toLowerCase()]
        } ${text_style[varient.toLowerCase()]}`}
       
      >
        {children}
      </div>
    </div>
  );
};

export default Badge;