import "./Question.scss";

export function Question({ id, question, answers, handleToggle, showResults }) {
  // Gets id of clicked anwser and stops updating state after checking anwsers
  function toggle(anwserId) {
    if (!showResults) {
      handleToggle(id, anwserId);
    }
  }

  const answerHTML = answers.map((answer, index) => {
    return (
      <li
        key={index}
        className={`card__answer 
                  ${answer.isPressed ? "card__answer_pressed" : ""} 
                  ${answer.isCorrect && showResults ? "card__answer_correct" : ""} 
                  ${answer.isCorrect === false && showResults && answer.isPressed ? "card__answer_false" : ""}`
          .replace(/\s+/g, " ")
          .trim()}
        onClick={() => toggle(answer.id)}
      >
        {answer.text}
      </li>
    );
  });

  return (
    <div className="card">
      <h2 className="card__title">{question}</h2>
      <ul className="card__list">{answerHTML}</ul>
    </div>
  );
}
