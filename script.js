let numInput = document.getElementById("number");
let getNumber = document.getElementById("getNumber");
let userScore = document.getElementById("score");
let spanHighScore = document.getElementById("high-score");
let msg = document.querySelector(".message")
let numScore = 20;
let highScore = 0;

getNumber.addEventListener("click", () => {
  let numRandom = Math.trunc(Math.random() * 2) + 1;
  // let numRandom = 1
  if (Number(numInput.value) > 20 || Number(numInput.value) < 1) {
    // alert("Digite um valor de 1 a 20!!");
  } else {
    if (numScore == 0) {
      // alert("Game Over!!!");
      userScore.innerText = "Game Over!!!"
      document.body.style.background = "#d80e0e";
    } else {
      userScore.innerText = `💯 Score: ${numScore}`;
      if (Number(numInput.value) == numRandom) {
        document.body.style.background = "#60b347";
        document.querySelector(".number").innerHTML = `${numRandom}`;
        // highScore.innerText = `${numScore}`;
        if (highScore < numScore) {
          highScore = numScore
          spanHighScore.innerText = `${highScore}`
        }
      } else {
        document.body.style.background = "#222";
        document.querySelector(".number").innerHTML = `?`;
        numScore--;
      }
    }
  }
  console.log(highScore);
  console.log(numRandom);
});

numInput.addEventListener("focus", () => {
  if (numInput > numRandom) {
    msg.innerText = "sa"
  }
})