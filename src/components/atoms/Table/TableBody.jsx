import React from "react";
import TableRow from "./TableRow";
import TableData from "./TableData";

const TableBody = ({ data, bottomLine }) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <TableRow
          key={`table-row-${rowIndex}`}
          bottomLine={bottomLine ? true : rowIndex + 1 !== data.length}
        >
          {row.map((item, index) => (
            <TableData key={`table-data-${index}`}>{item}</TableData>
          ))}
        </TableRow>
      ))}
    </tbody>
  );
};

export default TableBody;
