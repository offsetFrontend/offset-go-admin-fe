import React, { useState } from "react";
import { ReactComponent as Download } from "../assets/svgs/download.svg";
import { ReactComponent as AddWhite } from "../assets/svgs/addWhite.svg";
import { ReactComponent as Add } from "../assets/svgs/plus.svg";
import AddFilter from "../components/molecules/AddFilter";
import ModifyFilter from "../components/molecules/ModifyFilter";

export const Report = () => {
  const [addFilterDialogOpen, setAddFilterDialogOpen] = useState(false);
  const [downloadReportsDialogOpen, setDownloadReportsDialogOpen] =
    useState(false);

  const handleAddFilterClick = () => {
    setAddFilterDialogOpen(true);
  };

  const handleDownloadReportsClick = () => {
    setDownloadReportsDialogOpen(true);
  };

  const data = [
    {
      id: 1,
      reportsName: "Newly added Users",
    },
    {
      id: 1,
      reportsName: "Total Value of Transaction ",
    },
    {
      id: 1,
      reportsName: "Available Credit (Count)",
    },
    // {
    //   id: 1,
    //   reportsName: "Available Credit (Valuation)",
    // },
  ];
  return (
    <div className="m-5 w-[84%]">
      <div className="text-xl mb-8">
        Welcome to <span className="font-bold">Reports</span>
      </div>

      <div className="">
        <div className="flex bg-white p-8 rounded-[20px] justify-between items-center mb-3">
          <div className="text-xl font-bold">Total Users</div>
          <button
            className="bg-blue-500 text-white text-xs py-4 px-4 rounded focus:outline-none focus:shadow-outline flex font-bold"
            type="submit"
          >
            <Download className="mr-2" />
            Download Report
          </button>
        </div>

        {data.map((item) => (
          <div
            key={item.id}
            className="flex bg-white p-8 rounded-[20px] justify-between items-center mb-3"
          >
            <div className="text-xl font-bold w-[33%]">{item.reportsName}</div>
            <div className="w-[33%] flex  m-auto justify-center">
              <button
                className="flex justify-center items-center bg-blue-200 text-blue-500 text-xs py-4 w-[40%] rounded-xl focus:outline-none focus:shadow-outline flex font-bold items-center"
                type="submit"
                onClick={handleAddFilterClick}
              >
                <Add className="mr-2" />
                Add Filter
              </button>
            </div>
            <div className="w-[33%] flex justify-end">
              <button
                className="bg-blue-500 text-white text-xs py-4 px-4 rounded focus:outline-none focus:shadow-outline flex font-bold items-center"
                type="submit"
              >
                <Download className="mr-2" />
                Download Report
              </button>
            </div>
          </div>
        ))}

        <div className="flex bg-white p-8 rounded-[20px] justify-between items-center mb-3">
          <div className="text-xl font-bold w-[33%]">
            Available Credit (Valuation)
          </div>
          <div className="w-[33%] flex justify-center">
            <button
              className="flex justify-center items-center w-[40%] bg-blue-500 text-white text-xs py-4 px-4 rounded-xl focus:outline-none focus:shadow-outline flex font-bold items-center"
              type="submit"
              onClick={handleDownloadReportsClick}
            >
              <AddWhite className="mr-2" />
              Modify Filter
            </button>
          </div>
          {/* <div className="">Filter Applied</div> */}
          <div className="w-[33%] flex justify-end">
            <button
              className="bg-blue-500 text-white text-xs py-4 px-4 rounded focus:outline-none focus:shadow-outline flex font-bold items-center"
              type="submit"
            >
              <Download className="mr-2" />
              Download Report
            </button>
          </div>
        </div>
      </div>
      <AddFilter
        open={addFilterDialogOpen}
        onCancel={() => setAddFilterDialogOpen(false)}
        onOk={() => {
          setAddFilterDialogOpen(false);
        }}
      />

      <ModifyFilter
        open={downloadReportsDialogOpen}
        onCancel={() => setDownloadReportsDialogOpen(false)}
        onOk={() => {
          setDownloadReportsDialogOpen(false);
        }}
      />
    </div>
  );
};
