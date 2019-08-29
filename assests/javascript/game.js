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


    document.onkeyup = function (event) {
        isfound = false;
        var go = event.key;
        for (var i = 0; i < answer.length; i++) {
            if (answer[i] === go) {
                hiddenArray[i] = go;
            }
        }

        console.log(lives)
        console.log(hiddenArray);
        html = "<p>You have to guess:</p>" + hiddenArray;
        document.getElementById('lead').innerHTML = html;
    }
