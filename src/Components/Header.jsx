import React from "react";
import header from "../images/header.jpg";
const Header = () => {
  return (
    <div className=" bg-pink-50 py-10">
      <div className="flex items-center flex-col ">
        <img className="w-1/4" src={header} alt="" />

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
