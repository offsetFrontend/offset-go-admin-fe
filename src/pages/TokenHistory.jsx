import React, { useRef } from "react";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";
import Table from "../components/atoms/Table";
import SearchBox from "../components/atoms/SearchBox";
const TokenHistory = () => {
  const searchRef = useRef();
  const getHeaderData = () => {
    return ["Token ID", "Project ID", "Owner", "Type", "Category"];
  };

  const tableData = () => {
    return [
      [
        "#8506",
        "OG 001",
        " Lorem Ipsum",
        <StatusButton
          statusText={"Gold"}
          statusButton={() => {
            handleStatusButton();
          }}
        />,
        "Renewable"
      ],
      [
        "#8506",
        "OG 001",
        " Lorem Ipsum",
        <StatusButton
          statusText={"silver"}
          statusButton={() => {
            handleStatusButton();
          }}
        />,
        "Waste Management"
      ]
    ];
  };

  const StatusButton = ({ statusButton, statusText }) => {
    return (
      <button onClick={statusButton} className="p-0 m-0 border borde red-800">
        <Badge varient={statusText}>
          <div className="flex justify-center text-white items-center w-12 text-xs h-5 ">
            {statusText}
          </div>
        </Badge>
      </button>
    );
  };
  const handleStatusButton = () => {
    console.log("status button clicked");
  };
  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  return (
    <div className="flex  flex-col pt-4 w-full bg-gray-100 border">
      <h1 className="ml-6 text-3xl font-bold"> Token History</h1>

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

export default TokenHistory;
