import React, { useState } from "react";
import { ReactComponent as DownArrow } from "../../../assets/svgs/downArrow.svg";
import DiaglogBox from "../../atoms/DiaglogBox";

const ModifyFilter = ({ open, onOk, onCancel }) => {
  const data = [
    {
      id: 1,
      time: "This Week",
    },
    {
      id: 2,
      time: "Last Week",
    },
    {
      id: 3,
      time: "This Month",
    },
    {
      id: 4,
      time: "Last Month",
    },
  ];

  const dropDownData = [
    {
      id: 1,
      section: "Category",
    },
    {
      id: 2,
      section: "Location",
    },
    {
      id: 3,
      section: "Currency",
    },
    {
      id: 4,
      section: "Registry",
    },
  ];

  const tokenData = [
    {
      id: 1,
      tokenValue: "Gold",
    },
    {
      id: 2,
      tokenValue: "Silver",
    },
    {
      id: 3,
      tokenValue: "Bronze",
    },
  ];

  const [checkboxValues, setCheckboxValues] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [tokenCheckboxValues, setTokenCheckboxValues] = useState(false);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxValues(true);
  };

  const handleTokenCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setTokenCheckboxValues(true);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkbox Values:", checkboxValues);
    console.log("From Date:", fromDate);
    console.log("To Date:", toDate);
  };
  return (
    <div>
      <DiaglogBox open={open} onCancel={onCancel} width={620}>
        <div className="p-6 h-80 no-scrollbar overflow-y-auto">
          <form onSubmit={handleSubmit} className="">
            <div className="border-b border-slate-300 mb-2">
              <h2 className="kapil text-3xl font-bold ml-4 mb-3">Filter</h2>
            </div>

            

            <div className="px-4 border-b border-slate-300 mb-8">
              <div className="flex justify-between mb-3 text-base font-normal">
                {data.map((item) => (
                  <div key={item.id} className="">
                    <label className="flex justify-between items-center" htmlFor="checkbox1">
                      <input
                        className="text-black mr-2 h-4 w-4 accent-black"
                        id="checkbox1"
                        type="radio"
                        name="checkbox1"
                        // checked={false}
                        onChange={handleCheckboxChange}
                      />
                      {item.time}
                    </label>
                  </div>
                ))}
              </div>
              <div className="">
                <div className="text-base font-normal mb-4">
                  <label className="flex items-center">
                    <input
                      className="mr-2 h-4 w-4 accent-black"
                      type="radio"
                      name="checkbox5"
                      checked={checkboxValues.checkbox5}
                      onChange={handleCheckboxChange}
                    />
                    Select specific time period
                  </label>
                </div>

                <div className="mb-4 p-1 text-[#808080]">
                  <div className="text-[10px] mb-2">Time Period</div>
                  <div className="flex">
                    <div className="mr-16">
                      <label>
                        <div className="text-[10px] mb-2">From</div>
                        <div className="">
                          <input
                            className=""
                            type="date"
                            value={fromDate}
                            onChange={handleFromDateChange}
                          />
                        </div>
                      </label>
                    </div>
                    <div>
                      <label>
                        <div className="text-[10px] mb-2">To</div>
                        <div className="">
                          <input
                            className=""
                            type="date"
                            value={toDate}
                            onChange={handleToDateChange}
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {dropDownData.map((item) => (
                <div className="" key={item.id}>
                  <div className="text-base font-normal mb-2">
                    {item.section}
                  </div>
                  <div className="cursor-pointer text-xs text-[#999] flex justify-between items-center border px-4 py-2 rounded-xl">
                    <div className="">All</div>
                    <DownArrow />
                  </div>
                </div>
              ))}
            </div>

            <div className="px-4">
              <div className="text-base font-normal mb-1">Token Type</div>
              <div className="">
                <div className="flex mb-8 text-base font-normal">
                  {tokenData.map((item) => (
                    <div key={item.id} className="">
                      <label className="flex justify-between items-center">
                        <input
                          className="text-black mr-2 h-4 w-4 accent-black"
                          type="radio"
                          name="checkbox1"
                          // checked={false}
                          onChange={handleTokenCheckboxChange}
                        />
                        <div className="mr-8">{item.tokenValue}</div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 text-white py-3 font-bold px-4 w-[45%] mr-4 rounded-xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
              <button
                className="bg-blue-200 text-blue-500 py-3 font-bold px-4 w-[45%] rounded-xl"
                type="submit"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </DiaglogBox>
    </div>
  );
};

export default ModifyFilter;
