import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentQuestionIndex } from "../redux/quizSlice";

const PreviousQuestionButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex - 1));
      navigate("/"); // Redirect to see the previous question
    }
  };

  return <button className=" btn btn-primary w-fit fixed bottom-5" onClick={goToPreviousQuestion}>Previous</button>;
};

export default PreviousQuestionButton;
