lives = 5;
guessedLetters = [];
answerArray = ['advice', 'aflame', 'cooler', 'convex', 'devout', 'falcon', 'gazers', 'gloomy', 'insure', 'insult', 'joyful', 'lizard', 'lentil', 'mumble', 'normal'];
var hiddenArray = [];
var openArray = []
var answer = answerArray[Math.floor(Math.random() * answerArray.length)];
console.log(answer);
var userGuess = 'a'



function userGuessCheck(nm, arr) {
    var isFound = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === nm) {
            isFound = true;
        }
    }
    return isFound
}

function makeHiddenArray(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        arr2.push('-');
    }
    return arr2;
}

function updateHiddenArray(nm, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === nm) {
            arr[i] = nm;
        } else {
            arr[i] = '-';
        }
    }
    return arr;
}

function checkForWin(arr1, arr2){
    var sum = 0;
    for (var i = 0; i < arr1.length; i++ ){
        if(arr1[i] === arr2[i]){
            sum++;
        }
    }
    if (sum === arr1.length){
        return true;
    }
}

openArray = makeHiddenArray(answer, hiddenArray);

console.log(openArray)

if (userGuessCheck(userGuess, answer)) {
    for (var i = 0; i < answer.length; i++) {
        if (answer[i] === userGuess) {
            openArray[i] = userGuess;
        } 
        } 
} else  {
    lives--;
} 

console.log(lives)
console.log(userGuess)
console.log(openArray);

