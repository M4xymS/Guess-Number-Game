const btn = document.querySelector("button");
const input = document.querySelector("#number");
input.focus();
//save number in localstorage
const saveNumber = () => {
  const level = input.value;
  localStorage.setItem("level", level);
};

const StartGame = () => {
  if (input.value == "") {
    Swal.fire({
      title: "Please enter a number!",
      icon: "error",
      confirmButtonText: "Try again",
    });
  } else if (input.value <= 0) {
    Swal.fire({
      title: "Please enter a number higher than 0!",
      icon: "warning",
      confirmButtonText: "Try again",
    });
  } else {
    window.location.href = "game.html";
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
btn.addEventListener("click", saveNumber);
btn.addEventListener("click", StartGame);
