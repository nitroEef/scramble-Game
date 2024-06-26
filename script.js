const wordElement = document.querySelector(".question");
const hintElement = document.querySelector(".hint span");
const timeLeftElement = document.querySelector(".time strong");
const inputField = document.querySelector("input");
const shuffleButton = document.querySelector(".btn-secondary");
const submitButton = document.querySelector(".btn-dark");
const scoreElement = document.querySelector(".scoreValue"); // Select the score element

let currentWordIndex = 0; 
let currentWord = "";

let timeLeft = 30;
let timer; 
let score = 0; 


// List of words to choose from
const words = [
    { original: "BODE", hint: "to promise" },
    { original: "FAME", hint: "state of being known" },
    { original: "CLOSET", hint: "a private or inner room" },
    { original: "BREAD", hint: "a food" },
    { original: "NIGERIA", hint: "a country in Africa" },
    { original: "COMPUTER", hint: "a technology" },
    { original: "TECHNOLOGY", hint: "an invented mechanism" },
    { original: "CHALLENGE", hint: "a dare" },
    { original: "SCRAMBLE", hint: "A game" },
    { original: "TELEVISION", hint: "an electronic mechanism" },
    { original: "ABSOLUTE", hint: "opposite of relative" },
    { original: "EVERYTHING", hint: "all" },  
    { original: "INFORMATION", hint: "things that can be known about a given topic" },
    { original: "APPARENT", hint: "capable of being seen" },
    { original: "ACAPELLA", hint: "A genre of music" },
    { original: "BANANA", hint: "Yellow fruit" },
    { original: "APARTHEID", hint: "a system of government" },
    { original: "AVAILABLE", hint: "that is present" },
    { original: "JAVASCRIPT", hint: "a programming language" },
    { original: "WRESTLING", hint: "a sport" },
];

// Function to scramble a word
function scrambleWord(word) {
    const array = word.split("");

    for (let i = array.length - 1; i > 0; i--) {
        const junior = Math.floor(Math.random() * (i + 1));
        [array[i], array[junior]] = [array[junior], array[i]];
    }

    return array.join("");
}


// Scramble the words in the array 
words.forEach(wordObj => {
    wordObj.scrambled = scrambleWord(wordObj.original);
});

//  Function to update the time left
function updateTimeLeft() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        inputField.setAttribute("disabled", "disabled");
        submitButton.setAttribute("disabled", "disabled");
        alert("Time's up! Try the next word.");
        newRound();
    } else {
        timeLeft--;
        timeLeftElement.textContent = `${timeLeft} sec`;
    }
}

// Function to update the score on the page
function updateScore() {
  scoreElement.textContent = score 
}

// Function to start a new round
function newRound() {
    if (currentWordIndex >= words.length) {
        currentWordIndex = 0;
        alert("THE GAME IS OVER, YOU HAVE COMPLETED ALL WORDS.");
    }

    currentWord = words[currentWordIndex];
    wordElement.textContent = currentWord.scrambled;
    hintElement.textContent = currentWord.hint;
    timeLeft = 30;
    inputField.value = "";
    inputField.removeAttribute("disabled");
    submitButton.removeAttribute("disabled");
    clearInterval(timer);
    timer = setInterval(updateTimeLeft, 1000);
    currentWordIndex++;
}

// Event listener for submit button
submitButton.addEventListener("click", function () {
    const userGuess = inputField.value.toUpperCase();
    if (userGuess === currentWord.original) {
        clearInterval(timer);
        inputField.setAttribute("disabled", "disabled");
        submitButton.setAttribute("disabled", "disabled");
        score++; // Increase the score
        updateScore(); // Update the score on the page
        alert("Correct! Next word.");
        newRound();
    } else {
        alert("Incorrect. Try again!");
    }
});


// Event listener for shuffle button
shuffleButton.addEventListener("click", newRound);

// Initialize the game with the first word
newRound();