const domNumbers = document.getElementById("domNumbers");
const domPlay = document.getElementById("domPlay");
const domResult = document.getElementById("domResult");

//tempo per rispondere in s
const gameTime = 2;

domPlay.addEventListener("click", startGame);

//generatore numeri casuali
function getRandomNumbers(numbersAmount) {
  const arr = [];
  for (let i = 0; arr.length < numbersAmount; i++) {
    const tempNum = Math.floor(Math.random() * 10) + 1;
    if (!arr.includes(tempNum)) {
      arr.push(tempNum);
    }
  }
  return arr;
}

// logica gioco
function startGame() {
  domPlay.disabled = true;
  const randomNumbers = getRandomNumbers(5);
  const userNumbers = [];
  domNumbers.textContent = `Hai 30 secondi da ora per memorizzare questi numeri! ${randomNumbers.join(" - ")}`;
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      const tempNum = parseInt(prompt());
      if (isNaN(tempNum || !tempNum)) {
        return;
      }
      userNumbers.push(tempNum);
    }
    if (!userNumbers) {
      return;
    }
    const guessedNumbers = [];
    for (let i = 0; i < 5; i++) {
      const tempNumber = randomNumbers[i];
      if (userNumbers.includes(tempNumber)) {
        guessedNumbers.push(tempNumber);
      }
    }
    domResult.textContent = `Hai indovinato ${guessedNumbers.length} numero/i: ${guessedNumbers.join(" - ")}`;
    domPlay.disabled = false;
  }, gameTime * 1000);
}
