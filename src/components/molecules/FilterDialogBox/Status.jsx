import React from "react";
import Select from "react-select";
import Badge from "../../atoms/Badge";

// const options = [
//   {
//     value: "completed",
//     label: (
//       <Badge varient="completed">
//         <div className="flex justify-center items-center w-36 text-xs h-5">
//           Completed
//         </div>
//       </Badge>
//     )
//   },
//   {
//     value: "in-process",
//     label: (
//       <Badge varient="in-process">
//         <div className="flex justify-center items-center w-36 text-xs h-5">
//           In Process
//         </div>
//       </Badge>
//     )
//   },
//   {
//     value: "requested",
//     label: (
//       <Badge varient="requested">
//         <div className="flex justify-center items-center w-36 text-xs h-5">
//           Requested
//         </div>
//       </Badge>
//     )
//   },
//   {
//     value: "refused",
//     label: (
//       <Badge varient="refused">
//         <div className="flex justify-center items-center w-36 text-xs h-5">
//           Refused
//         </div>
//       </Badge>
//     )
//   }
// ];

const Status = ({ value, onChange }) => {
  const handleStatusChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="pb-2 w-full mb-2">
      <select
        id="Status"
        value={value}
        onChange={handleStatusChange}
        className="bg-white w-full text-xs text-gray-800 py-1 pl-3 leading-normal font-normal border border-gray-300 rounded-lg focus:border-gray-300 focus:outline-none focus:ring-0"
      >
        <option value=""disabled>Select Status</option>
       
        <option value="Completed">Completed</option>
        <option value="In-Process">In-Process</option>
        <option value="Refused">Refused</option>
        <option value="Requested" disabled>Requested</option>
      </select>
    </div>
  );
};

export default Status;
