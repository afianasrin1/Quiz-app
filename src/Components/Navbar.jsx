import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-slate-300 flex justify-between mx-auto py-10 px-20 ">
      <div className="navbar-start  ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Online Survey
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex space-x-10 ">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/statisticsPage">StatisticsPage</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
