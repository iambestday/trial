import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const answers = useSelector((state) => state.quiz.answers);

  const correctAnswers = questions.filter((question, index) => {
    return question.correct_answer === answers[index];
  }).length;

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Results:</h1>
          <p className="pt-4">Correct Answers: {correctAnswers}</p>
          <p className="pt-2">Total Questions: {questions.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
