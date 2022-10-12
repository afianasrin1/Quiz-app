import React, { useContext } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { QuizContext } from "./Root";

const Statistics = () => {
  const statistics = useContext(QuizContext);

  return (
    <div className="bg-white mx-20 my-20 ">
      <LineChart width={800} height={300} data={statistics}>
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;
