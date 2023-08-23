let numRandom = Math.trunc(Math.random() * 20) + 1;
let numInput = document.getElementById("number");
let getNumber = document.getElementById("getNumber");
let userScore = document.getElementById("score");
let highScore = document.getElementById("high-score");
let numScore = 20;
console.log(numRandom);
let win;
getNumber.addEventListener("click", () => {
  if (Number(numInput.value) > 20 || Number(numInput.value) < 1) {
    alert("Digite um valor de 1 a 20!!");
  } else {
    if (Number(numInput.value) == numRandom) {
      document.body.style.background = "green";
      document.querySelector(".number").innerHTML = `${numRandom}`;
      highScore.innerText = `${numScore}`;
    } else {
      document.body.style.background = "red";
      document.querySelector(".number").innerHTML = `?`;
      numScore--;
    }
    if (numScore <= 0) {
      alert("Game Over!!!");
      userScore.innerText = "Game Over!!!"
    } else {
      userScore.innerText = `💯 Score: ${numScore}`;
    }
  }
});
