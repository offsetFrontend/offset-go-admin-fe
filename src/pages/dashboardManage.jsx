import React from "react";
import { ReactComponent as Compose } from "../assets/svgs/compose.svg";


const Dashboard = () => {
  const getRowColor = (index) => {
    return index % 2 === 0 ? "bg-blue-100" : "bg-white";
  };

  const dataArray = [
    "AirCarbon Exchange",
    "Carbon Expert Romania",
    "Carbon Trade Exchange",
    "Terrapass",
    "Methane avoidance using water saving technologies",
  ];

  const dataArray2 = [
    "Renewable Energy",
    "Water Credits",
    "Waste Management",
    "Forestry & Carbon farming",
    "Water Management",
  ];

  const creditData = dataArray.map((item, index) => ({
    label: ` ${index + 1}`,
    value: item,
  }));

  const Data = dataArray2.map((item, index) => ({
    label: ` ${index + 1}`,
    value: item,
  }));

  return (
    <div className="h-screen w-full p-6 flex flex-col">
      <span className="text-[1.75rem] font-bold ml-3 leading-9">
        Dashboard management
      </span>
      <div className="flex-1 pt-8 gap-y-4 bg-white rounded-3xl shadow-formShadow pb-8">
      <div className="flex items-center"> 
        <h1 className="text-2xl font-medium pl-8 mr-4">Sdg in Demand</h1>
        <Compose /> 
      </div>
      <div className="flex items-center"> 
        <h1 className="mt-8 text-2xl font-medium pl-8 ">
          Top 5 Credits - Highest amount first
        </h1>
        <Compose className="mt-8 ml-5" />
        </div>
        <div className="mt-5">
          {creditData.map((item, index) => (
            <div key={index} className={`${getRowColor(index)} pl-8 py-1 flex`}>
              <span className=" text-[14px]">{item.label} .</span>
              <span
                className={`text-${index === 0 ? "14" : "12"} ml-5 ${
                  index === 0 ? "font-bold" : "font-medium"
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-16">
        <div className="flex items-center"> 
          <h1 className="text-2xl font-medium pl-8">
            Top 5 Credits - In Dimand
          </h1>
          <Compose className="ml-5"/>
          </div>
          <div className="mt-5">
            {Data.map((item, index) => (
              <div
                key={index}
                className={`${getRowColor(index)} pl-8 py-1 flex`}
              >
                <span className="text-14 ">{item.label} .</span>
                <span
                  className={`text-${index === 0 ? "14" : "12"} ml-5 ${
                    index === 0 ? "font-bold" : "font-medium"
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
