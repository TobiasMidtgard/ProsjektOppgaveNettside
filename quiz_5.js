const questions5 = [
  [
    {
      question5: "Hvilket av følgende er et sterkt/godt password?",
      answers5: [
        { text: "passord1", correct: false },
        { text: "987654321", correct: false },
        { text: "Theodor1988", correct: false },
        { text: "!HMsQ4VaGnJ-kK", correct: true },
      ],
    },
    {
      question5: "Hva betyr tofaktorautentisering?",
      answers5: [
        { text: "Det betyr at man benytter to faktorer (bevis) for å bekrefte identitet ved pålogging.", correct: true },
        { text: "Det er ei nettside som hjelper deg med å generere et sterkt passord.", correct: false },
        { text: "Det er et program som hjelper deg å finne phishing e-poster.", correct: false },
        { text: "Dette er et tilleggsspørsmål som stilles når du logger på kontoen din.", correct: false },
      ],
    },
    {
      question5: "Question",
      answers5: [
        { text: "Answer 1", correct: false },
        { text: "Answer 5", correct: false },
        { text: "Answer 3", correct: true },
        { text: "Answer 5", correct: false },
      ],
    },    
  ],
];

const questionElement5 = document.getElementById("question_5");
const answerButtons5 = document.getElementById("answerbuttons_5");
const nextButton5 = document.getElementById("nextbtn_5");
let currentQuestionIndex5 = 0;
let score5 = 0;

function startQuiz5() {
  currentQuestionIndex5 = -1;
  score5 = 0;
  nextButton5.innerHTML = "Start Quiz";
  while (answerButtons5.firstChild) {
    answerButtons5.removeChild(answerButtons5.firstChild);
  }
  nextButton5.addEventListener("click", () => {
    showQuestion5();
  });
  questionElement5.innerHTML = "Trykk knappen for å starte";
  nextButton5.style.display = "block";
}

function showQuestion5() {
  resetState5();
  let currentQuestion = questions5[0][currentQuestionIndex5];
  let questionNo5 = currentQuestionIndex5 + 1;
  questionElement5.innerHTML = questionNo5 + ". " + currentQuestion.question5;

  nextButton5.innerHTML = "Next";

  currentQuestion.answers5.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons5.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer5);
  });
}

function resetState5() {
  while (answerButtons5.firstChild) {
    answerButtons5.removeChild(answerButtons5.firstChild);
  }
}

function selectAnswer5(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score5++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons5.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton5.style.display = "block";
}

function showScore5() {
  resetState5();
  questionElement5.innerHTML = `Du fikk ${score5} poeng ut av makismalt ${questions5[0].length} poeng`;
  nextButton5.innerHTML = "Prøv på nytt ighen";
  nextButton5.style.display = "block";
}

function handleNextButton5() {
  currentQuestionIndex5++;
  if (currentQuestionIndex5 < questions5[0].length) {
    showQuestion5();
  } else {
    showScore5();
  }
}

nextButton5.addEventListener("click", () => {
  if (currentQuestionIndex5 < questions5[0].length) {
    handleNextButton5();
  } else {
    startQuiz5();
  }
});

startQuiz5();
