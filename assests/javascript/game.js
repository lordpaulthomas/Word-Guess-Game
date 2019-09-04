lives = 12;
wins = 0;
losses = 0;
lives = 12;
guessedLetters = [];
var answerArray = ['advice', 'aflame', 'cooler', 'convex', 'devout', 'falcon', 'gazers', 'gloomy', 'insure', 'insult', 'joyful', 'lizard', 'lentil', 'mumble', 'normal'];
var hiddenArray = [];
var openArray = [];
var playGame = confirm('Wanna Guess My Word?')
var answer = "";
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

function checkForWin(arr1, arr2) {
    var sum = 0;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sum++;
        }
    }
    if (sum === arr1.length) {
        return true;
    }
}

function resetBoard() {
    hiddenArray = [];
    guessedLetters = [];
    lives = 12;
    answer = answerArray[Math.floor(Math.random() * answerArray.length)];
    console.log(answer);
    for (var i = 0; i < answer.length; i++) {
        hiddenArray.push('-');
    }
}



if (playGame) {
    var answer = answerArray[Math.floor(Math.random() * answerArray.length)];
    for (var i = 0; i < answer.length; i++) {
        hiddenArray.push('-');
    }
    for (var y = 11; y > 0; y--) {
        document.onkeyup = function (event) {
            for(var i = 0; i < answer.length; i++){
                if (event.key === guessedLetters[i]) {
                alert('You Already Pressed That Key')
                lives++
                }
            }
                var go = event.key;
                guessedLetters.push(go);

                for (var i = 0; i < answer.length; i++) {
                    if (answer[i] === go) {
                        hiddenArray[i] = go;
                    }

                }
                if (userGuessCheck(go, answer) === false) {
                    lives--;
                }
                if (lives === 0) {
                    alert('Game Over.  The word was ' + answer)
                    losses++
                    if (confirm('PlayAgain')) {
                        resetBoard()
                    }
                }



                if (checkForWin(answer, hiddenArray)) {
                    alert('You Win!  The word was ' + answer);
                    wins++
                    if (confirm('PlayAgain')) {
                        resetBoard()
                    }


                }

                html = "<p>What's The Word?:</p>" + hiddenArray.join(" ") + "<p>Letters you have guessed so far:  " + guessedLetters.join(" ") + "</p>" + "<p>Guesses Left:  " + lives + "<p>Wins : " + wins + "<p/><p>Losses: " + losses;
                document.getElementById('lead').innerHTML = html;
            }
        

    }
}
        