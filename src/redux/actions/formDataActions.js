function changeCategory(state, action) {
  state.categoryValue = action.payload;
}
function changeDifficulty(state, action) {
  state.difficultyValue = action.payload;
}

function changeNumberOfQuestions(state, action) {
  state.numberOfQuestions = action.payload;
}

export { changeCategory, changeDifficulty, changeNumberOfQuestions };
