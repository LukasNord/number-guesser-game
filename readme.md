# TODO
## Setup
- [x] Initial setup
- [x] Setup server.js and verify functional

## Setup Mode
### Game Setup Page
- [x] DOM Setup - two divs, selector element, start button
### Functionality
- [X] Event listener on start game btn
- [X] Store user max choice in a variable, function fun
- [X] POST max number choice from user with .ajax to server (body-parser)
- [X] app.post in server.js to connect to above POST
- [x] Random number generator creation, function, require/export to server.js
- [x] Call random num generator function, pass in req.body the max value to use in the game
- [x] This mode is complete, on success, hide setup mode div

## Play Mode
- [X] DOM Setup - 4 inputs for each player, submit button, total guess indicator, max number indicator, higher/lower indicator, cancel game button, success message, restart button for winner
### Functionality
- [ ] Display max chosen in setup mode as a reminder
- [x] Event listener on submit guess button
- [x] Store users guesses in an object
- [x] Clear input fields
- [ ] Guess count on client.js
- [x] POST the object with .ajax to the server
- [x] app.post in server.js to connect to above POST
- [x] In module, do comparison calculations  - the hint and winner - on success, do GET, on client.js using array to loop to compare display high/low/win
- [ ] High/low/win indicator on DOM
- [ ] Event listener on restart button to reset game, same function as the cancel button 
- [ ] Event listener for cancel btn to reset game and go back to setup mode - POST, to reset everything to default



## STYLE THIS STUFFS