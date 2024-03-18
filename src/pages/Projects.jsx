import React, { useState, useRef } from "react";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";
import FilterButton from "../components/atoms/Button/FilterButton";
import Table from "../components/atoms/Table";
import FilterDialogBox from "../components/molecules/FilterDialogBox";
import SearchBox from "../components/atoms/SearchBox";
import Pagination from "../components/atoms/Pagination";

const ActionButtons = ({ onViewClick, onActionClick }) => (
  <div className="flex items-center justify-center gap-x-3 relative">
    <>
      <Button
        color={"blue"}
        varient={"primary"}
        onClick={() => onViewClick()}
        className={
          "text-white w-[4.5rem] text-[0.5625rem] h-[1.875rem] font-medium"
        }
      >
        View
      </Button>
      <Button
        varient={"primary"}
        onClick={() => onActionClick()}
        className={
          "w-[4.5rem] text-[0.5625rem] h-[1.875rem] font-medium  flex-shrink-0 rounded text-blue-800  bg-blue-500 bg-opacity-25"
        }
      >
        Action
      </Button>
    </>
  </div>
);
const StatusButton = ({ statusButton, statusText }) => {
  return (
    <button onClick={statusButton} className="p-0 m-0">
      <Badge varient={statusText}>
        <div className="flex justify-center items-center w-36 text-xs h-5 ">
          {statusText}
        </div>
      </Badge>
    </button>
  );
};

const Projects = () => {
  const searchRef = useRef();
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);

  const header = [
    "Project Name",
    "ID",
    "Type",
    "Project Status",
    "Registry",
    "Action",
  ];

  const tableData = [
    [
      "Verra",
      12,
      "New",
      <StatusButton
        statusText={"Verification"}
        statusButton={() => {
          handleStatusButton();
        }}
      />,
      <span className="text-blue-800 font-medium">VERRA</span>,
      <ActionButtons />,
    ],
    [
      "Verra",
      92,
      "New",
      <StatusButton
        statusText={"Action Required"}
        statusButton={() => {
          handleStatusButton();
        }}
      />,
      <span className="text-blue-800 font-medium">GOLD STANDARD</span>,
      <ActionButtons />,
    ],
  ];

  const handleSearch = () => {
    console.log(searchRef.current.value);
  };
  const handleStatusButton = () => {
    console.log("status button clicked");
  };

  return (
    <div className="flex h-full flex-col p-6 pl-3 w-full bg-gray-100">
      <h1 className="ml-6 text-3xl font-bold"> Projects</h1>

      <div className="w-full mt-8 h-[calc(90vh-2.4rem)] bg-white rounded-3xl shadow-formShadow flex flex-col">
        <div className="flex justify-between pt-5 pb-12">
          <div className="pl-8">
            <SearchBox ref={searchRef} onSearch={handleSearch} />
          </div>
          <div className="pr-7 ">
            <FilterButton onClick={() => setFilterDialogOpen(true)} />
          </div>
        </div>
        <div className="flex-grow overflow-y-scroll">
          <Table headerData={header} data={tableData} />
        </div>
        <div className="pb-4">
          <Pagination currPage={1} onNext={() => {}} onPrev={() => {}} />
        </div>
      </div>
      {isFilterDialogOpen && (
        <FilterDialogBox
          open={isFilterDialogOpen}
          onCancel={() => setFilterDialogOpen(false)}
          onOk={() => setFilterDialogOpen(false)}
          page="Projects"
        />
      )}
    </div>
  );
};

export default Projects;
