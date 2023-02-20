import { createSlice } from "@reduxjs/toolkit";
import { fetchQuizData } from "../actions/fetchQuizDataAction";

const initialState = {
  quizData: [],
  isLoading: false,
  isMenu: true,
  error: null,
};

const fetchQuizDataSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    back: state => {
      state.isMenu = true;
    },
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
        state.isMenu = false;
        state.error = null;
      })
      .addCase(fetchQuizData.fulfilled, (state, action) => {
        state.quizData = action.payload;
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
export const { back, toggleChoice } = fetchQuizDataSlice.actions;
