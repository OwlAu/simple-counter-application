const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const num = document.getElementById("num");

let number = 0;

function decreaseNumber() {
  number -= 1;

  num.innerText = number;
}

function resetNumber() {
  number = 0;

  num.innerText = number;
}

function increaseNumber() {
  number += 1;

  num.innerText = number;
}
//Event Listener
decrease.addEventListener("click", decreaseNumber);
reset.addEventListener("click", resetNumber);
increase.addEventListener("click", increaseNumber);
