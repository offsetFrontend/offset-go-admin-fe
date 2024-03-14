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
          <h1 className="py-2 mt-3 ml-3 text-xs font-normal text-gray-900">
            Registries
          </h1>
          <Registries />
          <hr />
          <div className="flex gap-8">
            <div className="flex w-full flex-col">
              <h2 className="py-4 ml-3 text-xs font-normal text-gray-900">
                ProjectType
              </h2>
              <ProjectType />
            </div>
            <div className="flex w-full flex-col">
              <h2 className="py-4 ml-3 text-xs font-normal text-gray-900">
                Status
              </h2>
              <Status />
            </div>
          </div>
          <hr />
        </>
      );
    case "Retirements":
      return (
        <>
          <div className="flex w-1/2 flex-col">
            <h2 className="py-4 ml-3 text-xs font-normal text-gray-900">
              Category
            </h2>
            <Category />
          </div>
          <hr />
          <div className="flex w-full flex-col">
            <h2 className="py-4 ml-3 text-xs font-normal text-gray-900">
              Status
            </h2>
            <Status />
          </div>
        </>
      );
    case "TransferRequest":
      return (
        <>
          <h1 className="py-2 ml-3 text-xs font-normal text-gray-900">
            UserType
          </h1>
          <UserType />
          <hr />
          <div className="flex w-1/2 flex-col">
            <h2 className="py-4 ml-3 text-xs font-normal text-gray-900">
              Status
            </h2>
            <Status />
          </div>
          <hr />
        </>
      );
    case "ContactUs":
      return (
        <>
          <h1 className="py-2 ml-3 text-xs font-normal text-gray-900">
            Time Period
          </h1>
          <TimePeriod />
          <hr />
          <div className="flex w-1/2 flex-col">
            <h2 className="py-4 ml-3 text-xs font-normal text-gray-900">
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
          <h1 className="py-2 ml-3 text-xs font-normal text-gray-900">
            Time Period
          </h1>
          <TimePeriod />
          <hr />
          <div className="flex w-1/2 flex-col">
            <h1 className="py-2 ml-3 text-xs font-normal text-gray-900">
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
          <h1 className="py-2 ml-3 text-xs font-normal text-gray-900">
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
    <DiaglogBox open={open} onCancel={onCancel} width={617}>
      <div className="max-h-96 overflow-hidden overflow-y-scroll px-6 no-scrollbar py-3">
        <h1 className="text-[1.75rem] ml-3 pb-2 font-bold text-black">
          Filter
        </h1>
        <hr />
        {renderFilters(page)}
        <div className="flex mx-3 mb-4 mt-4 ">
          <Button
            varient="primary"
            borderColor="black"
            color="blue"
            className="w-1/2 text-base justify-center mr-4 px-6 py-2 text-white"
            onClick={onOk}
          >
            Submit
          </Button>
          <Button
            varient="primary"
            className="w-1/2 text-base justify-center px-6 py-2 text-blue-800 bg-blue-200"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </div>
    </DiaglogBox>
  );
};

export default FilterDialogBox;
