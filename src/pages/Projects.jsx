import React,{ useState} from "react";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";
import { ReactComponent as Filter } from "../assets/filter.svg";
import Table from "../components/atoms/Table";
import FilterDialogBox from "../components/molecules/FilterDialogBox";

const Projects = () => {
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);
  const getHeaderData = () => {
    return [
      "Project Name",
      "ID",
      "Type",
      "Project Status",
      "Registry",
      "Action"
    ];
  };

  const tableData = () => {
    return [
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
        "VERRA",
        <ActionButtons />
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
        "GOLD STANDARD",
        <ActionButtons />
      ]
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
  const handleStatusButton = () => {
    console.log("status button clicked");
  };

  const handleFilterButtonClick = () => {
    setFilterDialogOpen(true);
  };

  const handleFilterDialogClose = () => {
    setFilterDialogOpen(false);
  };

  return (
    <div className="flex  flex-col pt-4 w-full bg-gray-100 border">
      <h1 className="ml-6 text-3xl font-bold"> Projects</h1>

      <div className="w-full h-full pt-4 ml-6 mt-8 bg-white rounded-3xl">
        <div className="flex justify-between pt-5 pb-12">
          <div className="w-80 border-2 border-grey-800 rounded-lg mx-5 mb-5 "></div>

          <div className="mr-10 ">
            <Button
              className="flex justify-center items-center gap-x-2 px-2  py-2 h-fit"
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
      </div>
      {isFilterDialogOpen && (
        <FilterDialogBox
          open={isFilterDialogOpen}
          onCancel={handleFilterDialogClose}
          onOk={handleFilterDialogClose}
        />
      )}
    </div>
  );
};

export default Projects;
