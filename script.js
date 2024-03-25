// Variables
let currentWordIndex = 0;
let currentWord = "";
let timeLeft = 30; 
let timer;
const wordElement = document.querySelector(".word");
const hintElement = document.querySelector(".hint span");
const timeLeftElement = document.querySelector(".hint strong");
const inputField = document.querySelector("input");
const shuffleButton = document.querySelector(".btn-secondary");
const submitButton = document.querySelector(".btn-dark");


// / List of words to choose from
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
//     The split method is used to split the word into an array of individual characters.
// Each character becomes an element in the array.

    for (let i = array.length - 1; i > 0; i--) {
        const junior = Math.floor(Math.random() * (i + 1));
        [array[i], array[junior]] = [array[junior], array[i]];
    }
//     This loop iterates over each character of the array,
//      starting from the last character (array.length - 1) 
//      and going backward until the first character.
// For each character at index i, it generates a random
//  index junior between 0 and i, inclusive.
// It then swaps the characters at indices i and junior, 
// effectively shuffling the characters randomly.
    return array.join("");
//     The join method is used to concatenate the characters
//      of the array back into a single string.
// The characters are joined without any separator,
//  resulting in the scrambled version of the original word.
}

// Scramble the words in the array
words.forEach(wordObj => {
//     This method is called on the words array.
// It iterates through each element of the array and 
// executes the provided callback function for each element.
// This is an arrow function used as the callback for forEach.
// It takes each element of the array as its parameter, here named wordObj.
    wordObj.scrambled = scrambleWord(wordObj.original);
//     For each wordObj (word object) in the array:
// It accesses the original property of the current wordObj, which presumably holds the unscrambled word.
// It passes the original word to the scrambleWord function to get a scrambled version.
// It assigns the scrambled version to the scrambled property of the wordObj.
// This code effectively scrambles each word in the words array by calling the
//  scrambleWord function and assigns the scrambled version to the scrambled 
//  property of each word object. 
// This operation modifies the original array in place.
});
// This line of code utilizes the forEach method to iterate 
// through each object in the words array and applies a scrambling 
// function (scrambleWord) to each original word, assigning the scrambled 
// version to the scrambled property of each object.






// Function to start a new round
function newRound() {
    if (currentWordIndex >= words.length) {
        // If all words are used, reset the game
        currentWordIndex = 0;
        alert("Game Over! You've completed all words.");
    }

    // This above condition checks if all words in the words array have been used. 
    // If so, it resets the game by setting currentWordIndex back to 0 and alerts 
    // the user that they've completed all words.


    currentWord = words[currentWordIndex];
    wordElement.textContent = currentWord.scrambled;
    hintElement.textContent = currentWord.hint;
    // It sets currentWord to the word at the current index in the words array.
    // It updates the content of wordElement with the scrambled version of the current word.
    // It updates the content of hintElement with the hint for the current word.
    
    
    timeLeft = 30;
    inputField.value = "";
    inputField.removeAttribute("disabled");
    submitButton.removeAttribute("disabled");
//     It resets the timeLeft variable to 30 seconds.
// It clears the input field by setting its value to an empty string.
// It removes the disabled attribute from the input field and submit button, allowing user interaction.
   
clearInterval(timer);
    timer = setInterval(updateTimeLeft, 1000);
//     It stops the previous timer by calling clearInterval(timer).
// It sets up a new timer using setInterval, which calls the updateTimeLeft
//  function every second (1000 milliseconds).

    currentWordIndex++;
    // It increments the currentWordIndex to move to the
    //  next word in the words array for the next round.

}

// Function to update the time left

// This conditional statement checks if the timeLeft 
// variable is less than or equal to zero. If it is, it 
// executes the code block under the if statement. Otherwise, 
// it executes the code block under the else statement

// This conditional statement checks if the timeLeft variable 
// is less than or equal to zero. If it is, it executes the code block under the if statement. 
// Otherwise, it executes the code block under the else statement

If the time left is not zero or negative:
It decrements the timeLeft variable by one.
It updates the text content of the timeLeftElement
 (presumably an HTML element displaying the remaining time) 
to show the updated time left in seconds In summary, the 
updateTimeLeft function manages the countdown timer for the game.
 It decrements the time left every second and triggers actions 
 when the time runs out, such as disabling input, stopping the timer,
  alerting the user, and starting a new round.






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

// Event listeners
// his function is called when the shuffle button is clicked.
// It presumably sets up a new round of the game, shuffling 
// words or resetting the game state.This code seems to be a
//  part of a game or quiz application where users have to guess 
//  words. When the user submits a guess, it checks if it's correct
//   or not, and based on that, it takes appropriate actions like 
//   disabling input, showing alerts, and starting a new round.
shuffleButton.addEventListener("click", newRound);

submitButton.addEventListener("click", function () {
//     These lines add event listeners to two buttons, 
//     shuffleButton and submitButton When shuffleButton 
//     is clicked, it triggers the newRound function.
//    When submitButton is clicked, it triggers an anonymous
//     function that handles user input validation.


// When the submitButton is clicked, it executes the function.
// It retrieves the value entered by the user from the inputField
//  and converts it to uppercase using toUpperCase().
// It then compares the user's guess (userGuess) with
//  the original property of currentWord.

    const userGuess = inputField.value.toUpperCase();
    if (userGuess === currentWord.original) {
        clearInterval(timer);
        inputField.setAttribute("disabled", "disabled");
        submitButton.setAttribute("disabled", "disabled");
        alert("Correct! Next word.");
        newRound();
    } else {
        alert("Incorrect. Try again!");
    }
//     If the user's guess matches the original word:
// It stops the timer by calling clearInterval(timer).
// It disables the input field and submit button by setting their disabled attribute to "disabled".
// It alerts the user with a message saying "Correct! Next word."
// It calls the newRound function to start a new round.
// If the user's guess is incorrect:
// It alerts the user with a message saying "Incorrect. Try again!"

});

// Initialize the game with the first word
newRound();
