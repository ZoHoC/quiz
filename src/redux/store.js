import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchQuizDataReducer from "./reducer/fetchQuizDataReducer";
import formDataReducer from "./reducer/formDataReducer";

const rootReducer = combineReducers({
  formData: formDataReducer,
  quiz: fetchQuizDataReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
