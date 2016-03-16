'use strict';

var express = require('express');
var app = express();
var http = require('http');
var request = require('request');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/conversationAI', function(req, res) {
request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     'https://tus-answering.mybluemix.net/get_answer',
  form: {
        user_question:req.body.question ,
   },
  
}, function(error, response, body){
	    if (error) {
            console.log(error);
        } else {
            console.log(body);
            res.json(body)
		}	
});
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
})