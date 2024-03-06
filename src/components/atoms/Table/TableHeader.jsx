import React from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

const TableHeader = ({ data }) => {
  return (
    <thead>
      <TableRow>
        {data.map((item, index) => (
          <TableHead key={`table-head-${index}`} >{item}</TableHead>
        ))}
      </TableRow>
    </thead>
  );
};

export default TableHeader;
