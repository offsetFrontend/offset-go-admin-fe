import React from "react";
import Container from "./Container";
import { ReactComponent as Arrow } from "../../../assets/svgs/arrow.svg";
import { Link } from "react-router-dom";

const data = [
  {
    projectName: "Wind projects",
    categoryType: "Renewable energy",
    percent: 50,
    value: 6500,
  },
  {
    projectName: "Forest projects",
    categoryType: "Forestry and carbon farming",
    percent: 12,
    value: 6500,
  },
  {
    projectName: "Plastic waste projects",
    categoryType: "Waste Management",
    percent: 3,
    value: 6500,
  },
  {
    projectName: "Water saving",
    categoryType: "Water management",
    percent: 2,
    value: 6500,
  },
  {
    projectName: "Wind projects",
    categoryType: "Renewable energy",
    percent: 1,
    value: 6500,
  },
  {
    projectName: "Forest projects",
    categoryType: "Forestry and carbon farming",
    percent: 1,
    value: 6500,
  },
  {
    projectName: "Plastic waste projects",
    categoryType: "Waste Management",
    percent: 1,
    value: 6500,
  },
  {
    projectName: "Water saving",
    categoryType: "Water management",
    percent: 1,
    value: 6500,
  },
  {
    projectName: "Plastic projects",
    categoryType: "Water management",
    percent: 1,
    value: 6500,
  },
];

const ProjectStats = () => {
  return (
    <div className="pt-6 pb-3 bg-white rounded-xl">
      <h2 className="font-bold text-xl px-6">Credit By Category</h2>
      {data.map((element, index) => (
        <Container data={element} key={`project_${index}`} index={index} />
      ))}
      <Link className="inline-block">
        <div className="px-6 flex gap-x-1 text-blue-800 text-base">
          All Credits
          <Arrow className="w-4 rotate-90" />
        </div>
      </Link>
    </div>
  );
};

export default ProjectStats;
