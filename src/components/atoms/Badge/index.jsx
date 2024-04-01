import React from "react";

const border_style = {
  "gold": "gold-border rounded-[4px] p-[1px] ",
  "silver": "silver-border rounded-[4px] p-[1px]",
  "bronze": "bronze-border rounded-[4px] p-[1px] ",
  "completed": "border-2 border-green-400 text-green-400 rounded-full",
  "in-process": "border-2 border-teal-500 text-teal-500 rounded-full",
  "bid accepted": "border-2 border-teal-500 text-teal-500 rounded-full",
  "transaction cancelled": "border-2 border-red-500 text-red-500 rounded-full",
  "verification": "border-[1px] border-[#00BD9B] text-[#00BD9B] rounded-full",
  "action required": "border-[1px] border-[#C90202] text-[#C90202] rounded-full",
  "verified" : "border-[1px] border-[#3BB800] text-[#3BB800] rounded-full",
  "document uploaded" : "border-[1px] border-[#4361EE] text-[#4361EE] rounded-full",
  "listed": "border-[1px] border-[#4361EE] text-[#4361EE] rounded-full",
};

const background_style = {
  "gold": "bg-gold-gradient rounded-[3px]",
  "silver": "bg-silver-gradient rounded-[3px]",
  "bronze": "bg-bronze-gradient rounded-[3px]",
  "completed": "bg-green-400 bg-opacity-15 rounded-full",
  "in-process": "bg-teal-500  bg-opacity-15 rounded-full",
  "bid accepted": "bg-teal-500  bg-opacity-15 rounded-full",
  "transaction cancelled": "bg-red-500  bg-opacity-15 rounded-full",
  "verification": "bg-[#00BD9B26] rounded-full",
  "action required": "bg-[#C9020226] rounded-full",
  "verified" : "bg-[#3BB80026] rounded-full",
  "document uploaded" : "bg-[#4361EE26] rounded-full",
  "listed" : "bg-[#4361EE26] rounded-full",
};

const Badge = ({ children, varient }) => {
  return (
    <div
    className={`w-fit ${
      border_style[varient.toLowerCase()]
    }`}
    >
      <div className={` capitalize ${background_style[varient.toLowerCase()]}`}>
        {children}
      </div>
    </div>
  );
};

export default Badge;
