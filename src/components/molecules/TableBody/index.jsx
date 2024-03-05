import React from "react";
import TableRow from "../../atoms/TableRow";
import TableData from "../../atoms/TableData";

const TableBody = ({ data, headerData, bottomLine }) => {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <TableRow
          key={`table-row-${rowIndex}`}
          bottomLine={bottomLine ? true : rowIndex + 1 !== data.length}
        >
          {row.map((item, index) => (
            <TableData key={`table-data-${index}`} header={headerData[index]}>
              {item}
            </TableData>
          ))}
        </TableRow>
      ))}
    </tbody>
  );
};

export default TableBody;
