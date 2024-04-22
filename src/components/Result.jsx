import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const questions = useSelector((state) => state.quiz.questions);
  const answers = useSelector((state) => state.quiz.answers);

  const correctAnswers = questions.filter((question, index) => {
    return question.correct_answer === answers[index];
  }).length;

  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold mb-6 text-center">Results:</h1>
          <div className="flex flex-col">
            {questions.map((question, index) => (
              <div >
              <p className="text-nowrap my-2">
              {index+1} - 
                {question.question}
              </p>
              <div className="flex flex-row">
              <div className="mr-3 ">Answer :</div>
              <div className={answers[index] !== question.correct_answer ? 'text-red-900' : 'text-green-900' }> {answers[index]} </div>

          <div className={answers[index] !== question.correct_answer ? 'visible ' : 'invisible' }>
              <div className="ml-3 flex flex-row">Correct  : <p className="text-green-900 ml-2"> {question.correct_answer} </p></div>
              </div>
              </div>
           </div>
            ))}
          </div>

          <p className="font-semibold text-red-800 pt-4 mb-6 text-center">
            Correct Answers: {correctAnswers} from {questions.length}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
