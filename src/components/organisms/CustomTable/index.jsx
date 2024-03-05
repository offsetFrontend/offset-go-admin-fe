import React from "react";
import Table from "../../atoms/Table";
import TableHeader from "../../molecules/TableHeader";
import TableBody from "../../molecules/TableBody";

const CustomTable = ({ data, headerData, onRowClick, bottomLine = true }) => {

  return (
    <div>
      <Table>
        <TableHeader data={headerData} />
        {data && (
          <TableBody
            data={data}
            headerData={headerData}
            bottomLine={bottomLine}
          />
        )}
      </Table>
    </div>
  );
};

export default CustomTable;
