import { createSlice } from "@reduxjs/toolkit";

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
      state.categoryValue = action.payload;
    },
    difficulty: (state, action) => {
      state.difficultyValue = action.payload;
    },
    number: (state, action) => {
      state.numberOfQuestions = action.payload;
    },
  },
});

export default formDataSlice.reducer;
export const { category, difficulty, number } = formDataSlice.actions;
