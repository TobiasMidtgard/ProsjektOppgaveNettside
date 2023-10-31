const questions1 = [
  [
    {
      question1: "Hva bør du gjøre dersom du blir ringt av en svindler",
      answers1: [
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
      question1: "Question",
      answers1: [
        { text: "Answer 1", correct: false },
        { text: "TEST 2", correct: true },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question1: "Question",
      answers1: [
        { text: "Answer 1", correct: false },
        { text: "Answer 2", correct: false },
        { text: "Answer 3", correct: true },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question1: "Question",
      answers1: [
        { text: "Answer 1", correct: false },
        { text: "Answer 2", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: true },
      ],
    },
  ],
  [
    {
      question1: "Question",
      answers1: [
        { text: "Answer 1", correct: true },
        { text: "Answer 2", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question1: "Question",
      answers1: [
        { text: "Answer 1", correct: false },
        { text: "Answer 2", correct: true },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question1: "Question",
      answers1: [
        { text: "Answer 1", correct: false },
        { text: "Answer 2", correct: false },
        { text: "Answer 3", correct: true },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question1: "Question",
      answers1: [
        { text: "Answer 1", correct: false },
        { text: "Answer 2", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: true },
      ],
    },
  ],
];

const questionElement1 = document.getElementById("question_1");
const answerButtons1 = document.getElementById("answerbuttons_1");
const nextButton1 = document.getElementById("nextbtn_1");
let currentQuestionIndex1 = 0;
let score1 = 0;

function startQuiz1() {
  currentQuestionIndex1 = -1;
  score1 = 0;
  nextButton1.innerHTML = "Start Quiz";
  while (answerButtons1.firstChild) {
    answerButtons1.removeChild(answerButtons1.firstChild);
  }
  nextButton1.addEventListener("click", () => {
    showQuestion1();
  });
  questionElement1.innerHTML = "Trykk knappen for å starte";
  nextButton1.style.display = "block";
}

function showQuestion1() {
  resetState1();
  let currentQuestion1 = questions1[0][currentQuestionIndex1];
  let questionNo1 = currentQuestionIndex1 + 1;
  questionElement1.innerHTML = questionNo1 + ". " + currentQuestion1.question1;

  nextButton1.innerHTML = "Next";

  currentQuestion1.answers1.forEach((answer) => {
    const button1 = document.createElement("button");
    button1.innerHTML = answer.text;
    button1.classList.add("btn");
    answerButtons1.appendChild(button1);
    if (answer.correct) {
      button1.dataset.correct = answer.correct;
    }
    button1.addEventListener("click", selectAnswer1);
  });
}

function resetState1() {
  while (answerButtons1.firstChild) {
    answerButtons1.removeChild(answerButtons1.firstChild);
  }
}

function selectAnswer1(e) {
  const selectedBtn1 = e.target;
  const isCorrect1 = selectedBtn1.dataset.correct === "true";
  if (isCorrect1) {
    selectedBtn1.classList.add("correct");
    score1++;
  } else {
    selectedBtn1.classList.add("incorrect");
  }
  Array.from(answerButtons1.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton1.style.display = "block";
}

function showScore1() {
  resetState1();
  questionElement1.innerHTML = `Du fikk ${score1} poeng ut av makismalt ${questions1[0].length} poeng`;
  nextButton1.innerHTML = "Prøv på nytt ighen";
  nextButton1.style.display = "block";
}

function handleNextButton1() {
  currentQuestionIndex1++;
  if (currentQuestionIndex1 < questions1[0].length) {
    showQuestion1();
  } else {
    showScore1();
  }
}

nextButton1.addEventListener("click", () => {
  if (currentQuestionIndex1 < questions1[0].length) {
    handleNextButton1();
  } else {
    startQuiz1();
  }
});
startQuiz1();
