import React, { useRef } from "react";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";
import Table from "../components/atoms/Table";
import SearchBox from "../components/atoms/SearchBox";

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
  const getHeaderData = () => {
    return [
      "Project Name",
      "Project ID",
      "User Type",
      "No. of credits",
      "Owner Name",
      "Status",
      "Action"
    ];
  };

  const tableData = () => {
    return [
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
  };

 
  const handleStatusButton = () => {
    console.log("status button clicked");
  };
  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  return (
    <div className="flex  flex-col pt-4 w-full bg-gray-100 border">
      <h1 className="ml-6 text-3xl font-bold"> Transfer Request</h1>

      <div className="w-full h-full pt-4 mt-8 bg-white rounded-3xl">
        <div className="flex justify-between pt-5 pb-12">
          <div className="flex justify-between py-5 px-8">
            <SearchBox ref={searchRef} onSearch={handleSearch} />
          </div>
          <div className="mr-10 ">
            <Button
              className="flex justify-center items-center gap-x-2 px-2  py-2 h-fit"
              borderColor={"gray"}
              varient={"secondary"}
            >
              <span>Filter</span>
            </Button>
          </div>
        </div>
        <Table headerData={getHeaderData()} data={tableData()} />
      </div>
    </div>
  );
};

export default TransferRequest;
