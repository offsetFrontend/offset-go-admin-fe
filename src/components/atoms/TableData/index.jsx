import React from "react";

const TableData = ({ children, style, header }) => {
  return (
    <td className={`text-sm h-14 ${style}`}>
      <div className={`flex justify-center`}>{children}</div>
    </td>
  );
};

export default TableData;
