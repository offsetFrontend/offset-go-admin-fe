import React, { useState } from "react";
import DiaglogBox from "../../atoms/DiaglogBox";

const AddFilter = ({ open, onOk, onCancel }) => {
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
  
  const [checkboxValues, setCheckboxValues] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxValues(true);
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
        <div className="p-6">
          <form onSubmit={handleSubmit} className="">
            <div className="">
              <h2 className="text-3xl font-bold ml-4 mb-3">Filter</h2>
            </div>
            <hr className="mb-2"/>
            {/* <Registries/> */}
            <div className="px-4 mb-4">
              <div className="flex justify-between mb-3 text-base font-normal">
                {data.map((item) => (
                  <div key={item.id} className="">
                    <label className="flex justify-between items-center" id="checkbox_1">
                      
                      <input
                      id="checkbox_1"
                        className="mr-2 h-4 w-4 rounded-md bg-blue-200 accent-black"
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
            <hr className="mb-8"/>

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

export default AddFilter;
