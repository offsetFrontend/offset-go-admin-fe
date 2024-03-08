import React from "react";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";
// import { ReactComponent as Filter } from "../assets/svgs/filter.svg";
import Table from "../components/atoms/Table";
const MarketPlace = () => {
  const getHeaderData = () => {
    return ["UserName","User ID","User Type", "Action"];
  };

  const tableData = () => {
    return [
      [
        "Lorem Ipsum",
        "#000234",
        "Seller",
        <ActionButtons />
      ],
      [
        "Lorem Ipsum",
        "#00107",
        "Trader",
        <ActionButtons />
      ],
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

  return (
    <div className="flex  flex-col pt-4 w-full bg-gray-100 border">
      <h1 className="ml-6 text-3xl font-bold">MarketPlace Users</h1>

      <div className="w-full h-full pt-4 mt-8 bg-white rounded-3xl">
        <div className="flex justify-between pt-5 pb-12">
          <div className="w-80 border-2 border-grey-800 rounded-lg mx-5 mb-5 "></div>

          <div className="mr-10 ">
            <Button
              className="flex justify-center items-center gap-x-2 px-2  py-2 h-fit"
              borderColor={"gray"}
              varient={"secondary"}
              // onClick={handleFilterButtonClick}
            >
              {/* <Filter className="w-4 h-4" /> */}
              <span>Filter</span>
            </Button>
          </div>
        </div>
        <Table headerData={getHeaderData()} data={tableData()} />
      </div>
    </div>
  );
};

export default MarketPlace;