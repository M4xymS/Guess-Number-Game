const btn = document.querySelector("button");
const input = document.querySelector("#number");

//save number in localstorage
const saveNumber = () => {
  const level = input.value;
  localStorage.setItem("level", level);
};

const StartGame = () => {
  window.location.href = "game.html";
};

btn.addEventListener("click", saveNumber);
btn.addEventListener("click", StartGame);
