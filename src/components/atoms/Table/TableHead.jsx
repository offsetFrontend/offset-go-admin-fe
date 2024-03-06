import React from "react";
import { ReactComponent as Arrow } from "../../../assets/svgs/tableArrow.svg";

const TableHead= ({ children, icon = true }) => {
  return (
    <th className="pb-2 text-sm font-bold">
      <div className="flex w-full justify-center items-center">
      {icon && <Arrow className="h-2 w-2 mr-2" />}
        <div>{children}</div>
      </div>
    </th>
  );
};

export default TableHead;