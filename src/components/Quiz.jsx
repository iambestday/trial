import styles from "./Quiz.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../api";
import {
  setQuestions,
  setCurrentQuestionIndex,
  setAnswer,
} from "../redux/quizSlice";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import PreviousQuestionButton from "./PreviousQuestionButton";
import NextQuestionButton from "./NextQuestionButton";

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const questions = useSelector((state) => state.quiz.questions);
  const currentQuestionIndex = useSelector(
    (state) => state.quiz.currentQuestionIndex
  );

  useEffect(() => {
    const fetchQuestionsData = async () => {
      try {
        const data = await fetchQuestions();
        dispatch(setQuestions(data));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };

    fetchQuestionsData();
  }, [dispatch]);

  const handleSelectAnswer = (answer) => {
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };

  if (loading) {
    return (
      <div className={styles.spinner}>
        <span></span>
      </div>
    );
  }

  if (!questions[currentQuestionIndex]) {
    return <div>No question available.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const options = [...currentQuestion.incorrect_answers];
  options.push(currentQuestion.correct_answer);
  options.sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col items-center justify-center h-full mt-96">
      <p>
        Question {currentQuestionIndex + 1}/{questions.length}{" "}
      </p>
      <div className="w-fit mx-auto max-w-screen-md">
        <div className="flex flex-col w-full border-opacity-50">
          <Question
            number={currentQuestionIndex + 1}
            question={currentQuestion.question}
            options={options}
            onSelect={handleSelectAnswer}
          />
        </div>
      </div>
      <div className="flex flex-row space-x-4">
        <PreviousQuestionButton />
        <NextQuestionButton />
      </div>
    </div>
  );
};
export default Quiz;
