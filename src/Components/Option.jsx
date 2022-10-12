import React from "react";

const Option = ({ answerIdentify, option }) => {
  return (
    <div className=" border-2 border-gray-500 bg-gray-300 py-5 rounded">
      <button
        className="w-full py-3 text-xl font-bold "
        onClick={(e) => answerIdentify(e.target.innerText)}
      >
        {option}
      </button>
    </div>
  );
};

export default Option;
