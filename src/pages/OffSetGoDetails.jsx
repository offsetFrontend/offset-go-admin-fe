import React, { useState } from "react";
import { ReactComponent as Edit } from "../assets/svgs/edit.svg";
import BankDetails from "../components/atoms/BankDetails";
import Registry from "../components/atoms/Registry";
import RegistryList from "../components/molecules/RegistryListDialogBox";

const bankDetail1 = {
  bank_name: "SBI",
  account_number: "34567876543567",
  branch: "Sohna road",
  ifsc_code: "SBI5678",
};

const bankDetail2 = {
  bank_name: "IDFC",
  account_number: "2345676543456",
  branch: "Sohna road",
  ifsc_code: "SBI5678",
};

export const OffSetGoDetails = (index) => {
  const getRowColor = (index) => {
    return index % 2 === 0 ? "bg-blue-100" : "bg-white";
  };

  const [registryListDialogOpen, setRegistryListDialogOpen] = useState(false);

  const handleEditRegistryListClick = () => {
    setRegistryListDialogOpen(true);
  };

  return (
    <div className="m-5 w-[84%]">
      <div className="font-bold text-[28px]">OffSetGo Details</div>

      <div className={`${getRowColor(index)} w-full mt-4 bg-white rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-8`}>
        <div className="flex">
          <div className="w-[50%]">
            <BankDetails name="Bank Details" data={bankDetail1} />
          </div>

          <div className="w-[50%]">
            <BankDetails name="Bank Details 2" data={bankDetail2} />
          </div>
        </div>

        <div className="detailsBottom pt-8">
          <div className="flex items-center pb-2.5">
            <div className="mr-4">
              <h1 className="text-2xl font-medium">Regitry</h1>
            </div>
            <div className="cursor-pointer">
              <Edit onClick={handleEditRegistryListClick}></Edit>
            </div>
          </div>
          <div className="pb-8">
            <Registry />
          </div>

        </div>
      </div>
      <RegistryList
        open={registryListDialogOpen}
        onCancel={() => setRegistryListDialogOpen(false)}
        onOk={() => {
          setRegistryListDialogOpen(false);
        }}
      />
    </div>
  );
};
