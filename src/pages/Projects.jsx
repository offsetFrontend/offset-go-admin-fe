import React from "react";
import CustomTable from "../components/organisms/CustomTable";
import Button from "../components/atoms/Button";

const Projects = () => {
  const getHeaderData = () => {
    return [
      "Project Name",
      "ID",
      "Type",
      "Project Status",
      "Registry",
      "Action"
    ];
  };

  const tableData = () => {
    return [
      ["Verra", 12, "New", "Verified", "VERRA", <ActionButtons onViewClick={() => console.log("View clicked")} onActionClick={() => console.log("Action clicked")} />],
      ["Verra", 92, "New", "Action Required", "GOLD STANDARD", <ActionButtons onViewClick={() => console.log("View clicked")} onActionClick={() => console.log("Action clicked")} />]
    ];
  };

  const ActionButtons = ({ onViewClick, onActionClick }) => (
    <div className="flex items-center justify-center gap-x-3 relative">
      <>
        <Button
          color={"blue"}
          varient={"primary"}
          onClick={() => onViewClick()}
          className={
            "text-white w-[3.75rem] text-[0.5625rem] h-[1.875rem] font-medium"
          }
        >
          View
        </Button>
        <Button
          varient={"primary"}
          onClick={() => onActionClick()}
          className={
            "w-[3.75rem] text-[0.5625rem] h-[1.875rem] font-medium  flex-shrink-0 rounded text-blue-800  bg-blue-500 bg-opacity-25"
          }
        >
          Action
        </Button>
      </>
    </div>
  );

  const ProjectStatusButton = ({ project }) => {
    const statusContainer =
      "rounded-full w-36 h-5 text-xs border-solid mx-auto border-2 pt-2 pb-6  ";
    const capitalizeContent =
      typeof project["Status"] === "string"
        ? project["Status"].charAt(0).toUpperCase() + project["Status"].slice(1)
        : project["Status"];
    if (capitalizeContent === "Action Required") {
      return (
        <button
          color={"blue"}
          varient={"secondary"}
          className={` ${statusContainer} text-red-600  border-red-600 bg-red-100`}
        >
          Action Required
        </button>
      );
    }
    if (capitalizeContent === "Verified") {
      return (
        <button
          color={"blue"}
          varient={"secondary"}
          className={` ${statusContainer} capitalize text-green-600 border-green-600 bg-green-100`}
        >
          Verified
        </button>
      );
    }

    if (capitalizeContent === "Verification") {
      return (
        <button
          color={"blue"}
          varient={"secondary"}
          className={` ${statusContainer} capitalize text-teal-500 border-teal-500 bg-teal-100`}
        >
          Verification
        </button>
      );
    }
    return null;
  };

  return (
    <div className="flex  pl-4 pt-4 w-full bg-white border border-green-800">
      <div className="ml-[14rem] w-[80%] border border-gray-500">
        {" "}
        <CustomTable headerData={getHeaderData()} data={tableData()} />
      </div>
    </div>
  );
};

export default Projects;
