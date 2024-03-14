import React, { useRef,useState } from "react";
import Table from "../components/atoms/Table";
import SearchBox from "../components/atoms/SearchBox";
import Button from "../components/atoms/Button";
import Pagination from "../components/atoms/Pagination";
import { ReactComponent as Filter } from "../assets/svgs/filter.svg";
import FilterDialogBox from "../components/molecules/FilterDialogBox";

const Subscription = () => {
  const searchRef = useRef();
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const header = ["Date", "Mail"];
  const tableData = () => {
  const data = [
    ["12-02-2023", "Lorem@gmail.com"],
    ["12-02-2023", "Lorem@gmail.com"],
  ];
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return data.slice(startIndex, endIndex);
};
  const handleSearch = () => {
    console.log(searchRef.current.value);
  };
  const handleFilterButtonClick = () => {
    setFilterDialogOpen(true);
  };

  const handleFilterDialogClose = () => {
    setFilterDialogOpen(false);
  };

  const handleNextPage = () => {
    const totalItems = tableData().length;
    if (totalItems === itemsPerPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <div className=" h-full w-full p-6">
      <div className="text-[1.75rem] font-bold mb-4">Subscription</div>
      <div className="w-full relative mt-8 h-[calc(90vh-2.8rem)] bg-white rounded-3xl shadow-formShadow">
        <div className="flex justify-between pt-5 pb-12">
          <div className="flex justify-between  px-5">
            <SearchBox ref={searchRef} onSearch={handleSearch} />
          </div>
          <div className="pr-7 ">
            <Button
              className="flex justify-center items-center gap-x-2 px-2  py-1 h-fit"
              borderColor={"gray"}
              varient={"secondary"}
              onClick={handleFilterButtonClick}
            >
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
          </div>
          <Table headerData={header}  data={tableData()} bottomLine={false} />
          <div className="absolute bottom-4 left-8 right-0 ">
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
          onCancel={handleFilterDialogClose}
          onOk={handleFilterDialogClose}
          page="Subscription"
        />
      )}
    </div>
  );
};

export default Subscription;
