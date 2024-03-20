import React, { useState, useEffect, useRef } from "react";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";
import SearchBox from "../components/atoms/SearchBox";
import Table from "../components/atoms/Table";
import walletManage from "../utils/api/walletmanage";
import Pagination from "../components/atoms/Pagination";
import FilterButton from "../components/atoms/Button/FilterButton";
import FilterDialogBox from "../components/molecules/FilterDialogBox";

const StatusButton = ({ statusText }) => {
  return (
    <Badge varient={statusText}>
      <div className="flex justify-center items-center w-36 text-xs h-5 ">
        {statusText}
      </div>
    </Badge>
  );
};

const WalletManage = () => {
  const [walletData, setWalletData] = useState([]);
  const [filters, setFilters] = useState({ user_type: '', status: '' });
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);
  const searchRef = useRef();

  
  const getWalletData = async () => {
    try {
      const response = await walletManage(filters);
      setWalletData(response.data); 
    } catch (error) {
      console.error("Error fetching wallet data: ", error);
    }
  };

  useEffect(() => {
    getWalletData();
  }, [filters]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  const handleFilterApply = () => {
    setFilterDialogOpen(false);
    getWalletData();
  };

  return (
    <div className="flex flex-col pt-4 w-full bg-gray-100 border">
      <h1 className="ml-6 text-3xl font-bold">Wallet Manage</h1>

      <div className="w-full h-full pt-4 mt-8 bg-white rounded-3xl">
        <div className="flex justify-between pt-5 pb-12">
          <div className="flex justify-between py-5 px-8">
            <SearchBox ref={searchRef} onSearch={handleSearch} />
          </div>
          <div className="pr-7 ">
            <FilterButton onClick={() => setFilterDialogOpen(true)} />
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
        <Table
          headerData={[
            "ID",
            "Transaction Type",
            "User Type",
            "User Name",
            "Amount",
            "Status",
            "Date"
          ]}
          data={walletData.map(item => [
            item._id,
            item.transaction_type,
            item.user_type,
            item.user_name,
            `${item.requested_amount} ${item.currency}`,
            <StatusButton statusText={item.status} />,
            new Date(item.createdAt).toLocaleDateString()
          ])}
        />
         </div>
         <div className="pb-4">
          <Pagination currPage={1} onNext={() => {}} onPrev={() => {}} />
        </div>
      </div>
      {isFilterDialogOpen && (
        <FilterDialogBox
          open={isFilterDialogOpen}
          onCancel={() => setFilterDialogOpen(false)}
          onOk={() => setFilterDialogOpen(false)}
          page="WalletManage"
        />
      )}
    </div>
  );
};

export default WalletManage;
