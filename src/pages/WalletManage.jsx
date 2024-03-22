import React, { useState, useEffect, useRef } from "react";
import Badge from "../components/atoms/Badge";
import SearchBox from "../components/atoms/SearchBox";
import Table from "../components/atoms/Table";
import walletManage from "../utils/api/walletmanage";
import Pagination from "../components/atoms/Pagination";
import FilterButton from "../components/atoms/Button/FilterButton";
import FilterDialogBox from "../components/molecules/FilterDialogBox";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";

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
  const [loading, setLoading] = useState(false); // State to indicate loading state
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);
  const searchRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;

  const getWalletData = async (page = 1, limit = 10) => {
    try {
      setLoading(true); // Set loading to true when fetching data
      const response = await walletManage({ page, limit });
      setWalletData(response.data.docs);
      if (response.data.prevPage === null && page !== 1) {
        setCurrentPage(1);
      }
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching wallet data: ", error);
      setLoading(false); // Ensure loading is set to false even if there's an error
    }
  };

  const header = [
    "ID",
    "Transaction Type",
    "User Type",
    "User Name",
    "Amount",
    "Status",
    "Date"
  ];

  useEffect(() => {
    getWalletData(currentPage, limit);
  }, [currentPage]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); 
    }
  };

  const tableData = walletData.map((item) => [
    <Link to={`/wallet-manage/WalletTransactionDetails/${item._id}`}>
      {item._id}
    </Link>,
    item.transaction_type,
    item.user_type,
    item.user_name,
    `${item.requested_amount} ${item.currency}`,
    <StatusButton statusText={item.status} />,
    new Date(item.updatedAt).toLocaleDateString()
  ]);

  return (
    <div className="flex h-full flex-col p-6 pl-3 w-full bg-gray-100">
      <h1 className="ml-6 text-3xl font-bold">Wallet Manage</h1>

      <div className="w-full mt-8 h-[calc(90vh-2.4rem)] bg-white rounded-3xl shadow-formShadow flex flex-col">
        <div className="flex justify-between pt-5 pb-12">
          <div className="pl-8">
            <SearchBox ref={searchRef} onSearch={handleSearch} />
          </div>
          <div className="pr-7 ">
            <FilterButton onClick={() => setFilterDialogOpen(true)} />
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          {loading && ( 
            <div className="flex flex-col gap-y-4 p-4">
              <Skeleton.Button block={true} active={true} />
              <Skeleton.Button block={true} active={true} />
              <Skeleton.Button block={true} active={true} />
              <Skeleton.Button block={true} active={true} />
            </div>
          )}
          {!loading && ( 
            <Table
              headerData={header}
              data={tableData}
            />
          )}
        </div>
        
        <div className="pb-4">
          <Pagination
            currPage={currentPage}
            onNext={handleNextPage}
            onPrev={handlePrevPage}
          />
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
