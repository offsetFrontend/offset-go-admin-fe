import React from "react";
import CustomTable from "../components/organisms/CustomTable";
import Badge from "../components/atoms/Badge";
import Button from "../components/atoms/Button";

const ActionButton = ({ viewButton }) => {
  return (
    <Button
      color={"blue"}
      varient={"primary"}
      onClick={viewButton}
      className={"text-white px-7 text-[9px] py-1.5 font-bold"}
    >
      View
    </Button>
  );
};

const StatusButton = ({ statusButton, statusText }) => {
  return (
    <button onClick={statusButton}>
      <Badge varient={statusText}>
        <div className="flex justify-center items-center w-36 text-xs h-5 ">
          {statusText}
        </div>
      </Badge>
    </button>
  );
};

const Retirements = () => {
  const header = [
    "Project Name",
    "Project ID",
    "Category",
    "No. of Credits",
    "Owner name",
    "Status",
    "Action",
  ];
  const data = [
    [
      "Forestry",
      "OG 001",
      "Renewable Energy Credits",
      "700",
      "Lorem Ipsum",
      <StatusButton
        statusText={"Completed"}
        statusButton={() => {
          handleStatusButton();
        }}
      />,
      <ActionButton
        viewButton={() => {
          handleViewButton();
        }}
      />,
    ],
    [
      "Forestry",
      "OG 001",
      "Renewable Energy Credits",
      "700",
      "Lorem Ipsum",
      <StatusButton
        statusText={"In-Process"}
        statusButton={() => {
          handleStatusButton();
        }}
      />,
      <ActionButton
        viewButton={() => {
          handleViewButton();
        }}
      />,
    ],
  ];

  const handleViewButton = () => {
    console.log("View Button Clicked");
  };

  const handleStatusButton = () => {
    console.log("status button clicked");
  };

  return (
    <div className=" h-full w-full p-6">
      <div className="text-[1.75rem] font-bold mb-4">Retirements</div>
      <CustomTable headerData={header} data={data} />
     
    </div>
  );
};

export default Retirements;
