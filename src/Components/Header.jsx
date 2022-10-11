import React from "react";
import header from "../images/header.jpg";
const Header = () => {
  return (
    <div className="header bg-slate-200 shadow-lg pt-10 h-40">
      <div className="flex flex-col items-center px-4 py-16 pb-20 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
        <div className="w-20 mx-auto mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500">
          <img src={header} alt="" />
        </div>
        <p className="mt-6 pb-2 text-2xl sm:mb-5 xl:max-w-7xl text-gray-900 ">
          Online survey or internet survey, is one of the most popular
          data-collection sources, where a set of survey questions is sent out
          to a target sample and the members of this sample can respond to the
          questions over the world wide web.
        </p>
      </div>

      {/* <h1 className="text-2xl text-center font-normal mt-4 pb-5">
        What is an Online Survey? Online survey or internet survey, is one of
        the most popular data-collection sources, where a set of survey
        questions is sent out to a target sample and the members of this sample
        can respond to the questions over the world wide web.
      </h1> */}
    </div>
  );
};

export default Header;
