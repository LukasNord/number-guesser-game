console.log('client.js sourced');

$(document).ready(start);

function start() {
    console.log('started');
    // Event listeners

    $('#start-button').on('click', startGame);
    // $('#restart-button').on('click', )
    $('#submit-button').on('click', submitGuess );


}//end start function 
class Player {
    constructor(name, guess){
        this.name = name;
        this.guess = guess;
    }
}

function startGame() {
    let maxValue = getMaxValue();

    $.ajax({
        method: 'POST',
        url: '/maxnumber',
        data: { maxValue : maxValue },
        success: function(response) {
            console.log('response', response);
            $('#setup-mode').hide();
            $('#play-mode').show();
        }
    });

} // end startGame

function getMaxValue() {
    let maxValue = Number($('#max-selector').val());
    return maxValue;
}
function submitGuess(){
    let playerArray = [ ];
    $('#user-list li').each(function(){
        // console.log($('.player-name').text());
    let playerName = $(this).find('.player-name').text();
    let playerGuess = $(this).find('input').val();
    // let newPlayer = new Player(playerName, playerGuess);   
    playerArray.push(new Player(playerName, playerGuess));
    $(this).find('input').val('');
    });//end submitGuess function 
    console.log(playerArray);
}//end submit guess function 

