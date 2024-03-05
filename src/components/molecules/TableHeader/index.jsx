import React from "react";
import TableRow from "../../atoms/TableRow";
import TableHead from "../../atoms/TableHead";

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
