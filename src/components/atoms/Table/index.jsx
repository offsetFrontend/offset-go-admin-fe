import React from "react";

const Table = ({children}) => {
  return (
    <table className="w-full text-center">
      {children}
    </table>
  );
};

export default Table;
