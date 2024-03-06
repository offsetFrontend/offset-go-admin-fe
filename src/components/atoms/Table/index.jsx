import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ data, headerData, bottomLine = true }) => {
  return (
    <table className="w-full text-center">
      <TableHeader data={headerData} />
      {data && <TableBody data={data} bottomLine={bottomLine} />}
    </table>
  );
};

export default Table;
