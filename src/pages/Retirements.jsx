import React, { useRef } from "react";
import Table from "../components/atoms/Table";
import Badge from "../components/atoms/Badge";
import Button from "../components/atoms/Button";
import SearchBox from "../components/atoms/SearchBox";

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
  const searchRef = useRef();
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

  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  return (
    <div className=" h-full w-full p-6">
      <div className="text-[1.75rem] font-bold mb-4">Retirements</div>
      <div className="w-full bg-white rounded-2xl shadow-formShadow pb-12 h-[calc(100vh-6rem)]">
        <div className="flex justify-between py-5 px-8">
          <SearchBox ref={searchRef} onSearch={handleSearch} />
        </div>
        <div className="pt-6">
          <Table headerData={header} data={data} bottomLine={false} />
        </div>
      </div>
    </div>
  );
};

export default Retirements;
