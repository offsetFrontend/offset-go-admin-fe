import React from "react";

const getCellStyle = (header, content) => {
  const statusContainer =
    "rounded-full w-36 h-5 text-xs items-center border-solid mx-auto border-2 py-4";
  const tokenCatoryContainer =
    "w-9 h-3 rounded text-white flex items-center justify-center mx-auto text-[9px] bg-gradient-to-r border-1 border-solid ";

  // Check if content is a string before applying string methods
  const capitalizeContent = typeof content === 'string'
    ? content.charAt(0).toUpperCase() + content.slice(1)
    : content;

  const capitalizeHeader = typeof header === 'string' ? header.charAt(0).toUpperCase() + header.slice(1): header;

  switch (capitalizeHeader) {
    case "Project Name":
      return "text-base font-normal";
    case "Number Of Credits":
    case "Listed Price (Per credits)":
    case "Location":
      return "text-base font-medium";
    case "Registry":
      return "text-blue-800 text-sm font-medium";
    case "Bid Price":
      return "  text-black text-base font-normal";
    case "Bidder Name":
      return " text-black  text-base font-normal";
    case "Project ID":
      return "text-black text-center text-base font-medium";
    case "Closed Price":
      return "text-black text-center  text-base font-medium";
    case "Documents":
      return "text-left text-black  text-base font-normal";

    case "Token Type":
      switch (capitalizeContent) {
        case "Gold":
          return `${tokenCatoryContainer} from-yellow-300 to-amber-500  border-amber-400`;
        case "Silver":
          return `${tokenCatoryContainer} from-gray-500 to-gray-400  border-gray-400`;
        case "Bronze":
          return `${tokenCatoryContainer} from-amber-600 to-orange-300 border-orange-300`;
      }
    default:
      return "";
  }
};

const TableData = ({ children, style, header }) => {
  const statusCol = getCellStyle(header, children);

  return (
    <td className={`text-sm h-14 ${style}`}>
      <div className={`capitalize ${statusCol} flex justify-center`}>{children}</div>
    </td>
  );
};

export default TableData;
