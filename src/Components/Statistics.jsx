import React, { useContext } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { QuizContext } from "./Root";

const Statistics = () => {
  const statistics = useContext(QuizContext);

  return (
    <div>
      <LineChart width={800} height={300} data={statistics}>
        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;
