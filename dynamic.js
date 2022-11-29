let userScore = 0;
let computerScore = 0;
const result = document.querySelector(".result");
const userResult = document.querySelector(".userResult");
const compResult = document.querySelector(".compResult");
const message = document.querySelector(".message");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");

function computerChoice() {
  const choices = ["paper", "rock", "scissors"];
  const computerRandom = Math.floor(Math.random() * 3);
  console.log(computerRandom);
  return choices[computerRandom];
}

paper.addEventListener("click", function () {
  switch (computerChoice()) {
    case "paper":
      message.innerHTML = "It's a draw";
      break;
    case "rock":
      userScore++;
      userResult.textContent = userScore;
      message.innerHTML = "Paper(You) beats Rock(CPU), You win";
      break;
    case "scissors":
      computerScore++;
      compResult.textContent = computerScore;
      message.innerHTML = "Paper(You) got beaten by Scissors(CPU), You lost";
      break;
  }
});

rock.addEventListener("click", function () {
  switch (computerChoice()) {
    case "rock":
      message.innerHTML = "It's a draw";
      break;
    case "scissors":
      userScore++;
      userResult.textContent = userScore;
      message.innerHTML = "Rock(YOU) beats Scissors(CPU), You win";
      break;
    case "paper":
      computerScore++;
      compResult.textContent = computerScore;
      message.innerHTML = " Rock(YOU) got beaten by Paper(CPU), You lost";
      break;
  }
});

scissors.addEventListener("click", function () {
  switch (computerChoice()) {
    case "scissors":
      message.innerHTML = "It's a draw";
      break;
    case "paper":
      userScore++;
      userResult.textContent = userScore;
      message.innerHTML = "Scissors(You) beats paper(CPU), You win";
      break;
    case "rock":
      computerScore++;
      compResult.textContent = computerScore;
      message.innerHTML = " Scissors(YOU) got beaten by Rock(CPU), You lost";
      break;
  }
});
