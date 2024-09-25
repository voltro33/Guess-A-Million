let targetNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function changeTarget() {
    const limit = document.getElementById('limitId');
    const rangeId = document.getElementById('rangeId');
    let target = parseInt(limit.value);

    if (isNaN(target)) {
        document.getElementById('resultMessage').textContent = "Please enter a valid number!";
    } else {
        targetNumber = Math.floor(Math.random() * target) + 1; 
        rangeId.textContent = `Guess a number between 1 and ${target}:`;
    }
}

function submitGuess() {
    const guessInput = document.getElementById('guessInput');
    const resultMessage = document.getElementById('resultMessage');
    const attemptsMessage = document.getElementById('attempts');
    
    let guess = parseInt(guessInput.value);
    guesses++;

    if (isNaN(guess)) {
        resultMessage.textContent = "Please enter a valid number!";
        changeBackgroundColor('red');
    } else if (guess < targetNumber) {
        resultMessage.textContent = "Too low! Try again.";
        changeBackgroundColor('orange');
    } else if (guess > targetNumber) {
        resultMessage.textContent = "Too high! Try again.";
        changeBackgroundColor('orange');
    } else {
        resultMessage.textContent = `Congratulations! You guessed it in ${guesses} attempts.`;
        changeBackgroundColor('green');
    }

    attemptsMessage.textContent = `Attempts: ${guesses}`;
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('rangeId').textContent = 'Guess a number between 1 and 100:';
    document.getElementById('limitId').value = '';
    changeBackgroundColor('#f0f8ff'); // Reset to default background color
}

function changeBackgroundColor(color) {
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = color;
}
