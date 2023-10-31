const questions3 = [
  [
    {
      question3: "Hva bør du gjøre dersom du blir ringt av en svindler",
      answers3: [
        { text: "Ikke ta telefonen og blokkere nummeret.", correct: true },
        { text: "Ringe 113 og anmelde svindelforsøket.", correct: false },
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
      question3: "Question",
      answers3: [
        { text: "Answer 1", correct: false },
        { text: "TEST 3", correct: true },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question3: "Question",
      answers3: [
        { text: "Answer 1", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 3", correct: true },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question3: "Question",
      answers3: [
        { text: "Answer 1", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: true },
      ],
    },
  ],
  [
    {
      question3: "Question",
      answers3: [
        { text: "Answer 1", correct: true },
        { text: "Answer 3", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question3: "Question",
      answers3: [
        { text: "Answer 1", correct: false },
        { text: "Answer 3", correct: true },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question3: "Question",
      answers3: [
        { text: "Answer 1", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 3", correct: true },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question3: "Question",
      answers3: [
        { text: "Answer 1", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: true },
      ],
    },
  ],
];

const questionElement3 = document.getElementById("question_3");
const answerButtons3 = document.getElementById("answerbuttons_3");
const nextButton3 = document.getElementById("nextbtn_3");
let currentQuestionIndex3 = 0;
let score3 = 0;

function startQuiz3() {
  currentQuestionIndex3 = -1;
  score3 = 0;
  nextButton3.innerHTML = "Start Quiz";
  while (answerButtons3.firstChild) {
    answerButtons3.removeChild(answerButtons3.firstChild);
  }
  nextButton3.addEventListener("click", () => {
    showQuestion3();
  });
  questionElement3.innerHTML = "Trykk knappen for å starte";
  nextButton3.style.display = "block";
}

function showQuestion3() {
  resetState3();
  let currentQuestion = questions3[0][currentQuestionIndex3];
  let questionNo3 = currentQuestionIndex3 + 1;
  questionElement3.innerHTML = questionNo3 + ". " + currentQuestion.question3;

  nextButton3.innerHTML = "Next";

  currentQuestion.answers3.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons3.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer3);
  });
}

function resetState3() {
  while (answerButtons3.firstChild) {
    answerButtons3.removeChild(answerButtons3.firstChild);
  }
}

function selectAnswer3(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score3++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons3.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton3.style.display = "block";
}

function showScore3() {
  resetState3();
  questionElement3.innerHTML = `Du fikk ${score3} poeng ut av makismalt ${questions3[0].length} poeng`;
  nextButton3.innerHTML = "Prøv på nytt ighen";
  nextButton3.style.display = "block";
}

function handleNextButton3() {
  currentQuestionIndex3++;
  if (currentQuestionIndex3 < questions3[0].length) {
    showQuestion3();
  } else {
    showScore3();
  }
}

nextButton3.addEventListener("click", () => {
  if (currentQuestionIndex3 < questions3[0].length) {
    handleNextButton3();
  } else {
    startQuiz3();
  }
});

startQuiz3();
