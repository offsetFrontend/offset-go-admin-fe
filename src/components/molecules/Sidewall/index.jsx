import React from "react";
import Container from "./Container";

const Sidewall = () => {
  return <div className="flex flex-col gap-y-8 w-full">
    <Container name={'Sellers'} value={1000} delta={'+12%'}/>
    <Container name={'Buyers'} value={800} delta={'+18%'}/>
    <Container name={'Traders'} value={1200} delta={'-2%'}/>
  </div>;
};

export default Sidewall;
