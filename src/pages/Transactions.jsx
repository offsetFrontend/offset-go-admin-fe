import React, { useRef } from "react";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";
import { ReactComponent as Filter } from "../assets/svgs/filter.svg";
import SearchBox from "../components/atoms/SearchBox";
import Table from "../components/atoms/Table";

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

const Transactions = () => {
  const searchRef = useRef();
  const getHeaderData = () => {
    return ["Transaction ID", "Type", "Amount", "Status", "Date"];
  };

  const tableData = () => {
    return [
      [
        "#125D3784S",
        "Transferable",
      "  $1200",
        <StatusButton
          statusText={"bid accepted"}
          statusButton={() => {
            handleStatusButton();
          }}
        />,
        "22 - Oct - 2023"
      ],
      [
        "#125D378R2",
        "Non - Transferable",
       " $1000",        
        <StatusButton
          statusText={"transaction cancelled"}
          statusButton={() => {
            handleStatusButton();
          }}
        />,
       " 12 - Oct - 2023"
      ],
      [
        "#125D3784S",
        "Transferable",
      "  $2000",
        <StatusButton
          statusText={"document uploaded"}
          statusButton={() => {
            handleStatusButton();
          }}
        />,
        "22 - Oct - 2023"
      ],
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
      <h1 className="ml-6 text-3xl font-bold"> Transactions</h1>

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
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>
        <Table headerData={getHeaderData()} data={tableData()} />
      </div>
    </div>
  );
};

export default Transactions;
