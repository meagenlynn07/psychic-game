var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guesses = 10;

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    //console.log(computerChoice)

document.onkeyup = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
        guessed.textContent += userGuess + ' ';
    }

    if(guesses === 0){
        losses++;
        guesses = 10;
        } else if (losses === 5) {
            alert("GAME OVER")
    } 
   

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guesses').innerHTML = guesses;

}  