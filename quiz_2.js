const questions2 = [
  [
    {
      question2: "Hva bør du gjøre dersom du blir ringt av en svindler",
      answers2: [
        { text: "Ikke ta telefonen og blokkere nummeret.", correct: true },
        { text: "Ringe 112 og anmelde svindelforsøket.", correct: false },
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
      question2: "Question",
      answers2: [
        { text: "Answer 1", correct: false },
        { text: "TEST 2", correct: true },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question2: "Question",
      answers2: [
        { text: "Answer 1", correct: false },
        { text: "Answer 2", correct: false },
        { text: "Answer 3", correct: true },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question2: "Question",
      answers2: [
        { text: "Answer 1", correct: false },
        { text: "Answer 2", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: true },
      ],
    },
  ],
  [
    {
      question2: "Question",
      answers2: [
        { text: "Answer 1", correct: true },
        { text: "Answer 2", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question2: "Question",
      answers2: [
        { text: "Answer 1", correct: false },
        { text: "Answer 2", correct: true },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question2: "Question",
      answers2: [
        { text: "Answer 1", correct: false },
        { text: "Answer 2", correct: false },
        { text: "Answer 3", correct: true },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question2: "Question",
      answers2: [
        { text: "Answer 1", correct: false },
        { text: "Answer 2", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: true },
      ],
    },
  ],
];

const questionElement2 = document.getElementById("question_2");
const answerButtons2 = document.getElementById("answerbuttons_2");
const nextButton2 = document.getElementById("nextbtn_2");
let currentQuestionIndex2 = 0;
let score2 = 0;

function startQuiz2() {
  currentQuestionIndex2 = -1;
  score2 = 0;
  nextButton2.innerHTML = "Start Quiz";
  while (answerButtons2.firstChild) {
    answerButtons2.removeChild(answerButtons2.firstChild);
  }
  nextButton2.addEventListener("click", () => {
    showQuestion2();
  });
  questionElement2.innerHTML = "Trykk knappen for å starte";
  nextButton2.style.display = "block";
}

function showQuestion2() {
  resetState2();
  let currentQuestion = questions2[0][currentQuestionIndex2];
  let questionNo2 = currentQuestionIndex2 + 1;
  questionElement2.innerHTML = questionNo2 + ". " + currentQuestion.question2;

  nextButton2.innerHTML = "Next";

  currentQuestion.answers2.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons2.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer2);
  });
}

function resetState2() {
  while (answerButtons2.firstChild) {
    answerButtons2.removeChild(answerButtons2.firstChild);
  }
}

function selectAnswer2(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score2++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons2.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton2.style.display = "block";
}

function showScore2() {
  resetState2();
  questionElement2.innerHTML = `Du fikk ${score2} poeng ut av makismalt ${questions2[0].length} poeng`;
  nextButton2.innerHTML = "Prøv på nytt ighen";
  nextButton2.style.display = "block";
}

function handleNextButton2() {
  currentQuestionIndex2++;
  if (currentQuestionIndex2 < questions2[0].length) {
    showQuestion2();
  } else {
    showScore2();
  }
}

nextButton2.addEventListener("click", () => {
  if (currentQuestionIndex2 < questions2[0].length) {
    handleNextButton2();
  } else {
    startQuiz2();
  }
});

startQuiz2();
