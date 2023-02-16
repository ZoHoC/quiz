import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { Question } from "../../components/Question/Question";
import { fetchQuizData } from "../../redux/actions/fetchQuizDataAction";
import { back, toggleChoice } from "../../redux/reducer/fetchQuizDataReducer";
import "./Questions.scss";

export default function Questions() {
  const [showResults, setShowResults] = useState(false);

  const dispatch = useDispatch();
  const quizData = useSelector(state => state.quiz.quizData);
  const { difficultyValue, categoryValue, numberOfQuestions } = useSelector(state => state.formData);

  function checkAnswers() {
    if (!showResults) {
      setShowResults(true);
    } else {
      dispatch(fetchQuizData({ difficultyValue, categoryValue, numberOfQuestions }));
    }
  }

  function correctNumberOfQuestions() {
    const correctQuestion = quizData.filter(question => {
      return question.answers.some(answer => answer.isPressed && answer.isCorrect);
    });
    return correctQuestion.length;
  }

  function handleToggle(questionId, answerId) {
    dispatch(toggleChoice({ questionId, answerId }));
  }

  const questionHTML = quizData.map((data, index) => {
    return <Question key={index} {...data} handleToggle={handleToggle} showResults={showResults} />;
  });

  return (
    <section className="questions">
      <h1 className="questions__title">Quiz category</h1>
      {questionHTML}
      {showResults && (
        <div className="questions__results">
          You got {correctNumberOfQuestions()} out of {quizData.length} correct!
        </div>
      )}
      <div className="questions__container">
        <Button handleClick={checkAnswers} isPrimary={true}>
          {showResults ? "Play again" : "Check anwsers"}
        </Button>
        <Button handleClick={() => dispatch(back())} isSecondary={true}>
          Menu
        </Button>
      </div>
    </section>
  );
}
