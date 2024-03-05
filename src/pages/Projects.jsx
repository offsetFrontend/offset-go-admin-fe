import React from "react";
import CustomTable from "../components/organisms/CustomTable";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";

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
      ["Verra", 12, "New", <Badge varient="">Verified</Badge>,, "VERRA", <ActionButtons />],
      [
        "Verra",
        92,
        "New",
        <Badge varient="">Action Required</Badge>,
        "GOLD STANDARD",
        <ActionButtons />
      ]
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

 
  return (
    <div className="flex   pt-4 w-full bg-white border">
      <div className="w-full">
        {" "}
        <CustomTable headerData={getHeaderData()} data={tableData()} />
      </div>
    </div>
  );
};

export default Projects;
