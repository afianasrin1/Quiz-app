import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
const Root = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
