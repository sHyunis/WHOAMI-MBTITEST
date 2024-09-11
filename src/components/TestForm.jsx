import React, { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-[330px] space-y-4 p-4  mx-auto text-left"
    >
      {questions.map((q, index) => (
        <div key={q.id} className="mb-4 border border-navy p-4 rounded">
          <p className="text-0.7rem">
            {q.id}. {q.question}
          </p>
          {q.options.map((option, i) => (
            <label key={i} className="block ">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleChange(index, option)}
                className="mr-2 w-2 h-2 accent-navy"
              />
              <span className="text-xs">{option}</span>
            </label>
          ))}
        </div>
      ))}
      <button
        type="submit"
        className="rounded w-full bg-navy text-white hover:bg-hoverNavy"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
