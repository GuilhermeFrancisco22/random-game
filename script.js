let numInput = document.getElementById("number");
let getNumber = document.getElementById("getNumber");
let userScore = document.getElementById("score");
let spanHighScore = document.getElementById("high-score");
let msg = document.querySelector(".message");
let numScore = 20;
let highScore = 0;
let numRandom = Math.trunc(Math.random() * 20) + 1;

getNumber.addEventListener("click", () => {
  // let numRandom = 1
  if (Number(numInput.value) > 20 || Number(numInput.value) < 1) {
    // alert("Digite um valor de 1 a 20!!");
  } else {
    if (numScore == 0) {
      // alert("Game Over!!!");
      userScore.innerText = "Game Over!!!";
      document.body.style.background = "#d80e0e";
    } else if (highScore != numScore) {
      if (Number(numInput.value) == numRandom) {
        userScore.innerText = "Winer!!!";
        document.body.style.background = "#60b347";
        document.querySelector(".number").innerHTML = `${numRandom}`;
        // highScore.innerText = `${numScore}`;
        if (highScore < numScore) {
          highScore = numScore;
          spanHighScore.innerText = `${highScore}`;
        }
      } else {
        document.body.style.background = "#222";
        document.querySelector(".number").innerHTML = `?`;
        numScore--;
        
      }
      userScore.innerText = `💯 Score: ${numScore}`;
    }
  }
  console.log(highScore);
  console.log(numRandom);
});

document.querySelector(".again").addEventListener("click", () => {

});
