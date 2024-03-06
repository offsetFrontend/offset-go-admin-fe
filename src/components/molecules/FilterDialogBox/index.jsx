import React, { useState } from "react";
import Button from "../../atoms/Button";
import Line from "../../atoms/VerticalLine";
import Registries from "./Registry";
// import Tokens from "./Tokens";
// import TransactionType from "./Transaction";
// import CreditType from "./Credit";
import Category from "./Category";
// import MultiRangeSlider from "./Slider";
// import SdgContribution from "./Sdg";
import DiaglogBox from "../../atoms/DiaglogBox";
import ProjectType from "./ProjectType";
import UserType from "./UserType";
// import Country from "./Country";

const FilterDialogBox = ({ open, onOk, onCancel }) => {
  return (
    <>
      <div>
        <DiaglogBox open={open} on onCancel={onCancel} width={617}>
          <div className="max-h-96 overflow-hidden overflow-y-scroll px-6 no-scrollbar py-3">
            <h1 className=" text-[1.75rem] ml-3 pb-2 font-bold text-black">
              Filter
            </h1>
            <hr />
            <h1 className="py-2  ml-3 text-xs font-normal text-grey-800">
              Registries
            </h1>
            <Registries />
            <hr />
            <div className="flex">
              <div className="flex w-1/2 flex-col">
                <h2 className="py-4  ml-3 text-xs font-normal text-grey-800">
                ProjectType
                </h2>
                <ProjectType />
              </div>
              <div className="flex w-1/2 flex-col">
                <h2 className="py-4  ml-3 text-xs font-normal text-grey-800">
                  Status
                </h2>
                {/* <Category/> */}
              </div>
            </div>

            <hr />
            <h1 className="py-2  ml-3 text-xs font-normal text-grey-800">
             UserType
            </h1>
            <UserType />
            <hr />
            <div className="flex w-full flex-col">
                <h2 className="py-4  ml-3 text-xs font-normal text-grey-800">
                 Category
                </h2>
                <Category/>
              </div>
            {/* <h2 className="py-4  ml-3 text-xs font-normal text-grey-800">
              Types of tokens
            </h2>
            <Tokens />
            <hr />
            <div className="mb-4">
              <h2 className="py-4 ml-3 text-xs font-normal text-grey-800">
                Price
              </h2>
              <MultiRangeSlider
                min={0}
                max={50}
                onChange={({ min, max }) =>{}
                }
              />
            </div> */}
            <hr />
            {/* <div className="flex  ml-3 mb-1">
              <div>
                <h2 className="py-4 text-xs font-normal text-grey-800">
                  Types of transaction
                </h2>
                <TransactionType />
              </div>
              <Line />
              <div>
                <h2 className="py-4 text-xs font-normal text-grey-800">
                  Credit type
                </h2>
                <CreditType />
              </div>
            </div> */}
            <hr />
            {/* <div>
              <h2 className="py-4  ml-3 text-xs font-normal text-grey-800 ">
                Country
              </h2>
              <Country />
            </div> */}
            <hr />
            {/* 
            <h2 className="py-4  ml-3 text-xs font-normal text-grey-800">
              SDGs focused
              <SdgContribution />
            </h2> */}

            <hr />
            <div className="flex  mb-4 mt-4 ">
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
                className="w-1/2  text-sm justify-center px-6 py-2  text-blue-800  bg-blue-200  "
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
