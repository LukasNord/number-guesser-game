let newPlayerArray = [];

function checkGuesses(playerArray, randomNumber) {
    console.log(playerArray, randomNumber);
    
    for (let i = 0; i < playerArray.length; i++) {
        if(playerArray[i].guess == randomNumber) {
            console.log('winner here');
            // add property contains string "win"
            playerArray[i].result = 'win';
        } else if (playerArray[i].guess > randomNumber) {
            console.log('go lower');
            playerArray[i].result = 'lower';
            // add property contains string "lower"
        } else {
            console.log('go higher');
            playerArray[i].result = 'higher';
            // add property contains string "higher"
        }
    }

    console.log('playerArray', playerArray);

    for (let i = 0; i < playerArray.length; i++) {
        newPlayerArray.push(playerArray[i]);
    }
    
}

module.exports = {
    guess: checkGuesses, 
    playerArray: newPlayerArray
};