import React from "react";
import { Link } from "react-router-dom";
import online from "../images/online.png";

const Footer = () => {
  return (
    <footer className="px-4 bg-red-50 text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link to="/" className="flex justify-center lg:justify-start">
            <img className="w-10" src={online} alt="" />
            <span className="self-center text-2xl font-semibold">
              Online Quiz
            </span>
          </Link>
        </div>
        <p className="py-6  text-xl text-center text-gray-600">
          © 2022 Smart Home Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
