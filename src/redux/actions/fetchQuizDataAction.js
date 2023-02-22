import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuizData = createAsyncThunk("quiz/fetchQuizData", async args => {
  const { difficultyValue, categoryValue, numberOfQuestions } = args;

  const difficulty = difficultyValue === "" ? "" : `&difficulty=${difficultyValue}`;
  const category = categoryValue === "" ? "" : `&category=${categoryValue}`;

  const response = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}${category}${difficulty}&encode=url3986`);
  const data = await response.json();
  return data;
});
