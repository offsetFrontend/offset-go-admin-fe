import React from "react";

const border_style = {
  gold: "gold-border",
  silver: "silver-border",
  bronze: "bronze-border",
};

const background_style = {
  gold: "bg-gold-gradient",
  silver: "bg-silver-gradient",
  bronze: "bg-bronze-gradient",
};

const Badge = ({ children, varient }) => {
  return (
    <div
      className={`w-fit p-[1px] rounded-[4px] ${
        border_style[varient.toLowerCase()]
      }`}
    >
      <div
        className={`rounded-[3px] capitalize ${
          background_style[varient.toLowerCase()]
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Badge;
