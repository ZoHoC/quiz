import "./Menu.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizData } from "../../redux/actions/fetchQuizDataAction";
import { category, difficulty, number } from "../../redux/reducer/formDataReducer";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import PopupError from "../../components/PopupError/PopupError";
import categoryOptions from "../../utility/categoryOptions";
import difficultyOptions from "../../utility/difficultyOptions";

export default function Menu() {
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { difficultyValue, categoryValue, numberOfQuestions } = useSelector(state => state.formData);

  function handleStartQuiz() {
    if (numberOfQuestions < 1 || numberOfQuestions > 20) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
    } else {
      dispatch(fetchQuizData({ difficultyValue, categoryValue, numberOfQuestions }));
      navigate("/questions");
    }
  }

  // This could be a compontent by itself
  function Select({ name, options, value, onChange }) {
    return (
      <select className="menu__select" name={name} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <section className="menu">
      <h1 className="menu__title">Quizzical</h1>
      <p className="menu__subtitle">Find out how much you know!</p>
      <Button handleClick={handleStartQuiz} isPrimary={true}>
        Start quiz
      </Button>
      <form className="menu__form">
        <label htmlFor="category" className="menu__label">
          Choose quiz category:
        </label>
        <Select
          name="category"
          options={categoryOptions}
          value={categoryValue}
          onChange={event => {
            dispatch(category(event.target.value));
          }}
        />
        <label htmlFor="difficulty" className="menu__label">
          Choose quiz difficulty:
        </label>
        <Select
          name="difficulty"
          options={difficultyOptions}
          value={difficultyValue}
          onChange={event => {
            dispatch(difficulty(event.target.value));
          }}
        />
        <label htmlFor="numberOfQuestions" className="menu__label">
          Choose number of questions:
        </label>
        <input
          className="menu__input"
          name="numberOfQuestions"
          type="number"
          min="1"
          max="20"
          placeholder={numberOfQuestions}
          onChange={event => {
            dispatch(number(event.target.value));
          }}
        />
      </form>
      {showPopup && <PopupError />}
    </section>
  );
}
