import { createSlice } from "@reduxjs/toolkit";
import checkType from "../../utility/checkType";
import { fetchQuizData } from "../actions/fetchQuizDataAction";

const initialState = {
  quizData: [],
  isLoading: false,
  error: null,
};

const fetchQuizDataSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    toggleChoice: (state, action) => {
      const { id, answerId } = action.payload;
      const question = state.quizData[id];
      question.answers.forEach(answer => {
        answer.isPressed = false;
      });
      question.answers[answerId].isPressed = true;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchQuizData.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchQuizData.fulfilled, (state, action) => {
        state.quizData = action.payload.results.map((item, index) => {
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
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchQuizData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchQuizDataSlice.reducer;
export const { toggleChoice } = fetchQuizDataSlice.actions;
