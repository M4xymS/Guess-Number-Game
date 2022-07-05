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
  } else {
    window.location.href = "game.html";
  }
};
btn.addEventListener("click", saveNumber);
btn.addEventListener("click", StartGame);
