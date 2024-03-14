import React from "react";
import Button from "../../atoms/Button";
import Registries from "./Registry";
import Category from "./Category";
import DiaglogBox from "../../atoms/DiaglogBox";
import ProjectType from "./ProjectType";
import UserType from "./UserType";
import Status from "./Status";
import TimePeriod from "./TimePeriod";
import Country from "./Country";

const renderFilters = (page) => {
  switch (page) {
    case "Projects":
      return (
        <>
          <h1 className="py-2 ml-3 text-xs font-normal text-grey-800">
            Registries
          </h1>
          <Registries />
          <hr />
          <div className="flex gap-8">
            <div className="flex w-full flex-col">
              <h2 className="py-4 ml-3 text-xs font-normal text-grey-800">
                ProjectType
              </h2>
              <ProjectType />
            </div>
            <div className="flex w-full flex-col">
              <h2 className="py-4 ml-3 text-xs font-normal text-grey-800">
                Status
              </h2>
              <Status />
            </div>
          </div>
        </>
      );
    case "Retirements":
      return (
        <>
          <div className="flex w-1/2 flex-col">
            <h2 className="py-4 ml-3 text-xs font-normal text-grey-800">
              Category
            </h2>
            <Category />
          </div>
          <div className="flex w-full flex-col">
            <h2 className="py-4 ml-3 text-xs font-normal text-grey-800">
              Status
            </h2>
            <Status />
          </div>
        </>
      );
    case "TransferRequest":
      return (
        <>
          <h1 className="py-2 ml-3 text-xs font-normal text-grey-800">
            UserType
          </h1>
          <UserType />
          <hr />
          <div className="flex w-1/2 flex-col">
            <h2 className="py-4 ml-3 text-xs font-normal text-grey-800">
              Status
            </h2>
            <Status />
          </div>
         
        </>
      );
    case "ContactUs":
      return (
        <>
          <h1 className="mt-3 py-2 ml-3 text-xs font-normal text-gray-800">
            Time Period
          </h1>
          <TimePeriod />
          <hr />
          <div className="flex w-1/2 flex-col">
            <h2 className="py-4 ml-3 text-xs font-normal text-gray-800">
              Country
            </h2>
            <Country />
          </div>
          <hr />
        </>
      );

    case "Inquire":
      return (
        <>
          <h1 className="py-2 ml-3 text-xs font-normal text-gray-800">
            Time Period
          </h1>
          <TimePeriod />
          <hr />
          <div className="flex w-1/2 flex-col">
            <h1 className="py-2 ml-3 text-xs font-normal text-grey-800">
              UserType
            </h1>
            <UserType />
            <hr />
          </div>
        </>
      );
    case "Subscription":
      return (
        <>
          <h1 className="py-2 ml-3 text-xs font-normal text-gray-800">
            Time Period
          </h1>
          <TimePeriod />
          <hr />
        </>
      );

    default:
      return null;
  }
};

const FilterDialogBox = ({ open, onOk, onCancel, page }) => {
  return (
    <>
      <div>
        <DiaglogBox open={open} onCancel={onCancel} width={617}>
          <div className="max-h-96 overflow-hidden overflow-y-scroll px-6 no-scrollbar py-3">
            <h1 className="text-[1.75rem] ml-3 pb-2 font-bold text-black">
              Filter
            </h1>
            <hr />
            {renderFilters(page)}
            <div className="flex mb-4 mt-4 ">
              <Button
                varient="primary"
                borderColor="black"
                color="blue"
                className="w-1/2 text-sm justify-center mr-4 px-6 py-2 text-white"
                onClick={onOk}
              >
                Submit
              </Button>
              <Button
                varient="primary"
                className="w-1/2 text-sm justify-center px-6 py-2 text-blue-800 bg-blue-200"
                onClick={onCancel}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DiaglogBox>
      </div>
    </>
  );
};

export default FilterDialogBox;
