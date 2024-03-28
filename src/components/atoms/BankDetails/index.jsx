import React, { useState } from "react";
import { ReactComponent as Edit } from "../../../assets/svgs/edit.svg";
import BankDetailsDialogBox from "../../molecules/BankDetailsDialogBox";

const BankDetails = ({ data, name }) => {

  const [bankDetailsDialogOpen, setbankDetailsDialogOpen] = useState(false);

  const handleEditBankDetailClick = () => {
    setbankDetailsDialogOpen(true);
};
  return (
    <div>
      <div className="bankDetails">
        <div className="">
          <div>
            <div className="flex items-center pb-2.5">
              <div className="mr-4">
                <h1 className="text-2xl font-medium">{name}</h1>
              </div>
              <div className="cursor-pointer">
                <Edit onClick={handleEditBankDetailClick}></Edit>
              </div>
            </div>
            <div className="pl-2 leading-7 flex">
              <div className="text-[14px] w-[35%]">Bank -</div>
              <div className="text-[14px] w-[65%] font-bold">{data.bank_name}</div>
            </div>
            <div className="pl-2 leading-7 flex">
              <div className="text-[14px] w-[35%]">Account number -</div>
              <div className="text-[14px] w-[65%] font-bold">{data.account_number}</div>
            </div>
            <div className="pl-2 leading-7 flex">
              <div className="text-[14px] w-[35%]">Branch -</div>
              <div className="text-[14px] w-[65%] font-bold">{data.branch}</div>
            </div>
            <div className="pl-2 leading-7 flex">
              <div className="text-[14px] w-[35%]">IFSC Code -</div>
              <div className="text-[14px] w-[65%] font-bold">{data.ifsc_code}</div>
            </div>
          </div>
        </div>
      </div>
      <BankDetailsDialogBox
                open={bankDetailsDialogOpen}
                onCancel={() => setbankDetailsDialogOpen(false)}
                onOk={() => {
                    setbankDetailsDialogOpen(false);
                }}
            />
    </div>
  );
};

export default BankDetails;
