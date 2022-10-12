import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  // console.log(quiz);np
  const { id, name, logo, total } = quiz;

  return (
    <div className="card bg-pink-50 shadow-xl rounded">
      <figure className="px-10 pt-10 bg-pink-100 ">
        <img src={logo} alt="Shoes" className="rounded-xl " />
      </figure>
      <div className="card-body items-center text-center bg-slate-200">
        <h2 className="card-title text-2xl font-bold pt-2 pb-3">{name}</h2>
        <h2 className="font-semibold  pb-3">quiz:{total}</h2>
        <div className="card-actions">
          <Link to={`/quiz/${id}`}>
            <button className="btn btn-accent w-full bg-pink-400 rounded py-5 px-3 font-bold text-xl hover:bg-pink-500 hover:text-white transition-all">
              quiz survey
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
