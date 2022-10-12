import React, { useContext } from "react";
import { QuizContext } from "./Root";
import Quiz from "./Quiz";
const Home = () => {
  const QuizAll = useContext(QuizContext);
  // console.log(QuizAll);
  return (
    <div className="md:px-20">
      <h1 className="text-4xl text-center font-bold mt-4 pb-5">
        Selected your Quiz
      </h1>
      <div className="grid gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 pr-10 ">
        {QuizAll.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
