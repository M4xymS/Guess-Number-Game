//difficulty of game
let level = 15;
// Buttons
const btn = document.querySelector("button");
let difficulty = document.querySelectorAll("ul.menu > li");
const valuesDifficulty = document.querySelectorAll("#diff");
// Check what difficulty is selected

for (i of difficulty) {
  const input = document.querySelector("#number");
  i.addEventListener("click", function () {
    if (this.innerHTML == "Easy") {
      level = 15;
    } else if (this.innerHTML == "Medium") {
      level = 50;
    } else if (this.innerHTML == "Hard") {
      level = 100;
    }

    //Change values in HTML
    valuesDifficulty[0].innerHTML = level;
    input.placeholder = `Guess number from 1 to ${level}`;
  });
}

// Fields
const resultField = document.querySelector(".result");
const countField = document.querySelector(".countTries");
const numbersField = document.querySelector(".myNumbers");

let randomNumber = Math.floor(Math.random() * level + 1);
let count = 0;

const Game = () => {
  const input = document.querySelector("#number").value;
  // Logical statement, if someone need to guess higher or lower.
  if (input > 15) {
    resultField.innerHTML = `Guess number from 1 to 15!`;
  } else if (input < randomNumber) {
    resultField.innerHTML = `Your Number is Higher than ${input}!`;
  } else {
    resultField.innerHTML = `Your Number is Lower than ${input}!`;
  }
  // Win game statement
  if (input == randomNumber) {
    Swal.fire({
      icon: "success",
      title: "Nice!",
      text: `You got that! the number is: ${input}`,
      confirmButtonText: `Restart Game`,
      confirmButtonColor: `#d33`,
    }).then(function () {
      location.reload();
    });
  }

  //Adding every number that someone guess
  if (input > 0 && input < 15) {
    numbersField.innerHTML += `${input} `;
  }
};
const countTries = () => {
  const input = document.querySelector("#number").value;
  if (input > 0 && input < 15) {
    count++;
    countField.innerHTML = `Liczba Prób: ${count}`;
  } else {
    countField.innerHTML = `Liczba Prób: ${count}`;
  }
};

btn.addEventListener("click", countTries);
btn.addEventListener("click", Game);

console.log(randomNumber);
