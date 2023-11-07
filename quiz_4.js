const questions4 = [
  [
    {
      question4:
        "Hvilke av disse betalingstjenestene blir bare brukt til svindel?",
      answers4: [
        { text: "Kort", correct: false },
        { text: "Gavekort", correct: true },
        { text: "Bankoverføring", correct: false },
        { text: "Crypto", correct: false },
        { text: "Kontant", correct: false },
      ],
    },
    {
      question4:
        "Dersom du blir spurt om å betale som venn eller familie gjennom bankoverførelse bør du:",
      answers4: [
        {
          text: "Ikke overføre penger, fordi du ikke har noen sikkerhet og det kan være svindel",
          correct: true,
        },
        {
          text: "Kreve en lavere pris, med tanke på at du sparer de penger",
          correct: false,
        },
        { text: "Betale for tjensten", correct: false },
        {
          text: "Betale for tjenesten, men som tjeneste og service",
          correct: false,
        },
      ],
    },
    {
      question4: "Hvilke av disse betalingsmetodene har sikkerhet",
      answers4: [
        { text: "Crypto", correct: false },
        { text: "Gavekort", correct: false },
        { text: "Kredittkort", correct: true },
        { text: "Kontant", correct: false },
        { text: "Bankoverføring - Venner og familie", correct: false },
        { text: "Sjekk", correct: false },
      ],
    },
    {
      question4: "Dersom noen bare aksepterer crypto bør du:",
      answers4: [
        { text: "Oprette en konto og forsette transaksjonen", correct: false },
        { text: "Få dem til å investere i doge coin", correct: false },
        { text: "Anmelde dem til politiet", correct: false },
        { text: "Ikke etterkomme forespørselen", correct: true },
      ],
    },
  ],
  [
    {
      question4: "Question",
      answers4: [
        { text: "Answer 1", correct: true },
        { text: "Answer 4", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question4: "Question",
      answers4: [
        { text: "Answer 1", correct: false },
        { text: "Answer 4", correct: true },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question4: "Question",
      answers4: [
        { text: "Answer 1", correct: false },
        { text: "Answer 4", correct: false },
        { text: "Answer 3", correct: true },
        { text: "Answer 4", correct: false },
      ],
    },
    {
      question4: "Question",
      answers4: [
        { text: "Answer 1", correct: false },
        { text: "Answer 4", correct: false },
        { text: "Answer 3", correct: false },
        { text: "Answer 4", correct: true },
      ],
    },
  ],
];

const questionElement4 = document.getElementById("question_4");
const answerButtons4 = document.getElementById("answerbuttons_4");
const nextButton4 = document.getElementById("nextbtn_4");
let currentQuestionIndex4 = 0;
let score4 = 0;

function startQuiz4() {
  currentQuestionIndex4 = -1;
  score4 = 0;
  nextButton4.innerHTML = "Start Quiz";
  while (answerButtons4.firstChild) {
    answerButtons4.removeChild(answerButtons4.firstChild);
  }
  nextButton4.addEventListener("click", () => {
    showQuestion4();
  });
  questionElement4.innerHTML = "Trykk knappen for å starte";
  nextButton4.style.display = "block";
}

function showQuestion4() {
  resetState4();
  let currentQuestion = questions4[0][currentQuestionIndex4];
  let questionNo4 = currentQuestionIndex4 + 1;
  questionElement4.innerHTML = questionNo4 + ". " + currentQuestion.question4;

  nextButton4.innerHTML = "Next";

  currentQuestion.answers4.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons4.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer4);
  });
}

function resetState4() {
  while (answerButtons4.firstChild) {
    answerButtons4.removeChild(answerButtons4.firstChild);
  }
}

function selectAnswer4(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score4++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons4.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton4.style.display = "block";
}

function showScore4() {
  resetState4();
  questionElement4.innerHTML = `Du fikk ${score4} poeng ut av makismalt ${questions4[0].length} poeng`;
  nextButton4.innerHTML = "Prøv på nytt ighen";
  nextButton4.style.display = "block";
}

function handleNextButton4() {
  currentQuestionIndex4++;
  if (currentQuestionIndex4 < questions4[0].length) {
    showQuestion4();
  } else {
    showScore4();
  }
}

nextButton4.addEventListener("click", () => {
  if (currentQuestionIndex4 < questions4[0].length) {
    handleNextButton4();
  } else {
    startQuiz4();
  }
});

startQuiz4();
