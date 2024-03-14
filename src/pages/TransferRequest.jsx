import React, { useRef, useState } from "react";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";
import { ReactComponent as Filter } from "../assets/svgs/filter.svg";
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
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 8; 

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
   
    const data = [
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
      ],
      
    ];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handleStatusButton = () => {
    console.log("status button clicked");
  };

  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  const handleFilterButtonClick = () => {
    setFilterDialogOpen(true);
  };

  const handleFilterDialogClose = () => {
    setFilterDialogOpen(false);
  };

  const handleNextPage = () => {
    const totalItems = tableData().length; 
    if (totalItems === itemsPerPage) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="flex h-full flex-col p-6 pl-3 w-full bg-gray-100 border">
      <h1 className="ml-6 text-3xl font-bold"> Transfer Request</h1>

      <div className="w-full mt-8 h-[calc(90vh-3rem)] bg-white rounded-3xl shadow-formShadow">
        <div className="flex justify-between pt-5 pb-12">
          <div className="flex justify-between  px-5">
            <SearchBox ref={searchRef} onSearch={handleSearch} />
          </div>
          <div className="pr-7 ">
            <Button
              className="flex justify-center items-center gap-x-2 px-2  py-1 h-fit"
              borderColor={"gray"}
              varient={"secondary"}
              onClick={handleFilterButtonClick}
            >
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>
        <Table headerData={getHeaderData()} data={tableData()} />
        <div className="absolute bottom-16 left-48 right-0">
          <Pagination
            currPage={currentPage}
            onNext={handleNextPage}
            onPrev={handlePrevPage}
          />
        </div>
      </div>
      {isFilterDialogOpen && (
        <FilterDialogBox
          open={isFilterDialogOpen}
          onCancel={handleFilterDialogClose}
          onOk={handleFilterDialogClose}
          page="TransferRequest"
        />
      )}
    </div>
  );
};

export default TransferRequest;
