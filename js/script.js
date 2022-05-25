const btn = document.querySelector("button");
const resultField = document.querySelector(".result");
const countField = document.querySelector(".countTries");
const numbersField = document.querySelector(".myNumbers");

let randomNumber = Math.floor(Math.random() * 15 + 1);
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
    resultField.classList.add("winner");
    resultField.innerHTML = `Wow! u got that! the number is: ${randomNumber}`;

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
