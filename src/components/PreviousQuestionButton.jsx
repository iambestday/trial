import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentQuestionIndex } from "../redux/quizSlice";

const PreviousQuestionButton = () => {
  const dispatch = useDispatch();
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex - 1));
    }
  };

  if (currentQuestionIndex >= 1) {
    return (
      <button
        className="btn btn-primary ml-2"
        onClick={goToPreviousQuestion}
      >
        Previous
      </button>
    );
  }
};

export default PreviousQuestionButton;
