let randomNumber;
let attempts = 0;
let maxAttempts;
let level;

document.getElementById('start').addEventListener('click', function() {
    level = document.getElementById('level').value;
    startGame(level);
});

function startGame(selectedLevel) {
    attempts = 0;

    if (selectedLevel === 'easy') {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        maxAttempts = 3;
        document.getElementById('range').textContent = '1 to 10';
    } else if (selectedLevel === 'medium') {
        randomNumber = Math.floor(Math.random() * 50) + 1;
        maxAttempts = 5;
        document.getElementById('range').textContent = '1 to 50';
    } else {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        maxAttempts = 7;
        document.getElementById('range').textContent = '1 to 100';
    }

    document.getElementById('game').style.display = 'block';
    document.getElementById('message').textContent = '';
    document.getElementById('guess').value = '';
}

document.getElementById('submit').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('guess').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('message').textContent = 'Congratulations! You guessed it right.';
    } else if (attempts >= maxAttempts) {
        document.getElementById('message').textContent = 'Game Over! The number was ' + randomNumber + '.';
    } else if (userGuess < randomNumber) {
        document.getElementById('message').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('message').textContent = 'Too high! Try again.';
    }
});