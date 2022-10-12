import React, { useContext } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { QuizContext } from "./Root";

const Statistics = () => {
  const statistics = useContext(QuizContext);

  return (
    <div className=" bg-slate-50 py-10">
      <div className="flex items-center flex-col ">
        <h1 className="mt-6 pb-20 text-2xl sm:mb-5 xl:max-w-7xl text-gray-900 ">
          line chart are shown in this page
        </h1>
        <LineChart width={800} height={300} data={statistics}>
          <Line type="monotone" dataKey="total" stroke="#d68a0f" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
      <Line />
    </div>
  );
};

export default Statistics;
