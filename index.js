var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector("img.img1")
  .setAttribute("src", "./images/dice" + num1 + ".png");
document
  .querySelector("img.img2")
  .setAttribute("src", "./images/dice" + num2 + ".png");

if (num1 > num2) {
  document.querySelector("h1").textContent = "🎖 Player 1 Wins";
} else if (num1 === num2) {
  document.querySelector("h1").textContent = "It's a Draw";
} else {
  document.querySelector("h1").textContent = "🎖 Player 2 Wins";
}
