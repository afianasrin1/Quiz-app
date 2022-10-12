import React, { useState } from "react";
import { toast } from "react-toastify";
import Option from "./Option";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Questions = ({ quizQuestion, I }) => {
  const [open, setOpen] = useState(false);
  const { question, options, correctAnswer } = quizQuestion;
  const answer = correctAnswer.replaceAll(" ", "");
  const answerIdentify = (innerText) => {
    const text = innerText.replaceAll(" ", "");
    if (text === answer) {
      toast.success("your answer is correct.");
    } else {
      toast.warning("your answer is wrong!");
    }
  };
  const questionRemovePTag = question
    .replaceAll("<p>", " ")
    .replaceAll("</p>", " ");
  return (
    <div className=" relative md:w-9/12 mx-auto p-6 rounded bg-slate-100  mb-20">
      <p className="">{correctAnswer}</p>
      <div className="flex justify-between">
        <div className="flex justify-between w-full">
          <p className="text-lg font-semibold">Quiz no {I} </p>
          <p className="text-3xl w-full font-semibold pb-8">
            {questionRemovePTag}
          </p>
        </div>
        <div onClick={() => setOpen(!open)} className="w-7 h-7">
          {open ? <EyeIcon /> : <EyeSlashIcon />}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {options.map((option) => (
          <Option
            key={option}
            option={option}
            answerIdentify={answerIdentify}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Questions;
