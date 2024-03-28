import React, { useEffect, useRef } from "react";
import Button from "../components/atoms/Button";
import FilterButton from "../components/atoms/Button/FilterButton";
import Table from "../components/atoms/Table";
import SearchBox from "../components/atoms/SearchBox";
import useMarketplaceUsers from "../hooks/useMarketplaceUsers";
import { Skeleton } from "antd";
import Pagination from "../components/atoms/Pagination";
import { useSearchParams } from "react-router-dom";

const ActionButtons = () => (
  <div className="flex items-center justify-center gap-x-3">
    <Button
      color={"blue"}
      varient={"primary"}
      className={
        "text-white w-[4.5rem] text-[0.5625rem] h-[1.875rem] font-bold"
      }
    >
      View
    </Button>
    <Button
      varient={"primary"}
      className={
        "w-[4.5rem] text-[0.5625rem] h-[1.875rem] font-bold rounded text-blue-800  bg-blue-300"
      }
    >
      Action
    </Button>
  </div>
);

const header = ["UserName", "User ID", "User Type", "Status", "Action"];

const MarketPlace = () => {
  const searchRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const [loading, error, users, totalPages] = useMarketplaceUsers(page);


  const usersWithAction = users.map((item) => [
    ...item,
    <ActionButtons projectId={item[1]} />,
  ]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  useEffect(()=>{

  },[page])

  return (
    <div className="flex h-full flex-col p-6 pl-3 w-full bg-gray-100">
      {error ? (
        <div className="h-full w-full flex justify-center items-center">
          {" "}
          {error}
        </div>
      ) : (
        <>
          <h1 className="ml-6 text-3xl font-bold"> Marketplace Users</h1>

          <div className="w-full mt-8 h-[calc(90vh-2.4rem)] bg-white rounded-xl shadow-lg flex flex-col">
            <div className="flex justify-between pt-5 pb-12">
              <div className="pl-8">
                <SearchBox ref={searchRef} onSearch={handleSearch} />
              </div>
              <div className="pr-7 ">
                <FilterButton />
              </div>
            </div>
            <div className="flex-grow overflow-y-auto">
              <Table
                headerData={header}
                data={loading ? [] : usersWithAction}
              />
              {loading && (
                <div className="flex flex-col gap-y-4 p-4">
                  <Skeleton.Button block={true} active={true} />
                  <Skeleton.Button block={true} active={true} />
                  <Skeleton.Button block={true} active={true} />
                  <Skeleton.Button block={true} active={true} />
                </div>
              )}
            </div>
            <div className="pb-4">
              <Pagination
                currPage={page}
                onPrev={() => {
                  if (page <= 1) return;
                  setSearchParams({ page: page - 1 });
                }}
                onNext={() => {
                  if (totalPages <= page) return;
                  setSearchParams({ page: page + 1 });
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MarketPlace;
