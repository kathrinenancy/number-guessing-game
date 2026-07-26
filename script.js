let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

let randomValue = (Math.random()) * 100;
randomValue = Math.ceil(randomValue)
console.log(randomValue);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    console.log(guessedNumber);
    if (guessedNumber > randomValue) {
        gameResult.textContent = "High Value! Try again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber < randomValue) {
        gameResult.textContent = "Low Value! Try again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomValue) {
        gameResult.textContent = "Congratulations! You got it right";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Provide a valid user input";
        gameResult.style.backgroundColor = "red";
    }
}