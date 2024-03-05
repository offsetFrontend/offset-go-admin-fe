import React from "react";
import CustomTooltip from "./CustomTooltip";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  CartesianAxis,
  ResponsiveContainer,
} from "recharts";

const AreaGraph = ({ data }) => {
  return (
    <ResponsiveContainer height={220}>
      <AreaChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="greenColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#25CD25" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#25CD25" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid opacity={0.5} />
        <CartesianAxis />
        <XAxis
          tickMargin={20}
          tickSize={0}
          axisLine={false}
          dataKey="year"
          style={{ fill: "black", fontSize: "0.625rem", fontWeight: 300 }}
        />
        <YAxis
          tickMargin={10}
          axisLine={false}
          tickSize={10}
          strokeOpacity={0.25}
          tickCount={6}
          unit={"k"}
          width={40}
          style={{ fill: "black", fontSize: "0.625rem", fontWeight: 300 }}
        />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Area
          cursor={{ strokeWidth: 10 }}
          dataKey="value"
          stroke="#25CD25"
          strokeWidth={2}
          fill="url(#greenColor)"
          strokeDasharray={[5, 5]}
          activeDot={{ r: 5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaGraph;
