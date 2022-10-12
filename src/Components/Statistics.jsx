import React, { useContext } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { QuizContext } from "./Root";

const Statistics = () => {
  const statistics = useContext(QuizContext);

  return (
    <div className="bg-orange-50 mx-96 my-20 ">
      <LineChart width={800} height={300} data={statistics}>
        <Line type="monotone" dataKey="total" stroke="blue" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;
