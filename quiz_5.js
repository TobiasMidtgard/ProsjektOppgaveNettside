const questions5 = [
  [
    {
      question5: "Hva bør du gjøre dersom du blir ringt av en svindler",
      answers5: [
        { text: "Ikke ta telefonen og blokkere nummeret.", correct: true },
        { text: "Ringe 115 og anmelde svindelforsøket.", correct: false },
        {
          text: "Ta telefonen og informere dem om at du er klar over at de driver med svindel.",
          correct: false,
        },
        {
          text: "Sette opp et program som konstant ringer dem og gjør det umulig for dem å ringe mulige offere.",
          correct: false,
        },
        { text: "Svindle svindlerene.", correct: false },
      ],
    },
    {
      question5: "Question",
      answers5: [
        { text: "Answer 1", correct: false },
        { text: "TEST 5", correct: true },
        { text: "Answer 3", correct: false },
        { text: "Answer 5", correct: false },
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
    {
      question5: "Question",
      answers5: [
        { text: "Answer 1", correct: false },
        { text: "Answer 5", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 5", correct: true },
      ],
    },
  ],
  [
    {
      question5: "Question",
      answers5: [
        { text: "Answer 1", correct: true },
        { text: "Answer 5", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 5", correct: false },
      ],
    },
    {
      question5: "Question",
      answers5: [
        { text: "Answer 1", correct: false },
        { text: "Answer 5", correct: true },
        { text: "Answer 3", correct: false },
        { text: "Answer 5", correct: false },
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
    {
      question5: "Question",
      answers5: [
        { text: "Answer 1", correct: false },
        { text: "Answer 5", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 5", correct: true },
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
