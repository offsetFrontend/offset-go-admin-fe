import React, { useRef, useState } from "react";
import Table from "../components/atoms/Table";
import Badge from "../components/atoms/Badge";
import Button from "../components/atoms/Button";
import SearchBox from "../components/atoms/SearchBox";
import Pagination from "../components/atoms/Pagination";
import FilterButton from "../components/atoms/Button/FilterButton";
import FilterDialogBox from "../components/molecules/FilterDialogBox";

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
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);

  const header = [
    "Project Name",
    "Project ID",
    "Category",
    "No. of Credits",
    "Owner name",
    "Status",
    "Action",
  ];
  const tableData = [
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
      <div className="w-full relative mt-8 h-[calc(90vh-2.8rem)] bg-white rounded-3xl shadow-formShadow">
        <div className="flex justify-between pt-5 pb-12">
          <div className="flex justify-between  px-5">
            <SearchBox ref={searchRef} onSearch={handleSearch} />
          </div>
          <div className="pr-7 ">
            <FilterButton onClick={() => setFilterDialogOpen(true)} />
          </div>
        </div>
        <Table headerData={header} data={tableData} bottomLine={false} />
        <div className="absolute bottom-16 left-48 right-0">
          <Pagination currPage={1} onNext={() => {}} onPrev={() => {}} />
        </div>
      </div>

      {isFilterDialogOpen && (
        <FilterDialogBox
          open={isFilterDialogOpen}
          onCancel={() => setFilterDialogOpen(false)}
          onOk={() => setFilterDialogOpen(false)}
          page="Retirements"
        />
      )}
    </div>
  );
};

export default Retirements;
