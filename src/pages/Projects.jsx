import React, { useState, useRef } from "react";
import Button from "../components/atoms/Button";
import FilterButton from "../components/atoms/Button/FilterButton";
import Table from "../components/atoms/Table";
import FilterDialogBox from "../components/molecules/FilterDialogBox";
import SearchBox from "../components/atoms/SearchBox";
import Pagination from "../components/atoms/Pagination";
import useAllProjects from "../hooks/useAllProjects";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";

const ActionButtons = ({ projectId }) => (
  <div className="flex items-center justify-center gap-x-3 relative">
    <>
      <Link to={`/project/${projectId}`}>
        <Button
          color={"blue"}
          varient={"primary"}
          className={
            "text-white w-[4.5rem] text-[0.5625rem] h-[1.875rem] font-bold"
          }
        >
          View
        </Button>
      </Link>
      <Link to={`/project/${projectId}`}>
        <Button
          varient={"primary"}
          className={
            "w-[4.5rem] text-[0.5625rem] h-[1.875rem] font-bold  flex-shrink-0 rounded text-blue-800  bg-blue-300 bg-opacity-25"
          }
        >
          Action
        </Button>
      </Link>
    </>
  </div>
);

const header = [
  "Project Name",
  "ID",
  "Type",
  "Project Status",
  "Registry",
  "Action",
];

const Projects = () => {
  const searchRef = useRef();
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);

  const [loading, error, projects] = useAllProjects();

  const projectsWithAction = projects.map((item) => [
    ...item,
    <ActionButtons projectId={item[1]} />,
  ]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  return (
    <div className="flex h-full flex-col p-6 pl-3 w-full bg-gray-100">
      {error ? (
        <div className="h-full w-full flex justify-center items-center">
          {" "}
          {error}
        </div>
      ) : (
        <>
          <h1 className="ml-6 text-3xl font-bold"> Projects</h1>

          <div className="w-full mt-8 h-[calc(90vh-2.4rem)] bg-white rounded-xl shadow-lg flex flex-col">
            <div className="flex justify-between pt-5 pb-12">
              <div className="pl-8">
                <SearchBox ref={searchRef} onSearch={handleSearch} />
              </div>
              <div className="pr-7 ">
                <FilterButton onClick={() => setFilterDialogOpen(true)} />
              </div>
            </div>
            <div className="flex-grow overflow-y-auto">
              <Table
                headerData={header}
                data={loading ? [] : projectsWithAction}
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
              <Pagination currPage={1} onNext={() => {}} onPrev={() => {}} />
            </div>
          </div>
          {isFilterDialogOpen && (
            <FilterDialogBox
              open={isFilterDialogOpen}
              onCancel={() => setFilterDialogOpen(false)}
              onOk={() => setFilterDialogOpen(false)}
              page="Projects"
            />
          )}
        </>
      )}
    </div>
  );
};

export default Projects;
