const level = localStorage.getItem("level");

const btn = document.querySelector("button");
let difficulty = document.querySelectorAll("ul.menu > li");
const valuesDifficulty = document.querySelectorAll("#diff");
const input = document.querySelector("#number");
input.focus();

valuesDifficulty[0].innerHTML = `Simple game with guessing number from 1-${level},

    Have fun!`;
input.placeholder = `Guess number from 1 to ${level}`;

//Generate random number

let randomNumber = Math.floor(Math.random() * level) + 1;
// Fields
const resultField = document.querySelector(".result");
const countField = document.querySelector(".countTries");
const numbersField = document.querySelector(".myNumbers");

let count = 0;

const Game = () => {
  const input = document.querySelector("#number").value;
  // Logical statement, if someone need to guess higher or lower.
  // if (input > 15) {
  //   resultField.innerHTML = `Guess number from 1 to 15!`;
  // } else
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
      denyButtonText: "Change difficulty",
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

  //Adding every number that someone guess
  if (input > 0 && input < 15) {
    numbersField.innerHTML += `${input} `;
  }
};
const countTries = () => {
  const input = document.querySelector("#number").value;
  if (input > 0 && input < 15) {
    count++;
    countField.innerHTML = `Number of tries: ${count}`;
  } else {
    countField.innerHTML = `Number of tries: ${count}`;
  }
};

btn.addEventListener("click", countTries);
btn.addEventListener("click", Game);
console.log(level);
console.log(randomNumber);
//focus
