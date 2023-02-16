import { createAsyncThunk } from "@reduxjs/toolkit";
import checkType from "../../utility/checkType";

export const fetchQuizData = createAsyncThunk("quiz/fetchQuizData", async args => {
  const { difficultyValue, categoryValue, numberOfQuestions } = args;

  const difficulty = difficultyValue === "" ? "" : `&difficulty=${difficultyValue}`;
  const category = categoryValue === "" ? "" : `&category=${categoryValue}`;

  const response = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}${category}${difficulty}&encode=url3986`);
  const data = await response.json();
  return data.results.map((item, index) => {
    const { category, type, difficulty, question, correct_answer, incorrect_answers } = item;
    return {
      category: decodeURIComponent(category),
      type: decodeURIComponent(type),
      difficulty: decodeURIComponent(difficulty),
      question: decodeURIComponent(question),
      answers: checkType(type, correct_answer, incorrect_answers),
      correct_answer: decodeURIComponent(correct_answer),
      id: index,
    };
  });
});
