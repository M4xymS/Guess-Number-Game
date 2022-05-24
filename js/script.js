const btn = document.querySelector("button");
const resultField = document.querySelector(".result");
const countTries = document.querySelector(".countTries");
let randomNumber = Math.floor(Math.random() * 15 + 1);
let count = 0;

const Game = () => {
  let input = document.querySelector("#number").value;

  let count = 0;
  resultField.innerHTML = `${input}`;
  if (input == randomNumber) {
    resultField.innerHTML = `Wow! u got that! the number is: ${randomNumber}`;

    const restartGame = () => {
      location.reload();
    };
    setTimeout(restartGame, 5000);
  }

  count++;

  countTries.innerHTML = count;
};
btn.addEventListener("click", Game);

console.log(randomNumber);
btn.addEventListener("click", Game);
