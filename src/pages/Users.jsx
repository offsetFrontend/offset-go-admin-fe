import React, { useState } from "react";
import Table from "../components/atoms/Table";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";
// import { ReactComponent as SideArrow } from "../assets/svgs/sideArrow.svg";
import { useNavigate } from "react-router-dom";

const StatusButton = ({ statusText }) => {
  return (
    <Badge varient={statusText}>
      <div className="flex justify-center items-center w-36 text-xs h-5 ">
        {statusText}
      </div>
    </Badge>
  );
};

const ActionButtons1 = ({ onViewClick }) => (
  <div className="flex  relative">
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
    </>
  </div>
);

const ActionButtons3 = ({ onViewClick, color }) => (
  <div className="flex relative">
    <Button
      color={color}
      varient={"primary"}
      onClick={() => onViewClick()}
      className="text-white w-[4.5rem] text-[0.5625rem] h-[1.875rem] font-medium"
    >
      Upload
    </Button>
  </div>
);

const ActionButtons2 = ({
  onHoldingsClick,
  onBidPlacedClick,
  onBidsReceivedClick,
  onRequestClick,
}) => (
  <div className="flex items-center justify-left gap-x-5 pl-8 mt-10">
    <Button
      color="blue"
      varient="primary"
      onClick={onHoldingsClick}
      className=" w-28  text-base h-[2.25rem] font-medium flex-shrink-0 rounded opacity-25"
    >
      <p className="text-blue">Holdings</p>
    </Button>
    <Button
      color="blue"
      varient="primary"
      onClick={onBidPlacedClick}
      className="text-white  w-[200px] text-base h-[2.25rem] font-medium flex-shrink-0 rounded"
    >
      Projects - Completed
    </Button>
    <Button
      color="blue"
      varient="primary"
      onClick={onBidsReceivedClick}
      className="text-white w-[183px] text-base h-[2.25rem] font-medium flex-shrink-0 rounded"
    >
      Projects - Ongoing
    </Button>
    <Button
      color="blue"
      varient="primary"
      onClick={onRequestClick}
      className="text-white w-[80px] text-base h-[2.25rem] font-medium flex-shrink-0 rounded"
    >
      Bids
    </Button>
    <Button
      color="blue"
      varient="primary"
      onClick={onRequestClick}
      className="text-white w-[101px] text-base h-[2.25rem] font-medium flex-shrink-0 rounded"
    >
      History
    </Button>
  </div>
);

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
        color={"blue"}
        varient={"primary"}
        onClick={() => onActionClick()}
        className={
          "w-[4.5rem] text-[0.5625rem] h-[1.875rem] font-medium  flex-shrink-0 rounded text-white "
        }
      >
        Download
      </Button>
    </>
  </div>
);
const Users = () => {
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

  const UserDetails = [
    { label: "Name", value: "Lorem Ipsum" },
    { label: "Type", value: <span className="text-blue-800">Seller</span> },
    { label: "Email", value: "Lorem @gmail.com" },
    { label: "Status", value: <StatusButton statusText="in-process" /> },
  ];
  const Wallet = [
    { label: "Total Amount", value: "₹123456789" },
    { label: "Settled Amount", value: "₹123456789" },
    { label: "Unsettled Amount ", value: "₹123456789" },
  ];
  const BankData = [
    { label: "Location ", value: "India" },
    { label: "Bank Name ", value: "Lorem bank of India" },
    { label: "Account Owner name ", value: "Lorem Ipsum" },
    { label: "Bank Location", value: "Gurgaon India" },
  ];
  const BankData2 = [
    { label: "Account Number ", value: "78000000000" },
    { label: "IFSC Code ", value: "LBI35434" },
    { label: "SWIFT Code", value: "INDHRLBI35434" },
    { label: "Cancel Cheque", value: <ActionButtons1 /> },
  ];

  const DocumentsDetails = [
    { label: "Terms $ Conditions", value: <ActionButtons /> },
    { label: "Privacy Policy", value: <ActionButtons /> },
  ];

  const header = [
    "Project Name",
    "Project ID",
    "Category",
    "No. of credits",
    "Token Type",
    "Registry",
  ];

  const tableData = [
    [
      "Forestry",
      "#64357456",
      "Renewable Energy Credits",
      "500",
      <Badge varient="Gold">
        <div className="flex justify-center text-white font-normal items-center w-12 text-xs h-4 ">
          Gold
        </div>
      </Badge>,
      <span className="text-blue-800 font-medium">VERRA</span>,
    ],
    [
      "Agriculture",
      "#3457744",
      "Nature-based Credits for Agriculture",
      "456",

      <Badge varient="Silver">
        <div className="flex justify-center text-white font-normal items-center w-12 text-xs h-4 ">
          Silver
        </div>
      </Badge>,
      <span className="text-blue-800 font-medium">UCR</span>,
    ],
    [
      "Aviation",
      365,
      "Waste management Credits",
      "345",

      <Badge varient="Bronze">
        <div className="flex justify-center text-white font-normal items-center w-12 text-xs h-4 ">
          Bronze
        </div>
      </Badge>,
      <span className="text-blue-800 font-medium">VERRA</span>,
    ],
    [
      "Renewable energy",
      254,
      "Renewable Energy Credits",
      "987",

      <Badge varient="Silver">
        <div className="flex justify-center text-white font-normal items-center w-12 text-xs h-4 ">
          Silver
        </div>
      </Badge>,
      <span className="text-blue-800 font-medium">GOLD STANDARD</span>,
    ],
  ];

  const header1 = ["Amount", "Date", "Type", "Status", "Documents"];

  const tableData1 = [
    [
      "$300",
      "02-02-2022",
      "Add Money",
      <StatusButton statusText="Requested" />,
      <ActionButtons3 color="blue" />,
    ],
    [
      "$300",
      "02-02-2022",
      "Withdraw",
      <StatusButton statusText="Requested" />,
      <ActionButtons3 color="grey" />,
    ],
  ];

  return (
    <div className="h-full w-full p-6">
      <div
        className="flex mb-4"
        onClick={redirectToRetirements}
        style={{ cursor: "pointer" }}
      >
        {/* <SideArrow className="w-10 h-10" /> */}
        <span className="text-[1.75rem] font-bold ml-3 leading-9">Users</span>
      </div>
      <div className=" pt-8 gap-y-4 mt-8 h-screen bg-white rounded-3xl shadow-formShadow pb-8">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-2xl font-medium pl-8">User Details</h1>
            <div className=" mt-2">
              {UserDetails.map((item, index) => (
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
            <h1 className="text-2xl font-medium pl-8">Wallet</h1>
            <div className=" mt-2">
              {Wallet.map((item, index) => (
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
        <div className="flex items-center mt-10 pl-8 space-x-24">
          <h1 className="text-2xl font-medium">KYC Details</h1>
          <ActionButtons1 />
        </div>
        <div className="grid grid-cols-2">
          <div className="mt-10">
            <h1 className="text-2xl font-medium pl-8">Bank Details</h1>
            <div className=" mt-2">
              {BankData.map((item, index) => (
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
          <div className="mt-[72px]">
            <div className=" mt-2">
              {BankData2.map((item, index) => (
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

        <div>
          <ActionButtons2 />
        </div>
        <div className="mt-10">
          <p className="text-2xl font-medium pl-8">Holdings</p>

          <div className="mt-6">
            <Table headerData={header} data={tableData} />
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-medium pl-8">Documents</h1>
          <h2 className="mt-2 text-base font-medium pl-8">Basic Documents</h2>
          <div className="mt-2">
            {DocumentsDetails.map((item, index) => (
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

        <div className="mt-10">
          <p className="text-2xl font-medium pl-8">Transaction History</p>

          <div className="mt-6">
            <Table headerData={header1} data={tableData1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
