const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/maxnumber', function(req, res){
    console.log('req body', req.body);
    res.sendStatus(201);
});

const port = 1225;
app.listen(port, function(){
    console.log('server is up on port:', port);
});