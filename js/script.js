const btn = document.querySelector("button");
const resultField = document.querySelector(".result");
const countField = document.querySelector(".countTries");

let randomNumber = Math.floor(Math.random() * 15 + 1);
let count = 0;

const Game = () => {
  const input = document.querySelector("#number").value;

  setTimeout(restartGame, 5000);
};
if (input > 15) {
  resultField.innerHTML = `Guess number from 1 to 15!`;
} else if (input < randomNumber) {
  resultField.innerHTML = `Your Number is Higher than ${input}!`;
} else {
  resultField.innerHTML = `Your Number is Lower than ${input}!`;
}
if (input == randomNumber) {
  resultField.innerHTML = `Wow! u got that! the number is: ${randomNumber}`;

  const restartGame = () => {
    location.reload();
  };
}

const countTries = () => {
  const input = document.querySelector("#number").value;
  if (input > 15 && count == 0) {
    countField.innerHTML = `Liczba Prób: ${count}`;
  } else if (input > 15 && count > 0) {
    count--;
    countField.innerHTML = `Liczba Prób: ${count}`;
  } else {
    count++;
    countField.innerHTML = `Liczba Prób: ${count}`;
  }
};

btn.addEventListener("click", countTries);
btn.addEventListener("click", Game);

console.log(randomNumber);
