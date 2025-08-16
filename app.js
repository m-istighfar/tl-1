const LOSE = "lose";
const WIN = "win";
const DRAW = "draw";

const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const buttons = document.querySelectorAll(".choice-btn");
const playAgainEl = document.getElementById("play-again");

function handlePlayGame(playerChoice) {
  const myChoice = playerChoice;
  const computerChoices = ["Rock", "Scissor", "Paper"];

  const randomIdx = Math.floor(Math.random() * 3);

  const computerChoice = computerChoices[randomIdx];

  let result;

  switch (myChoice) {
    case "Rock":
      if (computerChoice === "Scissor") result = "win";
      else if (computerChoice === "Paper") result = "lose";
      else result = "draw";
      break;
    case "Scissor":
      if (computerChoice === "Rock") result = "lose";
      else if (computerChoice === "Paper") result = "win";
      else result = "draw";
      break;
    case "Paper":
      if (computerChoice === "Scissor") result = "lose";
      else if (computerChoice === "Rock") result = "win";
      else result = "draw";
      break;
    default:
      result = "invalid";
  }

  choicesEl.textContent = `You: ${myChoice} | Computer: ${computerChoice}`;

  if (result === WIN) {
    resultEl.textContent = "You Win";
  } else if (result === LOSE) {
    resultEl.textContent = "Computer Win";
  } else if (result === DRAW) {
    resultEl.textContent = "Draw";
  } else {
    resultEl.textContent = "Invalid Choice";
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].classList.add("opacity-50", "cursor-not-allowed");
  }

  if (playAgainEl) {
    playAgainEl.classList.remove("hidden");
  }
}

console.log("init3");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    const choice = e.currentTarget.getAttribute("data-choice");
    handlePlayGame(choice);
  });
}

if (playAgainEl) {
  playAgainEl.addEventListener("click", () => {
    choicesEl.textContent = "You: – | Computer: –";
    resultEl.textContent = "Result: –";

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
      buttons[i].classList.remove("opacity-50", "cursor-not-allowed");
    }

    playAgainEl.classList.add("hidden");
  });
}
