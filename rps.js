function playGame(myChoice) {
  const computerChoices = ["Rock", "Scissor", "Paper"];

  const randomIdx = Math.floor(Math.random() * 3);

  const computerChoice = computerChoices[randomIdx];

  console.log(`My choice ${myChoice}`);
  console.log(`Computer choice ${computerChoice}`);

  let result 

  switch(myChoice) {
    case "Rock":
      if (computerChoice === "Scissor") result = "win"
      else if (computerChoice === "Paper") result = "lose"
      else result = "draw"
      break
    case "Scissor":
      if (computerChoice === "Rock") result = "lose"
      else if (computerChoice === "Paper") result = "win"
      else result = "draw"
      break
    case "Paper":
      if (computerChoice === "Scissor") result = "lose"
      else if (computerChoice === "Rock") result = "win"
      else result = "draw"
      break
    default:
      result = "invalid"
  }

  console.log(`Result ${result}`)
    
}

playGame("Rock");
