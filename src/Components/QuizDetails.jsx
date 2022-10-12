import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

const QuizDetails = () => {
  const quiz = useLoaderData().data;
  const { name, questions, total } = quiz;

  return (
    <div className="text-center">
      <div className="pb-10">
        <h1 className="text-4xl pt-8 pb-2 font-bold"> Quiz of {name}</h1>
        <p className="text-xl font-semibold"> total quiz {total}</p>
      </div>

      <div>
        {questions.map((question, i) => (
          <Questions
            key={question.id}
            quizQuestion={question}
            I={i + 1}
          ></Questions>
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
