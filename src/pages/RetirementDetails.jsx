import React, { useState } from "react";
import Table from "../components/atoms/Table";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";
import { ReactComponent as SideArrow } from "../assets/svgs/sideArrow.svg";
import { useNavigate } from "react-router-dom";

const RetirementDetails = () => {
  const navigate = useNavigate();

  const redirectToRetirements = () => {
    navigate("/retirements");
  };

  const getRowColor = (index) => {
    return index % 2 === 0 ? "bg-blue-100" : "bg-white";
  };

  const StatusButton = ({ statusText }) => {
    return (
      <Badge varient={statusText}>
        <div className="flex justify-center items-center w-36 text-xs h-5 ">
          {statusText}
        </div>
      </Badge>
    );
  };

  const CreditData = [
    { label: "Project name", value: "Forestry" },
    { label: "Registry", value:<span className="text-blue-800">Verra</span>},
    { label: "No. of Credits", value: "700" },
    { label: "Category", value: "Nature-based Credits" },
    {
      label: "Type",
      value: (
        <Badge varient="Gold">
          <div className="flex justify-center text-white font-normal items-center w-12 text-xs h-4 ">
            Gold
          </div>
        </Badge>
      ),
    },
    { label: "Status", value: <StatusButton statusText="in-process" /> },
  ];
  const OwnerData = [
    { label: "Name", value: "Lorem Lpsum" },
    { label: "Registry", value:<span className="text-blue-800">Verra</span>},
    { label: "Registry Username", value: "Lorem@verra" },
    { label: "Registry ID", value: "#5678" },
    { label: "Email id", value: "Lorem@email.com" },
  ];
  const RetirementData = [
    { label: "No. of Credits Retired", value: "500" },
    { label: "Name of the Beneficiary Organization", value: "YP pvt. ltd." },
    { label: "Goal", value: "Lorem ipsum sit dolor a comit" },
    { label: "Time", value: "29-02-2023 - 01-01-2024" },
  ];

  const DocumentData = [
    { label: "Acknowledgment", value: "500" },
    { label: "Certificate", value: "YP pvt. ltd." },
    { label: "OG Certificate", value: "Lorem ipsum sit dolor a comit" },
    { label: "Document 1", value: "29-02-2023 - 01-01-2024" },
    { label: "Document 2", value: "29-02-2023 - 01-01-2024" },
  ];

  return (
    <div className="h-full w-full p-6">
      <div
        className="flex mb-4"
        onClick={redirectToRetirements}
        style={{ cursor: "pointer" }}
      >
        <SideArrow className="w-10 h-10" />
        <span className="text-[1.75rem] font-bold ml-3 leading-9">
          Retirement
        </span>
      </div>
      <div className=" pt-8 gap-y-4 mt-8 h-screen bg-white rounded-3xl shadow-formShadow pb-8">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-2xl font-medium pl-8">Credit Details</h1>
            <div className=" mt-2">
              {CreditData.map((item, index) => (
                <div
                  key={index}
                  className={`${getRowColor(index)} pl-8 py-1 flex`}
                >
                  <span className="w-1/3 text-[14px]">{item.label} -</span>
                  <span className="w-1/3 text-[14px] font-bold">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-medium pl-8">Owner</h1>
            <div className=" mt-2">
              {OwnerData.map((item, index) => (
                <div
                  key={index}
                  className={`${getRowColor(index)} pl-8  py-1 flex`}
                >
                  <span className="w-1/3 text-[14px]">{item.label} -</span>
                  <span className="w-1/3 text-[14px] font-bold">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-10">
          <h1 className="text-2xl font-medium pl-8">Retirement Details</h1>
          <div className=" mt-2">
            {RetirementData.map((item, index) => (
              <div
                key={index}
                className={`${getRowColor(index)} pl-8 py-1 flex`}
              >
                <span className="w-1/2 text-[14px]">{item.label} -</span>
                <span className="w-1/2 text-[14px] font-bold">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 mt-10">
          <h1 className="text-2xl font-medium pl-8">Documents</h1>
          <div className=" mt-2">
            {DocumentData.map((item, index) => (
              <div
                key={index}
                className={`${getRowColor(index)} pl-8 py-1 flex`}
              >
                <span className="w-1/2 text-[14px]">{item.label} -</span>
                <Button
                  className="bg-blue-800 rounded flex justify-center items-center px-3 py-1"
                  borderColor={"blue"}
                  variant={"secondary"}
                >
                  <span className="text-white text-[9px] font-bold">
                    Upload
                  </span>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-12 ">
          <Button
            className="bg-blue-800 rounded flex justify-center items-center px-20 py-2"
            borderColor="blue"
            variant="secondary"
          >
            <span className="text-white text-xs font-bold leading-4">
              Save Changes
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RetirementDetails;
