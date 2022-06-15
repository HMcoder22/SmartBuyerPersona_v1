var express = require('express');
var serverless = require('serverless-http');
// var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser);
app.use(express.json({limit: '50mb'}));

// Get data from '/api' post request
app.post("/api", function(req, res){
    const data = req.body;

    if(data.gender === undefined || data.gender === ''){
        data.error = 'empty_gender'        
        res.json(data);
        return;
    }
    if((data.age === undefined || data.age === '') && (data.occupation === undefined || data.occupation === '')){
        data.error = 'empty_age_and_occupation';
        res.json(data);
        return;
    }
    if(data.country === undefined || data.country === '' || data.state === undefined || data.state === ''){
        data.error = 'empty_location';
        res.json(data);
        return;
    }
    res.json(data);
})

module.exports.handler = serverless(app);