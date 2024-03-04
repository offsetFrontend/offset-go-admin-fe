import React from "react";
import { ReactComponent as Arrow } from "../../../assets/svgs/arrow.svg";

const Container = ({ name, value, delta }) => {
  const isPos = delta[0] === "+";
  return (
    <div className="flex flex-grow">
      <div className="bg-white w-full pl-4 pr-8 py-4 rounded-2xl">
        <div className="text-xs font-normal">{name}</div>
        <div className="text-2xl font-normal mt-4">{value}</div>
        <div className="text-xs flex mt-4 text-[#707B81]">
          <span className="h-fit self-center">
            <Arrow
              className={`w-3 ${isPos ? "text-green-500" : "text-red-500"} ${
                !isPos && "rotate-180"
              }`}
            />
          </span>
          <span className={`pr-1 ${isPos ? "text-green-500" : "text-red-500"}`}>
            {delta}
          </span>
          on this week
        </div>
      </div>
    </div>
  );
};

export default Container;
