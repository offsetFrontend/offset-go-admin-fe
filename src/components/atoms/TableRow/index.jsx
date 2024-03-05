import React from "react";

const TableRow = ({ children, bottomLine = true }) => {
  return <tr className={`${bottomLine && "border-b-[1px]"}`}>{children}</tr>;
};

export default TableRow;
