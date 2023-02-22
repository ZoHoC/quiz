import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Loading from "../../components/Loading/Loading";
import { Question } from "../../components/Question/Question";
import { fetchQuizData } from "../../redux/actions/fetchQuizDataAction";
import "./Questions.scss";

export default function Questions() {
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quizData = useSelector(state => state.quiz.quizData);
  const { difficultyValue, categoryValue, numberOfQuestions } = useSelector(state => state.formData);
  const { isLoading } = useSelector(state => state.quiz);

  function checkAnswers() {
    if (!showResults) {
      setShowResults(true);
    } else {
      setShowResults(false);
      dispatch(fetchQuizData({ difficultyValue, categoryValue, numberOfQuestions }));
    }
  }

  function correctNumberOfQuestions() {
    const correctQuestion = quizData.filter(question => question.answers.some(answer => answer.isPressed && answer.isCorrect));
    return correctQuestion.length;
  }

  const questionHTML = quizData.map((data, index) => <Question key={index} id={data.id} question={data.question} answers={data.answers} showResults={showResults} />);

  return isLoading ? (
    <Loading />
  ) : (
    <section className="questions">
      <h1 className="questions__title">Quiz</h1>
      {questionHTML}
      {showResults && (
        <div className="questions__results">
          You got {correctNumberOfQuestions()} out of {quizData.length} correct!
        </div>
      )}
      <div className="questions__container">
        <Button handleClick={checkAnswers} isPrimary={true}>
          {!showResults ? "Check anwsers" : "Play again"}
        </Button>
        <Button handleClick={() => navigate("/quiz")} isSecondary={true}>
          Menu
        </Button>
      </div>
    </section>
  );
}
