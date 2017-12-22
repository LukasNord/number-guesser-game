const express = require('express');
const app = express();

app.use(express.static('server/public'));

const port = 1225;
app.listen(port, function(){
    console.log('server is up on port:', port);
});

