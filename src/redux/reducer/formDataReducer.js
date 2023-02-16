import { createSlice } from "@reduxjs/toolkit";
import { changeCategory, changeDifficulty, changeNumberOfQuestions } from "../actions/formDataActions";

const initialState = {
  difficultyValue: "",
  categoryValue: "",
  numberOfQuestions: 5,
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    category: (state, action) => {
      changeCategory(state, action);
    },
    difficulty: (state, action) => {
      changeDifficulty(state, action);
    },
    number: (state, action) => {
      changeNumberOfQuestions(state, action);
    },
  },
});

export default formDataSlice.reducer;
export const { category, difficulty, number } = formDataSlice.actions;
