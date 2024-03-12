import React from "react";
import HomeChart from "../components/molecules/HomeChart";
import HomeTokenCard from "../components/molecules/HomeTokenCard";
import Sidewall from "../components/molecules/Sidewall";
import ProjectStats from "../components/atoms/ProjectStats";

const data1 = [
  { year: 2016, value: 9 },
  { year: 2017, value: 10 },
  { year: 2018, value: 21 },
  { year: 2019, value: 51 },
  { year: 2020, value: 9 },
  { year: 2021, value: 15 },
  { year: 2022, value: 54 },
  { year: 2023, value: 100 },
];

const data2 = [
  { year: 2016, value: 0.9 },
  { year: 2017, value: 1 },
  { year: 2018, value: 2.1 },
  { year: 2019, value: 5.1 },
  { year: 2020, value: 0.9 },
  { year: 2021, value: 1.5 },
  { year: 2022, value: 5.4 },
  { year: 2023, value: 10 },
];

const Home = () => {
  return (
    <div className="flex gap-x-4 px-4 pt-4 w-full">
      <div className="w-[55%]">
        <div className="flex gap-x-4 mb-4">
          <HomeTokenCard tokenName={"gold"} value={16000} delta={"+12%"} />
          <HomeTokenCard tokenName={"silver"} value={16000} delta={"+12%"} />
          <HomeTokenCard tokenName={"bronze"} value={16000} delta={"-8%"} />
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <HomeChart data={data1} title={"Carbon Credits Sold (Revenue)"} />
          <HomeChart data={data2} title={"Carbon Credits Sold (Volume)"} />
        </div>
      </div>
      <div className="w-[30%]">
        <ProjectStats />
      </div>
      <div className="w-[15%]">
        <Sidewall />
      </div>
    </div>
  );
};

export default Home;
