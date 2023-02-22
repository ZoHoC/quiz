import { useDispatch } from "react-redux";
import { toggleChoice } from "../../redux/reducer/fetchQuizDataReducer";
import "./Question.scss";

export function Question({ id, question, answers, showResults }) {
  const dispatch = useDispatch();

  // Gets id of clicked anwser and stops updating state after checking anwsers
  function toggle(answerId) {
    !showResults && dispatch(toggleChoice({ id, answerId }));
  }
  const answerHTML = answers.map((answer, index) => (
    <li
      key={index}
      className={`card__answer ${answer.isPressed ? "card__answer_pressed" : ""} ${answer.isCorrect && showResults ? "card__answer_correct" : ""} ${
        answer.isCorrect === false && showResults && answer.isPressed ? "card__answer_false" : ""
      }`
        .replace(/\s+/g, " ")
        .trim()}
      onClick={() => toggle(answer.id)}
    >
      {answer.text}
    </li>
  ));

  return (
    <div className="card">
      <h2 className="card__title">{question}</h2>
      <ul className="card__list">{answerHTML}</ul>
    </div>
  );
}
