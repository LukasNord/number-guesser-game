console.log('client.js sourced');

$(document).ready(start);

function start() {
    console.log('started');
    // Event listeners

    $('#start-button').on('click', startGame);


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

