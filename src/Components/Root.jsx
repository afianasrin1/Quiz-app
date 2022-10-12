import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import Navbar from "./Navbar";

export const QuizContext = createContext([]);
const Root = () => {
  const QuizAll = useLoaderData().data;
  // console.log(QuizAll);
  return (
    <QuizContext.Provider value={QuizAll}>
      <Navbar />
      <Outlet />
    </QuizContext.Provider>
  );
};

export default Root;
