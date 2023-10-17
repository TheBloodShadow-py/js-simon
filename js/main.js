const domNumbers = document.getElementById("domNumbers");
const domPlay = document.getElementById("domPlay");
const domResult = document.getElementById("domResult");

domPlay.addEventListener("click", startGame);

function getRandomNumbers(numbersAmount) {
  const arr = [];
  for (let i = 0; arr.length < numbersAmount; i++) {
    const tempNum = Math.floor(Math.random() * 10) + 1;
    if (!arr.includes(tempNum)) {
      arr.push(tempNum);
    }
  }
  console.log(arr.join(" - "));
  return arr;
}

function startGame() {
  domPlay.disabled = true;
  const randomNumbers = getRandomNumbers(5);
  const userNumbers = [];
  domNumbers.textContent = `Hai 30 secondi da ora per memorizzare questi numeri! ${randomNumbers.join(" - ")}`;
  setTimeout(() => {
    const num1 = parseInt(prompt());
    const num2 = parseInt(prompt());
    const num3 = parseInt(prompt());
    const num4 = parseInt(prompt());
    const num5 = parseInt(prompt());
    userNumbers.push(num1, num2, num3, num4, num5);
    if (!userNumbers) {
      return;
    }
    const guessedNumbers = [];
    for (let i = 0; i < 5; i++) {
      const tempNumber = randomNumbers[i];
      console.log(tempNumber);
      console.log(randomNumbers);
      if (userNumbers.includes(tempNumber)) {
        guessedNumbers.push(tempNumber);
      }
    }
    domResult.textContent = `Hai indovinato ${guessedNumbers.length} numero/i: ${guessedNumbers.join(" - ")}`;
    console.log(randomNumbers, userNumbers, guessedNumbers);
    domPlay.disabled = false;
  }, 3000);
}
