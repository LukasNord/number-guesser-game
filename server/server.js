const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const random = require('./modules/random-number');
const guess = require('./modules/comparison');

let randomNumber = 0;


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));


//recieves max value input from client
app.post('/maxnumber', function(req, res){
    //onsole.log('req body', req.body);
    randomNumber = random(req.body.maxValue);
    //console.log('random', randomNumber);
    res.sendStatus(201);
});


app.post('/playerguesses', function(req, res){
    //console.log(req.body);
    guess.guess(req.body.playerArray, randomNumber);
    
    res.sendStatus(201);
});

app.get('/playerguesses', function(req, res) {
    console.log('');
    res.send(guess.playerArray);
});

const port = 1225;
app.listen(port, function(){
    console.log('server is up on port:', port);
});