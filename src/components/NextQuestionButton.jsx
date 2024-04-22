import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentQuestionIndex } from "../redux/quizSlice";
import { useNavigate } from "react-router-dom";

function NextQuestionButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.quiz.questions);

  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
    } else {
      // Redirect to results page
      navigate("/result");
    }
  };

  return (
    <button onClick={goToPreviousQuestion} className="btn btn-accent">
      {currentQuestionIndex + 1 < questions.length ? "Next" : "Result" }
    </button>
  );
}

export default NextQuestionButton;
