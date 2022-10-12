import React from "react";
import online from "../images/online.png";
const Header = () => {
  return (
    <div className=" bg-pink-50 py-10">
      <div className="flex items-center flex-col ">
        <img className="w-1/4" src={online} alt="" />

        <p className="mt-6 pb-2 text-2xl sm:mb-5 xl:max-w-7xl text-gray-900 ">
          Web development is the building and maintenance of websites; it's the
          work that happens behind the scenes to make a website look great, work
          fast and perform well with a seamless user experience. Web developers,
          or 'devs', do this by using a variety of coding languages.
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
