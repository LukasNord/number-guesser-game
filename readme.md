# TODO
## Setup
- [x] Initial setup
- [x] Setup server.js and verify functional

## Setup Mode
### Game Setup Page
- [x] DOM Setup - two divs, selector element, start button
### Functionality
- [ ] Event listener on start game btn
- [ ] Store user max choice in a variable
- [ ] Random number generator creation, function, require/export to server.js
- [ ] POST number range from user with .ajax to server
- [ ] app.post in server.js to connect to above POST
- [ ] Call random num generator function, pass in req.body the max value to use in the game
- [ ] This mode is complete, on success, hide setup mode div

## Play Mode
- [X] DOM Setup - 4 inputs for each player, submit button, total guess indicator, max number indicator, higher/lower indicator, cancel game button, success message, restart button for winner
### Functionality
- [ ] Event listener for cancel btn to reset game and go back to setup mode - POST, to reset everything to default
- [ ] Display max chosen in setup mode as a reminder
- [ ] Event listener on submit guess button
- [ ] Store users guesses in an object
- [ ] Clear input fields
- [ ] Guess count on client.js
- [ ] POST the object with .ajax to the server
- [ ] app.post in server.js to connect to above POST
- [ ] In module, do comparison calculations  - the hint and winner - on success, do GET, on client.js using array to loop to compare display high/low/win
- [ ] High/low/win indicator on DOM
- [ ] Event listener on restart button to reset game, same function as the cancel button 



## STYLE THIS STUFFS