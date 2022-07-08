let level = localStorage.getItem("level");
const btn = document.querySelector("button");
let difficulty = document.querySelectorAll("ul.menu > li");
const valuesDifficulty = document.querySelector("#diff");
const input = document.querySelector("#number");
let count = 0;
input.focus();

//Check if level is set in localstorage
const levelTestisNull =
  level === null
    ? (window.href = "start.html")
    : (level = localStorage.getItem("level"));

valuesDifficulty.innerHTML = `Simple game with guessing number from 1-${level}, Have fun!`;
input.placeholder = `Guess number from 1 to ${level}`;
const randomNumber = Math.floor(Math.random() * level) + 1;
//Generate random number

// Fields
const resultField = document.querySelector(".result");
const countField = document.querySelector(".countTries");
const numbersField = document.querySelector(".myNumbers");

const Game = () => {
  const input = document.querySelector("#number").value;
  // Logical statement, if someone need to guess higher or lower.
  // if (input > 15) {
  //   resultField.innerHTML = `Guess number from 1 to 15!`;
  // } else
  if (input == "e" && input == ",") {
    Swal.fire({
      title: "Please enter a integer!",
      icon: "error",
      DenyButtonText: "OK",
    });
  }
  if (input < randomNumber) {
    resultField.innerHTML = `Your Number is Higher than ${input}!`;
  } else if (input > randomNumber) {
    resultField.innerHTML = `Your Number is Lower than ${input}!`;
  } else {
    resultField.innerHTML = `Congratulations! You guessed the number!`;
  }
  // Win game statement
  if (input == randomNumber) {
    Swal.fire({
      icon: "success",
      title: "Nice!",
      text: `You got that! the number is: ${input}`,
      showDenyButton: true,
      denyButtonColor: `#d33`,
      denyButtonText: "Change Difficulty",
      showConfirmButton: true,
      confirmButtonText: `Play Again`,
      confirmButtonColor: `#d33`,
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      } else if (result.isDenied) {
        window.location.href = "index.html";
      }
    });
  }
  //Adding every number that someone guess into the list
  if ((input) => 1 && input <= level) {
    numbersField.innerHTML += `${input} `;
  }
};

// Count tries and add every number that someone guess
countField.innerHTML = `Number of tries: ${count}`;
const countTries = () => {
  if ((input) => 1 && input <= level) {
    count++;
    countField.innerHTML = `Number of tries: ${count}`;
  } else {
    countField.innerHTML = `Number of tries: ${count}`;
  }
};
//submit on enter
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    Game();
    countTries();
  }
});

btn.addEventListener("click", countTries);
btn.addEventListener("click", Game);
console.log(level);
console.log(randomNumber);
//focus
