lives = 5;

answerArray = ['advice', 'aflame', 'cooler', 'convex', 'devout', 'falcon', 'gazers', 'gloomy', 'insure', 'insult', 'joyful', 'lizard', 'lentil', 'mumble', 'normal'];
var hiddenArray = [];
var openArray = []
var answer = answerArray[Math.floor(Math.random() * answerArray.length)];
console.log(answer);
for (var i = 0; i < answer.length; i++) {
    hiddenArray.push('-');
}
console.log(hiddenArray);

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

    document.onkeyup = function (event) {
        var go = event.key;
        for (var i = 0; i < answer.length; i++) {
            if (answer[i] === go) {
                hiddenArray[i] = go;
            }
        }
    if(checkForWin(hiddenArray, answer)){
        document.write('you win');
    }

        console.log(lives)
        console.log(hiddenArray);
        html = "<p>You have to guess:</p>" + hiddenArray.join(" ");
        document.getElementById('lead').innerHTML = html;
    }
