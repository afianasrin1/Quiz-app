import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";

import Navbar from "./Navbar";

export const QuizContext = createContext([]);
const Root = () => {
  const QuizAll = useLoaderData().data;
  // console.log(QuizAll);
  return (
    <QuizContext.Provider value={QuizAll}>
      <Navbar />
      <Outlet />
      <Footer />
    </QuizContext.Provider>
  );
};

export default Root;
