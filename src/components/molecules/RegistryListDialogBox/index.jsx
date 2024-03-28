import React, { useState } from "react";
import DiaglogBox from "../../atoms/DiaglogBox";
import { ReactComponent as Dots } from "../../../assets/svgs/dots.svg";
import { ReactComponent as Plus } from "../../../assets/svgs/plus.svg";
import AddRegistry from "../AddRegistryDialogBox";

const RegistryList = ({ open, onOk, onCancel }) => {
  const data = [
    {
      id: 1,
      registy_name: "VCS",
    },
    {
      id: 2,
      registy_name: "Gold Standards",
    },
    {
      id: 3,
      registy_name: "American Carbon registry",
    },
    {
      id: 4,
      registy_name: "Lorem Ipsum",
    },
  ];

  const [addRegistryDialogOpen, setAddRegistryDialogOpen] = useState(false);

  const handleAddRegistryClick = () => {
    setAddRegistryDialogOpen(true);
  };

  return (
    <div>
      <DiaglogBox open={open} onCancel={onCancel} width={520}>
        <div className="p-6">
          <div className="font-bold text-[28px] mb-6">Registries</div>
          <div className="mb-6">
            {data.map((item) => (
              <div className="flex justify-between shadow-[4.0px_4.0px_4.0px_rgba(0,0,0,0.1)] rounded p-3 text-sm mb-3">
                {item.registy_name}
                <Dots></Dots>
              </div>
            ))}
          </div>
          <div className="mb-6">
            <button
              className="bg-[#EEEEF6] text-[#4361EE] text-xs font-bold py-1  w-full rounded-[10px] focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleAddRegistryClick}
            >
              <div className="flex items-center justify-center">
                <Plus className="mr-2"></Plus>
                Add Another Registry
              </div>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 text-white text-xs py-2 px-4 w-[35%] mr-2 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Edit
            </button>
            <button
              className="bg-red-200 text-[#C90202] text-xs py-2 px-4 w-[35%] rounded"
              type="submit"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </DiaglogBox>
      <AddRegistry
        open={addRegistryDialogOpen}
        onCancel={() => setAddRegistryDialogOpen(false)}
        onOk={() => {
          setAddRegistryDialogOpen(false);
        }}
      />
    </div>
  );
};

export default RegistryList;
