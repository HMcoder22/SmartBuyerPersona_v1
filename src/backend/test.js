var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));

app.post("/api", function(req, res){
    res.json(req.body);
})

app.listen(4000);