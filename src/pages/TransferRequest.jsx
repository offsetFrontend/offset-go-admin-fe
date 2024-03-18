import React, {useState,useRef } from "react";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";
import FilterButton from "../components/atoms/Button/FilterButton";
import Table from "../components/atoms/Table";
import FilterDialogBox from "../components/molecules/FilterDialogBox";
import SearchBox from "../components/atoms/SearchBox";
import Pagination from "../components/atoms/Pagination";

const ActionButtons = ({ onEditClick }) => (
  <div className="flex items-center justify-center gap-x-3 relative">
    <>
      <Button
        color={"blue"}
        varient={"primary"}
        onClick={() => onEditClick()}
        className={
          "text-white w-[4.5rem] text-[0.5625rem] h-[1.875rem] font-medium"
        }
      >
        Edit
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
const TransferRequest = () => {
  const searchRef = useRef();
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);
  const header=[
      "Project Name",
      "Project ID",
      "User Type",
      "No. of credits",
      "Owner Name",
      "Status",
      "Action"
    ];
  

  const tableData = [
      [
        "Lorem Ipsum",
        "OG 001",
        "Buyer",
        "700",
        " Lorem Ipsum",

        <StatusButton
          statusText={"In-Process"}
          statusButton={() => {
            handleStatusButton();
          }}
        />,
        <ActionButtons />
      ],
      [
        "Lorem Ipsum",
        "OG 003",
        "Trader",
        "300",
        " John Doe",

        <StatusButton
          statusText={"completed"}
          statusButton={() => {
            handleStatusButton();
          }}
        />,
        <ActionButtons />
      ]
    ];

 
  const handleStatusButton = () => {
    console.log("status button clicked");
  };
  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  return (
    <div className="flex h-full flex-col p-6 pl-3 w-full bg-gray-100">
      <h1 className="ml-6 text-3xl font-bold"> Transfer Request</h1>

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
          page="TransferRequest"
        />
      )}
    </div>
  );
};

export default TransferRequest;
