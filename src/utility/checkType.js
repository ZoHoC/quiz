import randomizeAnswers from "./randomizeAnwsers";

function createMultipleAnswerObject(correct, incorrect) {
  const randomArray = randomizeAnswers([correct, ...incorrect]);
  const answerObject = randomArray.map((answer, index) => ({
    text: decodeURIComponent(answer),
    isPressed: false,
    isCorrect: answer === correct,
    id: index,
  }));
  return answerObject;
}
// if the type is True/false we want to return first True then False so when we render anwsers it is always True first and False second
function createTrueFalseAnswerObject(correct) {
  return [
    {
      text: "True",
      isPressed: false,
      isCorrect: "True" === correct,
      id: 0,
    },
    {
      text: "False",
      isPressed: false,
      isCorrect: "False" === correct,
      id: 1,
    },
  ];
}

// if the type is Multiple it creates an array with shuffles anwsers.
export default function checkType(type, correct, incorrect) {
  if (type === "multiple") {
    return createMultipleAnswerObject(correct, incorrect);
  } else {
    return createTrueFalseAnswerObject(correct);
  }
}
