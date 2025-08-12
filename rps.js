function playGame(myChoice) {
  const computerChoices = ["Rock", "Scissor", "Paper"];

  const randomIdx = Math.floor(Math.random() * 3);

  const computerChoice = computerChoices[randomIdx];

  console.log(`My choice ${myChoice}`);
  console.log(`Computer choice ${computerChoice}`);
}

playGame("Rock");
