import DiaglogBox from "../../atoms/DiaglogBox";
import React, { useState } from "react";
import ShadowTable from "../../atoms/ShadowTable";
import Button from "../../atoms/Button";
import { ReactComponent as GreenArrow } from "../../../assets/svgs/greenArrow.svg";
import { ReactComponent as RedArrow } from "../../../assets/svgs/redArrow.svg";
import {ReactComponent as GreyArrow } from "../../../assets/svgs/greyArrow.svg"
import { useNavigate } from "react-router-dom";


const DashboardMessage = ({ open, onOk, onCancel }) => {
  
  const navigate = useNavigate();

  const handleOkClick = () => {
    
    navigate("/transferdetails");
  };

  const handleCancelClick = () => {
    onCancel();
  };

  const header = ["Name", "Price", "Volume", "Trend"];
  const body = [
    ["AirCarbon Exchange", "$ 12", "90", <div className="flex"><GreenArrow className="w-[10px] h-[10px]" /><GreyArrow className="w-[10px] h-[10px]" /></div>],
    ["Carbon Expert Romania", "$ 8", "70", <div className="flex"><RedArrow className="w-[10px] h-[10px]" /><GreyArrow className="w-[10px] h-[10px]" /></div>],
    ["Carbon Trade Exchange", "$ 6", "40", <div className="flex"><GreenArrow className="w-[10px] h-[10px]" /><GreyArrow className="w-[10px] h-[10px]" /></div>],
    ["Terrapass", "$ 3", "20", <div className="flex"><RedArrow className="w-[10px] h-[10px]" /><GreyArrow className="w-[10px] h-[10px]" /></div>],
    ["Methane avoidance using water saving technologies", "$ 2", "7", <div className="flex"><RedArrow className="w-[10px] h-[10px]" /><GreyArrow className="w-[10px] h-[10px]" /></div>],
  ];

  return (
    <DiaglogBox open={open} onCancel={onCancel} width={587}>
      <div className="h-[495px] overflow-hidden overflow-y-scroll px-6 no-scrollbar py-3">
        <h1 className="text-lg font-medium mt-4 underline">
          Top 5 Credits - Highest amount first
        </h1>
        <div className="flex gap-x-8">
          <div className="flex items-center mt-5">
            <p className="text-lg font-medium mr-2">Data Range -</p>
            <div className="flex items-center ml-2">
              <p className="text-[10px] font-normal bg-gray-100 text-gray-800 w-[104px] h-[17px] px-1 pt-[2px] rounded underline">
                Last 5 year
              </p>
            </div>
          </div>
          <div className="flex items-center mt-5">
            <p className="text-lg font-medium mr-2">Ref Volume -</p>
            <p className="text-[10px] font-normal bg-gray-100 text-gray-800 w-[140px] h-[17px] pt-[2px] px-1 rounded underline">
              100
            </p>
          </div>
        </div>
        <div className="mt-5">
          <ShadowTable headers={header} rows={body} />
        </div>
        <div className="flex gap-x-5 justify-center items-center">
          <div className="mt-4">
            <Button
              color={"blue"}
              varient={"primary"}
              onClick={handleOkClick}
              className={"text-white text-[9px] px-20 py-3 rounded-[3px] font-bold"}
            >
              Save
            </Button>
          </div>
          <div className="mt-4">
            <Button
              color={"red"}
              varient={"primary"}
              onClick={handleCancelClick}
              className={"text-red-600 text-[9px] px-20 py-3 font-bold  border-[0.5px] rounded-[3px] border-red-600"}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </DiaglogBox>
  );
};

export default DashboardMessage;
