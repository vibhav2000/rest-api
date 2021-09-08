const express = require('express');
const mongoose = require('mongoose');

const app = express();

// connection to mongodb
mongoose.connect('mongodb://localhost/mydata');
mongoose.Promise = global.Promise; //this is depreciate now

app.use(express.static('public'));
app.use(express.json()); //initialised express to parse data sent/received

//making routes
app.use('/api',require('./router/api'));

app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
});

//We will then set up our application to start listening to the requests. We will use 4000 as the port number.
app.listen(process.env.port || 4000, function() {
    console.log('Works and ready to gooo!!');
});

